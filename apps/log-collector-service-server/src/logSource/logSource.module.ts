import { Module } from "@nestjs/common";
import { LogSourceModuleBase } from "./base/logSource.module.base";
import { LogSourceService } from "./logSource.service";
import { LogSourceController } from "./logSource.controller";
import { LogSourceResolver } from "./logSource.resolver";

@Module({
  imports: [LogSourceModuleBase],
  controllers: [LogSourceController],
  providers: [LogSourceService, LogSourceResolver],
  exports: [LogSourceService],
})
export class LogSourceModule {}
