import {ConflictException, Injectable, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import { Comics } from './interfaces/comics.interface';
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
    this._comics = [];
  }

  /**
   * Returns all comics
   *
   * @returns  Observable<ComicsEntity[] | void>
   */
  findAll(): Observable<ComicsEntity[] | void> {
    return this._comicsDao.find().pipe(
      map(_ => (!!_ && !!_.length) ? _.map(__ => new ComicsEntity(__)) : undefined),
    );
  }

  /**
   * returns some comics
   *
   * @param s index de debut
   * @param e index de fin
   * @returns Observable<ComicsEntity[] | void>
   */
  findSome(s: string, e: string): Observable<ComicsEntity[] | void> {
    //return of(this._comics.slice(+s, +e));
    return this._comicsDao.find().pipe(
        map(_ => (!!_ && !!_.length) ? _.map(__ => new ComicsEntity(__)) : undefined),
    );
  }

  /**
   * return one comics
   *
   * @param _id: string
   * @returns Observable<ComicsEntity>
   */
  findOne(_id: string): Observable<ComicsEntity> {
    return this._comicsDao.findById(_id).pipe(
      catchError(e => throwError(new UnprocessableEntityException(e.message))),
      flatMap(_ => !!_ ?
        of(new ComicsEntity(_)) :
        throwError(new NotFoundException(`comics with id '${_id}' not found`)),
      ),
    );
  }

  /**
   * Retourne the comics created
   *
   * @param body: CreateComicsDto
   * @returns Observable<ComicsEntity>
   */
  create(body: CreateComicsDto): Observable<ComicsEntity> {
    return this._addComics(body).pipe(
      flatMap(_ => this._comicsDao.create(_)),
      catchError(e => e.code = 11000 ? throwError(
        new ConflictException(`comics with id '${body._id}' already exists`),):
          throwError(new UnprocessableEntityException(e.message)),
      ),
        map(_ => new ComicsEntity(_)),
    );
  }

  /**
   * Retourne le comics modifie
   *
   * @param _id: string
   * @param body: UpdateComicsDto
   * @returns Observable<ComicsEntity>
   */
  update(_id: string, body: UpdateComicsDto): Observable<ComicsEntity> {
    return this._comicsDao.findByIdAndUpdate(_id, body).pipe(
        flatMap(_ => !!_ ? of(new ComicsEntity((_))) :
        throwError(new NotFoundException(`Comics with id '${_id}' not found`)),
      ),
    );
  }

  /**
   * Supprimer le comics
   *
   * @param _id: string
   * @returns Observable<void>
   */
  delete(_id: string): Observable<void> {
    return this._comicsDao.findByIdAndRemove(_id).pipe(
      catchError(e => throwError(new NotFoundException(e.message))),
      flatMap(_ => !!_ ? of(undefined) :
        throwError(new NotFoundException(`Comics with id '${_id}' not found`)),
      ),
    );
  }

  /************************************************ PRIVATE METHODS ******************/

  /**
   * ajoute le comics
   *
   * @param body: CreateComicsDto
   * @private
   * @returns Observable<ComicsEntity>
   */
  private _addComics(body: CreateComicsDto): Observable<ComicsEntity> {
    return of(body).pipe(
      map( _ =>
        Object.assign(_, {
          photo: _._id + '.jpg',
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
   * @param _id
   * @private
   */
  private _findComicsIndexOfList(_id: string): Observable<number> {
    return from(this._comics)
      .pipe(
        findIndex(_ => _._id === _id),
        flatMap(_ => _ > -1 ?
          of(_) :
          throwError(new NotFoundException(`People with id '${_id}' not found`)),
        ),
      );
  }
}
