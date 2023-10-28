import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { File } from './file.model';
import { FileService } from './file.service';

@Resolver('File')
export class FileResolver {
  constructor(private readonly fileService: FileService) {}

  @Query(() => [File])
  async files() {
    return this.fileService.findAll();
  }
  @Query(() => File)
  async file(@Args('id') id: string): Promise<File> {
    return this.fileService.findById(id);
  }

  @Mutation(() => File)
  async createFile(@Args('name') name: string): Promise<File> {
    const newFile = await this.fileService.createFile(name);
    console.log('newFile', newFile);
    return newFile;
  }
}
