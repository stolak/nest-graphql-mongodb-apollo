import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class File {
  id: string;

  @Prop({ required: true })
  name: string;
}

export type FileDocument = File & Document;

export const FileSchema = SchemaFactory.createForClass(File);
