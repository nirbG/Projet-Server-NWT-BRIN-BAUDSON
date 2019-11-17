import {ConflictException, Injectable, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import { Comics } from './interfaces/comics.interface';
import { COMICS } from '../data/comics';
import { from, Observable, of, throwError } from 'rxjs';
import {catchError, find, findIndex, flatMap, map, tap} from 'rxjs/operators';
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
    return this._comicsDao.findById(isbn).pipe(
      catchError(e => throwError(new UnprocessableEntityException(e.message))),
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
    return this._addComics(body).pipe(
      flatMap(_ => this._comicsDao.create(_)),
      catchError(e => e.code = 11000 ? throwError(
        new ConflictException(`comics with isbn '${body.isbn}' already exists`),):
          throwError(new UnprocessableEntityException(e.message)),
      ),
        map(_ => new ComicsEntity(_)),
    );
  }
  /**
   * return le comics modifier
   * @param isbn
   * @param body
   */
  update(isbn: string, body: UpdateComicsDto): Observable<ComicsEntity> {
    return this._comicsDao.findByIdAndUpdate(isbn, body).pipe(
      /*catchError(e => e.code = 11000 ? throwError(
        new ConflictException(`Comics with isbn '${body.isbn}' already exists`),) :
        throwError(new UnprocessableEntityException(e.message)),
      ),*/
        flatMap(_ => !!_ ? of(new ComicsEntity((_))) :
        throwError(new NotFoundException(`Comics with isbn '${isbn}' not found`)),
      ),
    );
  }

  /**
   * supprimer le comics
   * @param isbn
   */
  delete(isbn: string): Observable<void> {
    //return this._findComicsIndexOfList(isbn).pipe(
    return this._comicsDao.findByIdAndRemove(isbn).pipe(
      /*flatMap( _ => this._comics = this._comics.filter(
        __ => __.isbn === this._comics[_].isbn)),
      map(_ => undefined),*/
      catchError(e => throwError(new NotFoundException(e.message))),
      flatMap(_ => !!_ ? of(undefined) :
        throwError(new NotFoundException(`Comics with isbn '${isbn}' not found`)),
      ),
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
