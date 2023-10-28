import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Folder } from './folder.model';

@Injectable()
export class FolderService {
  constructor(@InjectModel('Folder') private folderModel: Model<Folder>) {}

  async createFolder(name: string): Promise<Folder> {
    const newFolder = new this.folderModel({ name });
    console.log(newFolder);
    return await newFolder.save();
  }
  async findById(id: string) {
    return await this.folderModel.findById(id).lean();
  }
  async findAll(): Promise<Folder[]> {
    return await this.folderModel.find().exec();
  }
}
