import {ConflictException, Injectable, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import { Hero } from './interfaces/heros.interfaces';
import { from, Observable, of, throwError } from 'rxjs';
import {catchError, filter, find, findIndex, flatMap, map, tap} from 'rxjs/operators';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import {HeroSimple} from "./interfaces/heroSimple.interfaces";
import {HerosEntity} from "./entities/heros.entity";
import {HerosDao} from "./dao/heros.dao";

@Injectable()
export class HerosService {
  private _heros: Hero[];

  constructor(private readonly _herosDao: HerosDao) {
  }

  findAll(): Observable<HerosEntity[] |void> {
    return this._herosDao.find().pipe(
      map(_ => (!!_ && !!_.length) ? _.map(__ => new HerosEntity(__)) : undefined),
      //map(_ => !!_ ? _.map(__ => new HerosEntity(__)) : undefined),
    );
  }

  findSome(start: string, end: string): Observable<HerosEntity[] | void> {
    //return of(this._heros.slice(+start, +end));
    return this._herosDao.find().pipe(
        map(_ => (!!_ && !!_.length) ? _.map(__ => new HerosEntity(__)) : undefined),
    );
  }

  findOne(id: string): Observable<HerosEntity> {
    return this._herosDao.findById(id).pipe(
      catchError(e => throwError(new UnprocessableEntityException(e.message))),
      flatMap(_ => !!_ ?
        of(new HerosEntity(_)) :
        throwError(new NotFoundException(`hero with id '${id}' not found`)),
      ),
    );
  }

  create(body: CreateHeroDto): Observable<HerosEntity> {
    //return from(this._heros).pipe(
    return this._addHeros(body).pipe(
      //find( _ => _.id === body.id),
      //flatMap( _ => !!_ ?
      flatMap(_ => this._herosDao.create(_)),
      catchError(e => e.code = 11000 ? throwError(
        new ConflictException(`People with id '${body._id} already exists`),):
        //: this._addComics(body),
        throwError(new UnprocessableEntityException(e.message)),
      ),
        map(_ => new HerosEntity(_)),
    );
  }

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

  delete(_id: string): Observable<void> {
    return this._herosDao.findByIdAndRemove(_id).pipe(
      catchError(e => throwError(new NotFoundException(e.message))),
      flatMap(_ => !!_ ? of(undefined) :
        throwError(new NotFoundException(`Hero with id '${_id}' not found`)),
      ),
    );
  }

  private _addHeros(body: CreateHeroDto): Observable<HerosEntity> {
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
