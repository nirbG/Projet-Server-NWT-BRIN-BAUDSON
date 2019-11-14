import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ComicsService } from '../comics/comics.service';
import { HerosService } from './heros.service';
import { Observable } from 'rxjs';
import { Hero } from './interfaces/heros.interfaces';

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
  findOne(@Param('id') id): Observable<Hero> {
    return this._herosService.findOne(id);
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
  update(@Param('id') id: number, @Body() body): Observable<Hero> {
    return this.update(id, body);
  }
  /*
   * delete
   */
  @Delete(':id')
  delete(@Param('id') id: number): Observable<void> {
    return this.delete(id);
  }
}
