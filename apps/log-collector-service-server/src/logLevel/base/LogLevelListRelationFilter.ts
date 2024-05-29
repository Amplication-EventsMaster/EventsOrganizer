/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LogLevelWhereInput } from "./LogLevelWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LogLevelListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LogLevelWhereInput,
  })
  @ValidateNested()
  @Type(() => LogLevelWhereInput)
  @IsOptional()
  @Field(() => LogLevelWhereInput, {
    nullable: true,
  })
  every?: LogLevelWhereInput;

  @ApiProperty({
    required: false,
    type: () => LogLevelWhereInput,
  })
  @ValidateNested()
  @Type(() => LogLevelWhereInput)
  @IsOptional()
  @Field(() => LogLevelWhereInput, {
    nullable: true,
  })
  some?: LogLevelWhereInput;

  @ApiProperty({
    required: false,
    type: () => LogLevelWhereInput,
  })
  @ValidateNested()
  @Type(() => LogLevelWhereInput)
  @IsOptional()
  @Field(() => LogLevelWhereInput, {
    nullable: true,
  })
  none?: LogLevelWhereInput;
}
export { LogLevelListRelationFilter as LogLevelListRelationFilter };