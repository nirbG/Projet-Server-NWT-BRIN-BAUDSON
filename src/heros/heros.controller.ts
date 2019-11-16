import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ComicsService } from '../comics/comics.service';
import { HerosService } from './heros.service';
import { Observable } from 'rxjs';
import { Hero } from './interfaces/heros.interfaces';
import {HandlerParams} from "../validators/handler-params";

@Controller('heros')
export class HerosController {
  constructor(private readonly _herosService: HerosService) {
  }
  /*
   * find all
   */
  @Get()
  findAll(): Observable< Hero[] | void > {
    return this._herosService.findAll();
  }
  /*
   * find Some
   */
  @Get(':start/:end')
  findSome(@Param('start') start, @Param('end') end): Observable< Hero[] | void> {
    return this._herosService.findSome(start, end);
  }
  /*
   * find One
   */
  @Get(':id')
  findOne(@Param() params: HandlerParams): Observable<Hero> {
    return this._herosService.findOne(params.id);
  }
  /*
   * Create
   */
  @Post()
  create( @Body() body): Observable<Hero> {
    return this.create(body);
  }
  /*
   * update
   */
  @Put(':id')
  update(@Param() params: HandlerParams, @Body() body): Observable<Hero> {
    return this._herosService.update(params.id, body);
  }
  /*
   * delete
   */
  @Delete(':id')
  delete(@Param() params: HandlerParams): Observable<void> {
    return this._herosService.delete(params.id);
  }
}
