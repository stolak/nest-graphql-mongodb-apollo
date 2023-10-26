import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { File } from '../graphql';
import { FileService } from './file.service';

@Resolver('File')
export class FileResolver {
  constructor(private readonly fileService: FileService) {}

  @Query('files')
  getAllFiles(): File[] {
    return this.fileService.getAllFiles();
  }

  //   @Query('user')
  //   getUserById(@Args('id') id: string): File | undefined {
  //     return this.fileService.getUserById(id);
  //   }

  //   @Mutation('createUser')
  //   createUser(@Args('user') user: User): User {
  //     return this.userService.createUser(user);
  //   }
}
