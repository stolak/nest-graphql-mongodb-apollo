import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { FileResolver } from './file.resolver';

@Module({
  controllers: [FileController],
  providers: [FileService, FileResolver]
})
export class FileModule {}
