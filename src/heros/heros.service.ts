import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Hero } from './interfaces/heros.interfaces';
import { HEROS } from '../data/heros';
import { from, Observable, of, throwError } from 'rxjs';
import { filter, find, findIndex, flatMap, map, tap } from 'rxjs/operators';
import retryTimes = jest.retryTimes;
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import {HeroSimple} from "./interfaces/heroSimple.interfaces";
import {HerosEntity} from "./entities/heros.entity";

@Injectable()
export class HerosService {
  private _heros: Hero[];

  constructor() {
    this._heros = [].concat(HEROS);
  }

  findAll(): Observable<HerosEntity[] |void> {
    return of(this._heros).pipe(
      map(_ => (!!_ && !!_.length) ? _.map(__ => new HerosEntity(__)) : undefined),
    );
  }

  findSome(start: string, end: string): Observable<HerosEntity[] | void> {
    return of(this._heros.slice(+start, +end));
  }

  findOne(id: string): Observable<HerosEntity> {
    return from(this._heros).pipe(
      find(_ => _.id === id),
      flatMap(_ => !!_ ?
        of(new HerosEntity(_)) :
        throwError(new NotFoundException(`hero with id '${id}' not found`)),
      ),
    );
  }

  create(body: CreateHeroDto): Observable<HerosEntity> {
    return from(this._heros).pipe(
      find( _ => _.id === body.id),
      flatMap( _ => !!_ ?
        throwError(
          new ConflictException(`People with id '${body.id}' already exists`))
        : this._addComics(body),
      ),
    );
  }

  update(id: string, body: UpdateHeroDto): Observable<HerosEntity> {
    return this._findHeroIndexOfList(id).pipe(
      tap(_ => Object.assign(this._heros[_], body)),
      map(_ => new HerosEntity(this._heros[ _ ])),
    );
  }

  delete(id: string): Observable<void> {
    return this._findHeroIndexOfList(id).pipe(
      flatMap( _ => this._heros = this._heros.filter(
        __ => __.id === this._heros[_].id)),
      map( _ => undefined),
    );
  }

  private _addComics(body: CreateHeroDto): Observable<HerosEntity> {
    return of(body).pipe(
      map( _ =>
        Object.assign(_, {
          ennemi: [] as HeroSimple[],
          allie: [] as HeroSimple[],
        }) as Hero,
      ),
      tap(_ => this._heros = this._heros.concat(_)), map(_ => new HerosEntity(_)),
    );
  }
  /**
   * return l'index du comics
   * @param id
   * @private
   */
  private _findHeroIndexOfList(id: string): Observable<number> {
    return from(this._heros)
      .pipe(
        findIndex(_ => _.id === id),
        flatMap(_ => _ > -1 ?
          of(_) :
          throwError(new NotFoundException(`People with id '${id}' not found`)),
        ),
      );
  }
}
