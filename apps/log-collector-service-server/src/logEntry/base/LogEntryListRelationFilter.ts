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
import { LogEntryWhereInput } from "./LogEntryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LogEntryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LogEntryWhereInput,
  })
  @ValidateNested()
  @Type(() => LogEntryWhereInput)
  @IsOptional()
  @Field(() => LogEntryWhereInput, {
    nullable: true,
  })
  every?: LogEntryWhereInput;

  @ApiProperty({
    required: false,
    type: () => LogEntryWhereInput,
  })
  @ValidateNested()
  @Type(() => LogEntryWhereInput)
  @IsOptional()
  @Field(() => LogEntryWhereInput, {
    nullable: true,
  })
  some?: LogEntryWhereInput;

  @ApiProperty({
    required: false,
    type: () => LogEntryWhereInput,
  })
  @ValidateNested()
  @Type(() => LogEntryWhereInput)
  @IsOptional()
  @Field(() => LogEntryWhereInput, {
    nullable: true,
  })
  none?: LogEntryWhereInput;
}
export { LogEntryListRelationFilter as LogEntryListRelationFilter };
