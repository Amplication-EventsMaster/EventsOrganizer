import * as graphql from "@nestjs/graphql";
import { LogLevelResolverBase } from "./base/logLevel.resolver.base";
import { LogLevel } from "./base/LogLevel";
import { LogLevelService } from "./logLevel.service";

@graphql.Resolver(() => LogLevel)
export class LogLevelResolver extends LogLevelResolverBase {
  constructor(protected readonly service: LogLevelService) {
    super(service);
  }
}
