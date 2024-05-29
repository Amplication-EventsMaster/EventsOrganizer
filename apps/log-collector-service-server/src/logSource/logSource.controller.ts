import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LogSourceService } from "./logSource.service";
import { LogSourceControllerBase } from "./base/logSource.controller.base";

@swagger.ApiTags("logSources")
@common.Controller("logSources")
export class LogSourceController extends LogSourceControllerBase {
  constructor(protected readonly service: LogSourceService) {
    super(service);
  }
}
