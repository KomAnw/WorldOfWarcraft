import { ClassesService } from './classes.service';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { Class } from './schemas/class.schema';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get('')
  getClasses(): Promise<Class[]> {
    return this.classesService.getClasses();
  }

  @Get('/:id')
  getClass(@Param('id') id: number): Promise<Class> {
    return this.classesService.getClass(id);
  }
}
