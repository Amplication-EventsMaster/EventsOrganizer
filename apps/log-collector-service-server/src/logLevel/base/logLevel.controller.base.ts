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
import { LogLevelService } from "../logLevel.service";
import { LogLevelCreateInput } from "./LogLevelCreateInput";
import { LogLevel } from "./LogLevel";
import { LogLevelFindManyArgs } from "./LogLevelFindManyArgs";
import { LogLevelWhereUniqueInput } from "./LogLevelWhereUniqueInput";
import { LogLevelUpdateInput } from "./LogLevelUpdateInput";

export class LogLevelControllerBase {
  constructor(protected readonly service: LogLevelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LogLevel })
  async createLogLevel(
    @common.Body() data: LogLevelCreateInput
  ): Promise<LogLevel> {
    return await this.service.createLogLevel({
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
  @swagger.ApiOkResponse({ type: [LogLevel] })
  @ApiNestedQuery(LogLevelFindManyArgs)
  async logLevels(@common.Req() request: Request): Promise<LogLevel[]> {
    const args = plainToClass(LogLevelFindManyArgs, request.query);
    return this.service.logLevels({
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
  @swagger.ApiOkResponse({ type: LogLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async logLevel(
    @common.Param() params: LogLevelWhereUniqueInput
  ): Promise<LogLevel | null> {
    const result = await this.service.logLevel({
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
  @swagger.ApiOkResponse({ type: LogLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLogLevel(
    @common.Param() params: LogLevelWhereUniqueInput,
    @common.Body() data: LogLevelUpdateInput
  ): Promise<LogLevel | null> {
    try {
      return await this.service.updateLogLevel({
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
  @swagger.ApiOkResponse({ type: LogLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLogLevel(
    @common.Param() params: LogLevelWhereUniqueInput
  ): Promise<LogLevel | null> {
    try {
      return await this.service.deleteLogLevel({
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
