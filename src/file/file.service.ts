import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { File } from './file.model';

@Injectable()
export class FileService {
  constructor(@InjectModel('File') private fileModel: Model<File>) {}

  async createFile(name: string): Promise<File> {
    const newFile = new this.fileModel({ name });
    console.log(newFile);
    return await newFile.save();
  }
  async findById(id: string) {
    return await this.fileModel.findById(id).lean();
  }
  async findAll(): Promise<File[]> {
    return await this.fileModel.find().exec();
  }
}
