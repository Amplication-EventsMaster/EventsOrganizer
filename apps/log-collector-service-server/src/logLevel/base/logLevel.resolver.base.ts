/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { LogLevel } from "./LogLevel";
import { LogLevelCountArgs } from "./LogLevelCountArgs";
import { LogLevelFindManyArgs } from "./LogLevelFindManyArgs";
import { LogLevelFindUniqueArgs } from "./LogLevelFindUniqueArgs";
import { CreateLogLevelArgs } from "./CreateLogLevelArgs";
import { UpdateLogLevelArgs } from "./UpdateLogLevelArgs";
import { DeleteLogLevelArgs } from "./DeleteLogLevelArgs";
import { LogLevelService } from "../logLevel.service";
@graphql.Resolver(() => LogLevel)
export class LogLevelResolverBase {
  constructor(protected readonly service: LogLevelService) {}

  async _logLevelsMeta(
    @graphql.Args() args: LogLevelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LogLevel])
  async logLevels(
    @graphql.Args() args: LogLevelFindManyArgs
  ): Promise<LogLevel[]> {
    return this.service.logLevels(args);
  }

  @graphql.Query(() => LogLevel, { nullable: true })
  async logLevel(
    @graphql.Args() args: LogLevelFindUniqueArgs
  ): Promise<LogLevel | null> {
    const result = await this.service.logLevel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LogLevel)
  async createLogLevel(
    @graphql.Args() args: CreateLogLevelArgs
  ): Promise<LogLevel> {
    return await this.service.createLogLevel({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => LogLevel)
  async updateLogLevel(
    @graphql.Args() args: UpdateLogLevelArgs
  ): Promise<LogLevel | null> {
    try {
      return await this.service.updateLogLevel({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => LogLevel)
  async deleteLogLevel(
    @graphql.Args() args: DeleteLogLevelArgs
  ): Promise<LogLevel | null> {
    try {
      return await this.service.deleteLogLevel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
