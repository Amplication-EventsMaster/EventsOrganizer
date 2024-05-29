import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LogSourceServiceBase } from "./base/logSource.service.base";

@Injectable()
export class LogSourceService extends LogSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
