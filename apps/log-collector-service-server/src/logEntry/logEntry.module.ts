import { Module } from "@nestjs/common";
import { LogEntryModuleBase } from "./base/logEntry.module.base";
import { LogEntryService } from "./logEntry.service";
import { LogEntryController } from "./logEntry.controller";
import { LogEntryResolver } from "./logEntry.resolver";

@Module({
  imports: [LogEntryModuleBase],
  controllers: [LogEntryController],
  providers: [LogEntryService, LogEntryResolver],
  exports: [LogEntryService],
})
export class LogEntryModule {}
