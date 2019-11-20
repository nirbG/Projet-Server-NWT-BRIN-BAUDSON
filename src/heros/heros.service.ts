import {ConflictException, Injectable, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import { Hero } from './interfaces/heros.interfaces';
import { from, Observable, of, throwError } from 'rxjs';
import {catchError, findIndex, flatMap, map, tap} from 'rxjs/operators';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import {HeroSimple} from "./interfaces/heroSimple.interfaces";
import {HerosEntity} from "./entities/heros.entity";
import {HerosDao} from "./dao/heros.dao";

@Injectable()
export class HerosService {
  private _heros: Hero[];

  /**
   * Class constructor
   */
  constructor(private readonly _herosDao: HerosDao) {
    this._heros = [];
  }

  /**
   * Returns all heros
   *
   * @returns  Observable<HerosEntity[] | void>
   */
  findAll(): Observable<HerosEntity[] |void> {
    return this._herosDao.find().pipe(
      map(_ => (!!_ && !!_.length) ? _.map(__ => new HerosEntity(__)) : undefined),
    );
  }

  /**
   * Returns some heros
   *
   * @param start index de debut
   * @param nb number of heros returned
   * @returns Observable<HerosEntity[] | void>
   */
  findSome(start: number, nb: number): Observable<HerosEntity[] | void> {
    return this._herosDao.findSome(start, nb).pipe(
        map(_ => (!!_ && !!_.length) ? _.map(__ => new HerosEntity(__)) : undefined),
    );
  }

  /**
   * Returns one hero
   *
   * @param id: string
   * @returns Observable<HerosEntity>
   */
  findOne(id: string): Observable<HerosEntity> {
    return this._herosDao.findById(id).pipe(
      catchError(e => throwError(new UnprocessableEntityException(e.message))),
      flatMap(_ => !!_ ?
        of(new HerosEntity(_)) :
        throwError(new NotFoundException(`hero with id '${id}' not found`)),
      ),
    );
  }

  /**
   * Returns the created hero
   *
   * @param body: CreateHeroDto
   * @returns Observable<HerosEntity>
   */
  create(body: CreateHeroDto): Observable<HerosEntity> {
    return this._addHeros(body).pipe(
      flatMap(_ => this._herosDao.create(_)),
      catchError(e => e.code = 11000 ? throwError(
        new ConflictException(`Hero with name '${body.name}' already exists`),):
        throwError(new UnprocessableEntityException(e.message)),
      ),
        map(_ => new HerosEntity(_)),
    );
  }

  /**
   * Returns the updated hero
   *
   * @param id: string
   * @param body: UpdateHeroDto
   * @returns Observable<HerosEntity>
   */
  update(id: string, body: UpdateHeroDto): Observable<HerosEntity> {
    return this._herosDao.findByIdAndUpdate(id, body).pipe(
      /*catchError(e => e.code = 11000 ? throwError(
          new ConflictException(`Hero with id '${body.id}' already exists`),) :
          throwError(new UnprocessableEntityException(e.message)),
      ),*/
      flatMap(_ => !!_ ? of(new HerosEntity((_))) :
          throwError(new NotFoundException(`Hero with id '${id}' not found`)),
      ),
    );
  }

  /**
   * Delete the hero
   *
   * @param _id: string
   * @returns Observable<void>
   */
  delete(_id: string): Observable<void> {
    return this._herosDao.findByIdAndRemove(_id).pipe(
      catchError(e => throwError(new NotFoundException(e.message))),
      flatMap(_ => !!_ ? of(undefined) :
        throwError(new NotFoundException(`Hero with id '${_id}' not found`)),
      ),
    );
  }


  /************************************************ PRIVATE METHODS ******************/

  /**
   * Add the hero
   *
   * @param body: CreateHeroDto
   * @private
   * @returns Observable<HerosEntity>
   */
  private _addHeros(body: CreateHeroDto): Observable<HerosEntity> {
    var mongoose = require('mongoose');
    return of(body).pipe(
      map( _ =>
        Object.assign(_, {
          _id: mongoose.Types.ObjectId(),
          ennemi: [] as HeroSimple[],
          allie: [] as HeroSimple[],
        }) as Hero,
      ),
      tap(_ => this._heros = this._heros.concat(_)), map(_ => new HerosEntity(_)),
    );
  }

  /**
   * return the hero's index
   * @param id
   * @private
   */
  private _findHeroIndexOfList(id: string): Observable<number> {
    return from(this._heros)
      .pipe(
        findIndex(_ => _.id === id),
        flatMap(_ => _ > -1 ?
          of(_) :
          throwError(new NotFoundException(`Hero with id '${id}' not found`)),
        ),
      );
  }
}
