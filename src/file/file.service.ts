import { Injectable } from '@nestjs/common';
import { File } from '../graphql';
// import { Model } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class FileService {
  private files: File[] = [];

  getAllFiles(): File[] {
    return this.files;
  }
}
