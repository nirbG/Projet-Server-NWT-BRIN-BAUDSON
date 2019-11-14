import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Hero } from './interfaces/heros.interfaces';
import { HEROS } from '../data/heros';
import { from, Observable, of, throwError } from 'rxjs';
import { filter, find, findIndex, flatMap, map, tap } from 'rxjs/operators';
import retryTimes = jest.retryTimes;
import { CreateComicsDto } from '../comics/dto/create-comics.dto';
import { Comics } from '../comics/interfaces/comics.interface';
import { HeroCreateDto } from './dto/create-hero.dto';
import { HeroUpdateDto } from './dto/update-hero.dto';

@Injectable()
export class HerosService {
  private _heros: Hero[];

  constructor() {
    this._heros = [].concat(HEROS);
  }

  findAll(): Observable<Hero[] |void> {
    return of(this._heros).pipe(
      map(_ => (!!_ && !!_.length) ? _ : undefined),
    );
  }

  findSome(start: string, end: string): Observable<Hero[] | void> {
    return of(this._heros.slice(+start, +end));
  }
  findOne(id: string): Observable<Hero> {
    return from(this._heros).pipe(
      find(_ => _.id === +id),
      flatMap(_ => !!_ ?
        of(_) :
        throwError(new NotFoundException(`hero with id '${id}' not found`)),
      ),
    );
  }
  create(body: HeroCreateDto): Observable<Hero> {
    return from(this._heros).pipe(
      find( _ => _.id === body.id),
      flatMap( _ => !!_ ?
        throwError(
          new ConflictException(`People with isbn '${body.id}' already exists`))
        : this._addComics(body),
      ),
    );
  }
  update(id: string, body: HeroUpdateDto): Observable<Hero> {
    return this._findHeroIndexOfList(id).pipe(
      tap(_ => Object.assign(this._heros[_], body)),
      map(_ => this._heros[_]),
    );
  }
  delete(id: string): Observable<void> {
    return this._findHeroIndexOfList(id).pipe(
      flatMap( _ => this._heros = this._heros.filter(
        __ => __.id === this._heros[_].id)),
      map( _ => undefined),
    );
  }

  private _addComics(body: HeroCreateDto): Observable<Hero> {
    return of(body).pipe(
      map( _ =>
        Object.assign(_, {
          ennemi: [] as Hero[],
          allie: [] as Hero[],
        }) as Hero,
      ),
      tap(_ => this._heros = this._heros.concat(_)),
    );
  }
  /**
   * return l'index du comics
   * @param isbn
   * @private
   */
  private _findHeroIndexOfList(id: string): Observable<number> {
    return from(this._heros)
      .pipe(
        findIndex(_ => _.id === +id),
        flatMap(_ => _ > -1 ?
          of(_) :
          throwError(new NotFoundException(`People with id '${id}' not found`)),
        ),
      );
  }
}
