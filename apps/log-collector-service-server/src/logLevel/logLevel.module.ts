import { Module } from "@nestjs/common";
import { LogLevelModuleBase } from "./base/logLevel.module.base";
import { LogLevelService } from "./logLevel.service";
import { LogLevelController } from "./logLevel.controller";
import { LogLevelResolver } from "./logLevel.resolver";

@Module({
  imports: [LogLevelModuleBase],
  controllers: [LogLevelController],
  providers: [LogLevelService, LogLevelResolver],
  exports: [LogLevelService],
})
export class LogLevelModule {}
