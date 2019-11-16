import {Body,  ClassSerializerInterceptor,  Controller,  Delete,  Get,  Param,  Post,  Put,  UseInterceptors} from '@nestjs/common';
import { HerosService } from './heros.service';
import { Observable } from 'rxjs';
import {HandlerParams} from "../validators/handler-params";
import {HerosEntity} from "./entities/heros.entity";

@Controller('heros')
@UseInterceptors(ClassSerializerInterceptor)
export class HerosController {
  constructor(private readonly _herosService: HerosService) {
  }
  /*
   * find all
   */
  @Get()
  findAll(): Observable< HerosEntity[] | void > {
    return this._herosService.findAll();
  }
  /*
   * find Some
   */
  @Get(':start/:end')
  findSome(@Param('start') start, @Param('end') end): Observable< HerosEntity[] | void> {
    return this._herosService.findSome(start, end);
  }
  /*
   * find One
   */
  @Get(':id')
  findOne(@Param() params: HandlerParams): Observable<HerosEntity> {
    return this._herosService.findOne(params.id);
  }
  /*
   * Create
   */
  @Post()
  create( @Body() body): Observable<HerosEntity> {
    return this.create(body);
  }
  /*
   * update
   */
  @Put(':id')
  update(@Param() params: HandlerParams, @Body() body): Observable<HerosEntity> {
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
