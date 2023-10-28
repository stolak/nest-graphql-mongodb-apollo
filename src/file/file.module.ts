import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { FileResolver } from './file.resolver';

import { File, FileSchema } from './file.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [FileController],
  imports: [MongooseModule.forFeature([{ name: 'File', schema: FileSchema }])],
  providers: [FileResolver, FileService],
})
export class FileModule {}
