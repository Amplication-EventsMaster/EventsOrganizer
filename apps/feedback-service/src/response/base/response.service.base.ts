/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Response as PrismaResponse,
  Feedback as PrismaFeedback,
} from "@prisma/client";

export class ResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ResponseCountArgs, "select">): Promise<number> {
    return this.prisma.response.count(args);
  }

  async responses<T extends Prisma.ResponseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResponseFindManyArgs>
  ): Promise<PrismaResponse[]> {
    return this.prisma.response.findMany<Prisma.ResponseFindManyArgs>(args);
  }
  async response<T extends Prisma.ResponseFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResponseFindUniqueArgs>
  ): Promise<PrismaResponse | null> {
    return this.prisma.response.findUnique(args);
  }
  async createResponse<T extends Prisma.ResponseCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResponseCreateArgs>
  ): Promise<PrismaResponse> {
    return this.prisma.response.create<T>(args);
  }
  async updateResponse<T extends Prisma.ResponseUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResponseUpdateArgs>
  ): Promise<PrismaResponse> {
    return this.prisma.response.update<T>(args);
  }
  async deleteResponse<T extends Prisma.ResponseDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResponseDeleteArgs>
  ): Promise<PrismaResponse> {
    return this.prisma.response.delete(args);
  }

  async getFeedback(parentId: string): Promise<PrismaFeedback | null> {
    return this.prisma.response
      .findUnique({
        where: { id: parentId },
      })
      .feedback();
  }
}
