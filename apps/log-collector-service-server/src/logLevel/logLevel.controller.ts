import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LogLevelService } from "./logLevel.service";
import { LogLevelControllerBase } from "./base/logLevel.controller.base";

@swagger.ApiTags("logLevels")
@common.Controller("logLevels")
export class LogLevelController extends LogLevelControllerBase {
  constructor(protected readonly service: LogLevelService) {
    super(service);
  }
}
