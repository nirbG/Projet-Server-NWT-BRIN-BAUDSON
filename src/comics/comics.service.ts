import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Comics } from './interfaces/comics.interface';
import { COMICS } from '../data/comics';
import { from, Observable, of, throwError } from 'rxjs';
import { find, findIndex, flatMap, map, tap } from 'rxjs/operators';
import { CreateComicsDto } from './dto/create-comics.dto';
import { UpdateComicsDto } from './dto/update-comics.dto';
import {HeroSimple} from "../heros/interfaces/heroSimple.interfaces";
import {ComicsEntity} from "./entities/comics.entity";
import {ComicsDao} from "./dao/comics.dao";

@Injectable()
export class ComicsService {
  private _comics: Comics[];

  /**
   * Class constructor
   */
  constructor(private readonly _comicsDao: ComicsDao) {
    this._comics = [].concat(COMICS);
  }
  /**
   * Returns all comics
   */
  findAll(): Observable<ComicsEntity[] | void> {
    return this._comicsDao.find().pipe(
      map(_ => (!!_ && !!_.length) ? _.map(__ => new ComicsEntity(__)) : undefined),
      //map(_ => !!_ ? _.map(__ => new ComicsEntity(__)) : undefined),
    );
  }
  /**
   * returns some comics
   * @param s index de debut
   * @param e index de fin
   */
  findSome(s: string, e: string): Observable<ComicsEntity[] | void> {
    return of(this._comics.slice(+s, +e));
  }
  /**
   * return one comics
   * @param isbn
   */
  findOne(isbn: string): Observable<ComicsEntity> {
    return from(this._comics).pipe(
      find(_ => _.isbn === isbn),
      flatMap(_ => !!_ ?
        of(new ComicsEntity(_)) :
        throwError(new NotFoundException(`comics with isbn '${isbn}' not found`)),
      ),
    );
  }
  /**
   * return the comics create
   * @param body
   */
  create(body: CreateComicsDto): Observable<ComicsEntity> {
    return from(this._comics).pipe(
      find( _ => _.isbn === body.isbn),
      flatMap( _ => !!_ ?
        throwError(
          new ConflictException(`People with isbn '${body.isbn}' already exists`))
        : this._addComics(body),
      ),
    );
  }
  /**
   * return le comics modifier
   * @param isbn
   * @param body
   */
  update(isbn: string, body: UpdateComicsDto): Observable<ComicsEntity> {
    return this._findComicsIndexOfList(isbn).pipe(
      tap(_ => Object.assign(this._comics[_], body)),
      map(_ => new ComicsEntity(this._comics[_])),
    );
  }

  /**
   * supprimer le comics
   * @param isbn
   */
  delete(isbn: string): Observable<void> {
    return this._findComicsIndexOfList(isbn).pipe(
      flatMap( _ => this._comics = this._comics.filter(
        __ => __.isbn === this._comics[_].isbn)),
      map(_ => undefined),
    );
  }

  /************************************************ PRIVATE METHODS ******************/

  /**
   * ajoute le comics
   * @param body
   * @private
   */
  private _addComics(body: CreateComicsDto): Observable<ComicsEntity> {
    return of(body).pipe(
      map( _ =>
        Object.assign(_, {
          photo: _.isbn + '.jpg',
          mainHeros: {} as HeroSimple,
          otherHeros: [] as HeroSimple[],
          wish: false,
          inBD: false,
        }) as Comics,
      ),
      tap(_ => this._comics = this._comics.concat(_)), map(_ => new ComicsEntity(_)),
    );
  }

  /**
   * return l'index du comics
   * @param isbn
   * @private
   */
  private _findComicsIndexOfList(isbn: string): Observable<number> {
    return from(this._comics)
      .pipe(
        findIndex(_ => _.isbn === isbn),
        flatMap(_ => _ > -1 ?
          of(_) :
          throwError(new NotFoundException(`People with id '${isbn}' not found`)),
        ),
      );
  }
}
