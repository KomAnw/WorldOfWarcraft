import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Class, ClassDocument } from './schemas/class.schema';

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel(Class.name) private classModel: Model<ClassDocument>
  ) {}

  async getClasses(): Promise<Class[]> {
    return this.classModel.find();
  }

  async getClass(id: number): Promise<Class> {
    return this.classModel.findById(id);
  }
}
