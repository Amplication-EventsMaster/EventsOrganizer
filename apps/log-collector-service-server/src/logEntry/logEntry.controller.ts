import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LogEntryService } from "./logEntry.service";
import { LogEntryControllerBase } from "./base/logEntry.controller.base";

@swagger.ApiTags("logEntries")
@common.Controller("logEntries")
export class LogEntryController extends LogEntryControllerBase {
  constructor(protected readonly service: LogEntryService) {
    super(service);
  }
}
