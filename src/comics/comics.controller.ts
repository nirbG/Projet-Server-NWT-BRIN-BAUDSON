import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ComicsService } from './comics.service';
import { CreateComicsDto } from './dto/create-comics.dto';
import { UpdateComicsDto } from './dto/update-comics.dto';
import {HandlerParams} from "../validators/handler-params";
import {ComicsEntity} from "./entities/comics.entity";
import {
  ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiImplicitBody,
  ApiImplicitParam,
  ApiNoContentResponse, ApiNotFoundResponse,
  ApiOkResponse,
  ApiUseTags
} from "@nestjs/swagger";


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
  @ApiImplicitParam({ name: 'start', description: 'Start of the collection', type: String })
  @ApiImplicitParam({ name: 'end', description: 'End of the collection', type: String })
  @Get(':start/:end')
  findSome(@Param('start') start: string,
           @Param('end') end: string): Observable<ComicsEntity[] | void> {
    return this._comicsService.findSome(start, end);
  }

  /*
   *findByIsbn
   */
  @ApiOkResponse({ description: 'Returns the comics for the given "isbn"', type: ComicsEntity })
  @ApiNotFoundResponse({ description: 'Comics with the given "isbn" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiImplicitParam({ name: 'isbn', description: 'Unique identifier of the comics in the database', type: String })
  @Get(':isbn')
  findByIsbn(@Param() params: HandlerParams): Observable<ComicsEntity | void> {
    return this._comicsService.findOne(params.isbn);
  }

  /*
   *create
   */
  @ApiCreatedResponse({ description: 'The comics has been successfully created', type: ComicsEntity })
  @ApiConflictResponse({ description: 'The comics already exists in the database' })
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiImplicitBody({ name: 'CreateComicsDto', description: 'Payload to create a new person', type: CreateComicsDto })
  @Post()
  create(@Body() createComicsDto: CreateComicsDto): Observable<ComicsEntity> {
    return this._comicsService.create(createComicsDto);
  }

  /*
   *update
   */
  @ApiOkResponse({ description: 'The comics has been successfully updated', type: ComicsEntity })
  @ApiNotFoundResponse({ description: 'Comics with the given "isbn" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
  @ApiImplicitParam({ name: 'isbn', description: 'Unique identifier of the comics in the database', type: String })
  @ApiImplicitBody({ name: 'UpdateComicsDto', description: 'Payload to update a comics', type: UpdateComicsDto })
  @Put(':isbn')
  update(@Param() params: HandlerParams,
         @Body() updateComicsDto: UpdateComicsDto): Observable<ComicsEntity> {
    return this._comicsService.update(params.isbn, updateComicsDto);
  }

  /*
   *delete
   */
  @ApiNoContentResponse({ description: 'The comics has been successfully deleted' })
  @ApiNotFoundResponse({ description: 'Comics with the given "isbn" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiImplicitParam({ name: 'isbn', description: 'Unique identifier of the comics in the database', type: String })
  @Delete(':isbn')
  delete(@Param() params: HandlerParams): Observable<void> {
    return this._comicsService.delete(params.isbn);
  }
}
