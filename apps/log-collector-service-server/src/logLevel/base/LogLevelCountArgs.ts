/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LogLevelWhereInput } from "./LogLevelWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class LogLevelCountArgs {
  @ApiProperty({
    required: false,
    type: () => LogLevelWhereInput,
  })
  @Field(() => LogLevelWhereInput, { nullable: true })
  @Type(() => LogLevelWhereInput)
  where?: LogLevelWhereInput;
}

export { LogLevelCountArgs as LogLevelCountArgs };