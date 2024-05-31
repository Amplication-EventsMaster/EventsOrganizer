/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Response } from "./Response";
import { ResponseCountArgs } from "./ResponseCountArgs";
import { ResponseFindManyArgs } from "./ResponseFindManyArgs";
import { ResponseFindUniqueArgs } from "./ResponseFindUniqueArgs";
import { CreateResponseArgs } from "./CreateResponseArgs";
import { UpdateResponseArgs } from "./UpdateResponseArgs";
import { DeleteResponseArgs } from "./DeleteResponseArgs";
import { Feedback } from "../../feedback/base/Feedback";
import { ResponseService } from "../response.service";
@graphql.Resolver(() => Response)
export class ResponseResolverBase {
  constructor(protected readonly service: ResponseService) {}

  async _responsesMeta(
    @graphql.Args() args: ResponseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Response])
  async responses(
    @graphql.Args() args: ResponseFindManyArgs
  ): Promise<Response[]> {
    return this.service.responses(args);
  }

  @graphql.Query(() => Response, { nullable: true })
  async response(
    @graphql.Args() args: ResponseFindUniqueArgs
  ): Promise<Response | null> {
    const result = await this.service.response(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Response)
  async createResponse(
    @graphql.Args() args: CreateResponseArgs
  ): Promise<Response> {
    return await this.service.createResponse({
      ...args,
      data: {
        ...args.data,

        feedback: args.data.feedback
          ? {
              connect: args.data.feedback,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Response)
  async updateResponse(
    @graphql.Args() args: UpdateResponseArgs
  ): Promise<Response | null> {
    try {
      return await this.service.updateResponse({
        ...args,
        data: {
          ...args.data,

          feedback: args.data.feedback
            ? {
                connect: args.data.feedback,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Response)
  async deleteResponse(
    @graphql.Args() args: DeleteResponseArgs
  ): Promise<Response | null> {
    try {
      return await this.service.deleteResponse(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Feedback, {
    nullable: true,
    name: "feedback",
  })
  async getFeedback(
    @graphql.Parent() parent: Response
  ): Promise<Feedback | null> {
    const result = await this.service.getFeedback(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}