// src/files/file.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class File extends Document {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  path: string;

  @Prop()
  lastModified: string;

  @Prop()
  size: number;

  @Prop()
  folderId: string;
}

export const FileSchema = SchemaFactory.createForClass(File);
export type FileDocument = File & Document;
