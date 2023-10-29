// file.input.ts

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class FileInput {
  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  path: string;

  @Field()
  lastModified: string;

  @Field()
  size: number;

  @Field({ nullable: true })
  folderId: string;
}
