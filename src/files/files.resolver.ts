import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { FilesService } from './files.service';
import { File } from './files.model';
import { FileInput } from './files.input';

@Resolver('File')
export class FilesResolver {
  constructor(private readonly fileService: FilesService) {}

  @Query(() => [File])
  async getFiles(@Args('folderId', { nullable: true }) folderId: string) {
    // You can add authorization logic here if needed
    return this.fileService.getFiles(folderId);
  }

  @Mutation(() => Boolean)
  async deleteFile(@Args('id') id: string) {
    // You can add authorization and deletion logic here
    return this.fileService.deleteFile(id);
  }

  @Mutation(() => File)
  async createFile(@Args('input') input: FileInput) {
    console.log('I am here');
    return this.fileService.createFile(input);
  }
}
