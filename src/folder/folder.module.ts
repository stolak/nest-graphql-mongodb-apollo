import { Module } from '@nestjs/common';
import { FolderController } from './folder.controller';
import { FolderService } from './folder.service';
import { FolderResolver } from './folder.resolver';

import { FolderSchema } from './folder.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [FolderController],
  imports: [
    MongooseModule.forFeature([{ name: 'Folder', schema: FolderSchema }]),
  ],
  providers: [FolderResolver, FolderService],
})
export class FolderModule {}
