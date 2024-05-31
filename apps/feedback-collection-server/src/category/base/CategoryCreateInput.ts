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
import { FeedbackCreateNestedManyWithoutCategoriesInput } from "./FeedbackCreateNestedManyWithoutCategoriesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CategoryCreateInput {
  @ApiProperty({
    required: false,
    type: () => FeedbackCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => FeedbackCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => FeedbackCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  feedbacks?: FeedbackCreateNestedManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { CategoryCreateInput as CategoryCreateInput };