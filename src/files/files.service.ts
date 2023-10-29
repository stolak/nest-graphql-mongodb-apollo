import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { File } from './files.model';
import { FileInput } from './files.input';

@Injectable()
export class FilesService {
  constructor(
    @InjectModel(File.name) private readonly fileModel: Model<File>,
  ) {}

  async getFiles(folderId: string): Promise<File[]> {
    // Implement logic to fetch files by folderId
    const files = await this.fileModel.find({ folderId });
    return files;
  }

  async deleteFile(id: string): Promise<boolean> {
    // Implement logic to delete a file by ID
    const result = await this.fileModel.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }

  async createFile(input: FileInput): Promise<File> {
    // Implement logic to create a new file
    console.log('Ijdjdjd am here');
    const createdFile = new this.fileModel(input);
    return createdFile.save();
  }
}
