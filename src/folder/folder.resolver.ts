import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { Folder } from './folder.model';
import { FolderService } from './folder.service';

@Resolver('Folder')
export class FolderResolver {
  constructor(private readonly folderService: FolderService) {}

  @Query(() => [Folder])
  async folders() {
    return this.folderService.findAll();
  }
  @Query(() => Folder)
  async folder(@Args('id') id: string): Promise<Folder> {
    return this.folderService.findById(id);
  }

  @Mutation(() => Folder)
  async createFolder(@Args('name') name: string): Promise<Folder> {
    const newFolder = await this.folderService.createFolder(name);
    console.log('newFolder', newFolder);
    return newFolder;
  }
}
