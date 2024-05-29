import * as graphql from "@nestjs/graphql";
import { LogEntryResolverBase } from "./base/logEntry.resolver.base";
import { LogEntry } from "./base/LogEntry";
import { LogEntryService } from "./logEntry.service";

@graphql.Resolver(() => LogEntry)
export class LogEntryResolver extends LogEntryResolverBase {
  constructor(protected readonly service: LogEntryService) {
    super(service);
  }
}
