import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LogEntryServiceBase } from "./base/logEntry.service.base";

@Injectable()
export class LogEntryService extends LogEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
