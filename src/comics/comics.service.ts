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
   * @param start starting index
   * @param nb number of comics returned
   * @returns Observable<ComicsEntity[] | void>
   */
  findSome(start: number, nb: number): Observable<ComicsEntity[] | void> {
    return this._comicsDao.findSome(start, nb).pipe(
        map(_ => (!!_ && !!_.length) ? _.map(__ => new ComicsEntity(__)) : undefined),
    );
  }

  /**
   * Returns one comics
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
   * Returns the comics created
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
   * Returns the updated comics
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
   * Delete the comics
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
   * Add the comics to the list
   *
   * @param body: CreateComicsDto
   * @private
   * @returns Observable<ComicsEntity>
   */
  private _addComics(body: CreateComicsDto): Observable<ComicsEntity> {
    return of(body).pipe(
      map( _ =>
        Object.assign(_, {
          mainHeros: {_id: 'none',
          name: 'none',
          photo: 'none.jpg'} as HeroSimple,
          otherHeros: [] as HeroSimple[],
          wish: false,
          inBD: false,
        }) as Comics,
      ),
      tap(_ => this._comics = this._comics.concat(_)), map(_ => new ComicsEntity(_)),
    );
  }

  /**
   * returns the comics'index
   *
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
