import {Body,  ClassSerializerInterceptor,  Controller,  Delete,  Get,  Param,  Post,  Put,  UseInterceptors} from '@nestjs/common';
import { HerosService } from './heros.service';
import { Observable } from 'rxjs';
import {HandlerParams} from "../validators/handler-params";
import {HerosEntity} from "./entities/heros.entity";
import {
  ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiImplicitBody,
  ApiImplicitParam,
  ApiNoContentResponse, ApiNotFoundResponse,
  ApiOkResponse,
  ApiUseTags
} from "@nestjs/swagger";
import {CreateHeroDto} from "./dto/create-hero.dto";
import {UpdateHeroDto} from "./dto/update-hero.dto";

@ApiUseTags('heros')
@Controller('heros')
@UseInterceptors(ClassSerializerInterceptor)
export class HerosController {
  constructor(private readonly _herosService: HerosService) {
  }

  /*
   * find all
   */
  @ApiOkResponse({ description: 'Returns an array of heros', type: HerosEntity, isArray: true })
  @ApiNoContentResponse({ description: 'No heros exists in database' })
  @Get()
  findAll(): Observable< HerosEntity[] | void > {
    return this._herosService.findAll();
  }

  /*
   * find Some
   */
  @ApiOkResponse({ description: 'Returns some heros', type: HerosEntity })
  @ApiNoContentResponse({ description: 'No heros exists in database' })
  @ApiBadRequestResponse({ description: 'Parameters provided are not good' })
  @ApiImplicitParam({ name: 'start', description: 'Start of the collection', type: String })
  @ApiImplicitParam({ name: 'end', description: 'End of the collection', type: String })
  @Get(':start/:end')
  findSome(@Param('start') start, @Param('end') end): Observable< HerosEntity[] | void> {
    return this._herosService.findSome(start, end);
  }

  /*
   * find One
   */
  @ApiOkResponse({ description: 'Returns the hero for the given "id"', type: HerosEntity })
  @ApiNotFoundResponse({ description: 'Hero with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the hero in the database', type: String })
  @Get(':id')
  findOne(@Param() params: HandlerParams): Observable<HerosEntity> {
    return this._herosService.findOne(params.id);
  }

  /*
   * Create
   */
  @ApiCreatedResponse({ description: 'The hero has been successfully created', type: HerosEntity })
  @ApiConflictResponse({ description: 'The hero already exists in the database' })
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiImplicitBody({ name: 'CreateHeroDto', description: 'Payload to create a new hero', type: CreateHeroDto })
  @Post()
  create( @Body() body): Observable<HerosEntity> {
    return this.create(body);
  }

  /*
   * update
   */
  @ApiOkResponse({ description: 'The hero has been successfully updated', type: HerosEntity })
  @ApiNotFoundResponse({ description: 'Hero with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the hero in the database', type: String })
  @ApiImplicitBody({ name: 'UpdateHeroDto', description: 'Payload to update a hero', type: UpdateHeroDto })
  @Put(':id')
  update(@Param() params: HandlerParams, @Body() body): Observable<HerosEntity> {
    return this._herosService.update(params.id, body);
  }

  /*
   * delete
   */
  @ApiNoContentResponse({ description: 'The hero has been successfully deleted' })
  @ApiNotFoundResponse({ description: 'Hero with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the hero in the database', type: String })
  @Delete(':id')
  delete(@Param() params: HandlerParams): Observable<void> {
    return this._herosService.delete(params.id);
  }
}
