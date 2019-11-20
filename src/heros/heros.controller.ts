import {Body,  ClassSerializerInterceptor,  Controller,  Delete,  Get,  Param,  Post,  Put,  UseInterceptors} from '@nestjs/common';
import { HerosService } from './heros.service';
import { Observable } from 'rxjs';
import {HerosEntity} from "./entities/heros.entity";
import {
  ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiImplicitBody,
  ApiImplicitParam,
  ApiNoContentResponse, ApiNotFoundResponse,
  ApiOkResponse, ApiUnprocessableEntityResponse,
  ApiUseTags
} from "@nestjs/swagger";
import {CreateHeroDto} from "./dto/create-hero.dto";
import {UpdateHeroDto} from "./dto/update-hero.dto";
import {HandlerHeros} from "./validators/handler-heros";

@ApiUseTags('heros')
@Controller('heros')
@UseInterceptors(ClassSerializerInterceptor)
export class HerosController {

  /**
   * Class constructor
   * @param _herosService
   */
  constructor(private readonly _herosService: HerosService) {
  }

  /**
   * Returns all heros
   *
   * @returns Observable<HerosEntity[] | void>
   */
  @ApiOkResponse({ description: 'Returns an array of heros', type: HerosEntity, isArray: true })
  @ApiNoContentResponse({ description: 'No heros exists in database' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @Get()
  findAll(): Observable< HerosEntity[] | void > {
    return this._herosService.findAll();
  }

  /**
   * Returns a part of all heros
   *
   * @param start: number
   * @param nb: number
   * @returns Observable<HerossEntity[] | void>
   */
  @ApiOkResponse({ description: 'Returns some heros', type: HerosEntity })
  @ApiNoContentResponse({ description: 'No heros exists in database' })
  @ApiBadRequestResponse({ description: 'Parameters provided are not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'start', description: 'Start of the collection', type: Number })
  @ApiImplicitParam({ name: 'nb', description: 'Number of hero in the collection', type: Number })
  @Get('/:start/:nb')
  findSome(@Param('start') start: number, @Param('nb') nb: number): Observable< HerosEntity[] | void> {
    return this._herosService.findSome(parseInt(start.toString()), parseInt(nb.toString()));
  }

  /**
   * Returns one hero
   *
   * @param params: HandlerHeros
   * @returns Observable<HerosEntity | void>
   */
  @ApiOkResponse({ description: 'Returns the hero for the given "id"', type: HerosEntity })
  @ApiNotFoundResponse({ description: 'Hero with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: '_id', description: 'Unique identifier of the hero in the database', type: String })
  @Get(':_id')
  findOne(@Param() params: HandlerHeros): Observable<HerosEntity> {
    return this._herosService.findOne(params._id);
  }

  /**
   * Add a hero to the list
   *
   * @param createHerosDto: CreateHeroDto
   * @returns Observable<HerosEntity>
   */
  @ApiCreatedResponse({ description: 'The hero has been successfully created', type: HerosEntity })
  @ApiConflictResponse({ description: 'The hero already exists in the database' })
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitBody({ name: 'CreateHeroDto', description: 'Payload to create a new hero', type: CreateHeroDto })
  @Post()
  create( @Body() createHerosDto: CreateHeroDto): Observable<HerosEntity> {
    return this._herosService.create(createHerosDto);
  }

  /**
   * Update a hero
   *
   * @param params: HandlerHeros
   * @param updateHerosDto: UpdateHeroDto
   * @returns Observable<HerosEntity>
   */
  @ApiOkResponse({ description: 'The hero has been successfully updated', type: HerosEntity })
  @ApiNotFoundResponse({ description: 'Hero with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: '_id', description: 'Unique identifier of the hero in the database', type: String })
  @ApiImplicitBody({ name: 'UpdateHeroDto', description: 'Payload to update a hero', type: UpdateHeroDto })
  @Put(':_id')
  update(@Param() params: HandlerHeros, @Body() updateHerosDto: UpdateHeroDto): Observable<HerosEntity> {
    return this._herosService.update(params._id, updateHerosDto);
  }

  /**
   * Delete a hero from the list
   *
   * @param params: HandlerHeros
   * @returns Observable<void>
   */
  @ApiNoContentResponse({ description: 'The hero has been successfully deleted' })
  @ApiNotFoundResponse({ description: 'Hero with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: '_id', description: 'Unique identifier of the hero in the database', type: String })
  @Delete(':_id')
  delete(@Param() params: HandlerHeros): Observable<void> {
    return this._herosService.delete(params._id);
  }
}
