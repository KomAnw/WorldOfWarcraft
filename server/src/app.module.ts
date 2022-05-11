import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassesModule } from './classes/classes.module';
@Module({
  controllers: [],
  providers: [],
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/World_of_Warcraft_DB'),
    ClassesModule,
  ],
})
export class AppModule {}
