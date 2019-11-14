import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ComicsService } from './comics.service';
import { Comics } from './interfaces/comics.interface';
import { CreateComicsDto } from './dto/create-comics.dto';
import { UpdateComicsDto } from './dto/update-comics.dto';

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
  findByIsbn(@Param('isbn') isbn: string): Observable<Comics | void> {
    return this._comicsService.findOne(isbn);
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
  update(@Param('isbn') isbn: string,
         @Body() updateComicsDto: UpdateComicsDto): Observable<Comics> {
    return this._comicsService.update(isbn, updateComicsDto);
  }
  /*
   *delete
   */
  @Delete(':isbn')
  delete(@Param('isbn') isbn: string): Observable<void> {
    return this._comicsService.delete(isbn);
  }
}
