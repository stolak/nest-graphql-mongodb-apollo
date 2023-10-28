import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Folder {
  //   @Prop({ auto: true })
  //   id: string;

  @Prop({ required: true })
  name: string;
}

export type FolderDocument = Folder & Document;

export const FolderSchema = SchemaFactory.createForClass(Folder);
