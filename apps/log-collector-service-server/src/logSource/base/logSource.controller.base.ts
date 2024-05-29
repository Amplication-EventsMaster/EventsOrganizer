/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LogSourceService } from "../logSource.service";
import { LogSourceCreateInput } from "./LogSourceCreateInput";
import { LogSource } from "./LogSource";
import { LogSourceFindManyArgs } from "./LogSourceFindManyArgs";
import { LogSourceWhereUniqueInput } from "./LogSourceWhereUniqueInput";
import { LogSourceUpdateInput } from "./LogSourceUpdateInput";

export class LogSourceControllerBase {
  constructor(protected readonly service: LogSourceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LogSource })
  async createLogSource(
    @common.Body() data: LogSourceCreateInput
  ): Promise<LogSource> {
    return await this.service.createLogSource({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LogSource] })
  @ApiNestedQuery(LogSourceFindManyArgs)
  async logSources(@common.Req() request: Request): Promise<LogSource[]> {
    const args = plainToClass(LogSourceFindManyArgs, request.query);
    return this.service.logSources({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LogSource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async logSource(
    @common.Param() params: LogSourceWhereUniqueInput
  ): Promise<LogSource | null> {
    const result = await this.service.logSource({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: LogSource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLogSource(
    @common.Param() params: LogSourceWhereUniqueInput,
    @common.Body() data: LogSourceUpdateInput
  ): Promise<LogSource | null> {
    try {
      return await this.service.updateLogSource({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: LogSource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLogSource(
    @common.Param() params: LogSourceWhereUniqueInput
  ): Promise<LogSource | null> {
    try {
      return await this.service.deleteLogSource({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
