import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { FilesResolver } from './files.resolver';
import { FileInput } from './files.input';

import { File, FileSchema } from './files.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [FilesController],
  imports: [
    MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]),
  ],
  providers: [FilesResolver, FilesService, FileInput],
})
export class FilesModule {}
