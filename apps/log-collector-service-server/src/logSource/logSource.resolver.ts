import * as graphql from "@nestjs/graphql";
import { LogSourceResolverBase } from "./base/logSource.resolver.base";
import { LogSource } from "./base/LogSource";
import { LogSourceService } from "./logSource.service";

@graphql.Resolver(() => LogSource)
export class LogSourceResolver extends LogSourceResolverBase {
  constructor(protected readonly service: LogSourceService) {
    super(service);
  }
}
