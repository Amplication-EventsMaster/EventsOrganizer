import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LogLevelServiceBase } from "./base/logLevel.service.base";

@Injectable()
export class LogLevelService extends LogLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
