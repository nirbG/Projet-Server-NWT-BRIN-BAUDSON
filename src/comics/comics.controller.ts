import {  Body,  ClassSerializerInterceptor,  Controller,  Delete,  Get,  Param,  Post,  Put,  UseInterceptors} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ComicsService } from './comics.service';
import { CreateComicsDto } from './dto/create-comics.dto';
import { UpdateComicsDto } from './dto/update-comics.dto';
import {ComicsEntity} from "./entities/comics.entity";
import {
  ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiImplicitBody,
  ApiImplicitParam,
  ApiNoContentResponse, ApiNotFoundResponse,
  ApiOkResponse, ApiUnprocessableEntityResponse,
  ApiUseTags
} from "@nestjs/swagger";
import {HandlerComics} from "./validators/handler-comics";


@ApiUseTags('comics')
@Controller('comics')
@UseInterceptors(ClassSerializerInterceptor)
export class ComicsController {

  constructor(private readonly _comicsService: ComicsService) {
  }

  /*
   * findAll
   */
  @ApiOkResponse({description: 'Return an array of comics', type: ComicsEntity, isArray: true})
  @ApiNoContentResponse({description: 'No comics exists in database'})
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @Get()
  findAll(): Observable<ComicsEntity[] | void> {
    return this._comicsService.findAll();
  }

  /*
   *findSome
   */
  @ApiOkResponse({ description: 'Returns some comics', type: ComicsEntity, isArray: true })
  @ApiNoContentResponse({ description: 'No comics exists in database' })
  @ApiBadRequestResponse({ description: 'Parameters provided are not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'start', description: 'Start of the collection', type: String })
  @ApiImplicitParam({ name: 'end', description: 'End of the collection', type: String })
  @Get(':start/:end')
  findSome(@Param() start: HandlerComics,
           @Param() end: HandlerComics): Observable<ComicsEntity[] | void> {
    return this._comicsService.findSome(start._id, end._id);
  }

  /*
   *findById
   */
  @ApiOkResponse({ description: 'Returns the comics for the given "id"', type: ComicsEntity })
  @ApiNotFoundResponse({ description: 'Comics with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: '_id', description: 'Unique identifier of the comics in the database', type: String })
  @Get(':_id')
  findById(@Param() params: HandlerComics): Observable<ComicsEntity | void> {
    return this._comicsService.findOne(params._id);
  }

  /*
   *create
   */
  @ApiCreatedResponse({ description: 'The comics has been successfully created', type: ComicsEntity })
  @ApiConflictResponse({ description: 'The comics already exists in the database' })
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitBody({ name: 'CreateComicsDto', description: 'Payload to create a new comics', type: CreateComicsDto })
  @Post()
  create(@Body() createComicsDto: CreateComicsDto): Observable<ComicsEntity> {
    return this._comicsService.create(createComicsDto);
  }

  /*
   *update
   */
  @ApiOkResponse({ description: 'The comics has been successfully updated', type: ComicsEntity })
  @ApiNotFoundResponse({ description: 'Comics with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: '_id', description: 'Unique identifier of the comics in the database', type: String })
  @ApiImplicitBody({ name: 'UpdateComicsDto', description: 'Payload to update a comics', type: UpdateComicsDto })
  @Put(':_id')
  update(@Param() params: HandlerComics, @Body() updateComicsDto: UpdateComicsDto): Observable<ComicsEntity> {
    return this._comicsService.update(params._id, updateComicsDto);
  }

  /*
   *delete
   */
  @ApiNoContentResponse({ description: 'The comics has been successfully deleted' })
  @ApiNotFoundResponse({ description: 'Comics with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: '_id', description: 'Unique identifier of the comics in the database', type: String })
  @Delete(':_id')
  delete(@Param() params: HandlerComics): Observable<void> {
    return this._comicsService.delete(params._id);
  }
}