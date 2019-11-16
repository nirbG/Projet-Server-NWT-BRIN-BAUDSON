import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ComicsService } from './comics.service';
import { Comics } from './interfaces/comics.interface';
import { CreateComicsDto } from './dto/create-comics.dto';
import { UpdateComicsDto } from './dto/update-comics.dto';
import {HandlerParams} from "../validators/handler-params";

@Controller('comics')
export class ComicsController {

  constructor(private readonly _comicsService: ComicsService) {
  }
  /*
   * findAll
   */
  @Get()
  findAll(): Observable<Comics[] | void> {
    return this._comicsService.findAll();
  }
  /*
   *findSome
   */
  @Get(':start/:end')
  findSome(@Param('start') start: string,
           @Param('end') end: string): Observable<Comics[] | void> {
    return this._comicsService.findSome(start, end);
  }
  /*
   *findByIsbn
   */
  @Get(':isbn')
  findByIsbn(@Param() params: HandlerParams): Observable<Comics | void> {
    return this._comicsService.findOne(params.isbn);
  }
  /*
   *create
   */
  @Post()
  create(@Body() createComicsDto: CreateComicsDto): Observable<Comics> {
    return this._comicsService.create(createComicsDto);
  }
  /*
   *update
   */
  @Put(':isbn')
  update(@Param() params: HandlerParams,
         @Body() updateComicsDto: UpdateComicsDto): Observable<Comics> {
    return this._comicsService.update(params.isbn, updateComicsDto);
  }
  /*
   *delete
   */
  @Delete(':isbn')
  delete(@Param() params: HandlerParams): Observable<void> {
    return this._comicsService.delete(params.isbn);
  }
}
