import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClassDocument = Class & Document;

type Features = {
  img: string;
  name: string;
  description: string;
};
@Schema({ collection: 'Classes' })
export class Class {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  img: string;

  @Prop()
  role: string[];

  @Prop()
  features: Features[];

  @Prop()
  resources: string[];

  @Prop()
  armor_type: string[];

  @Prop()
  available_weapons: string[];

  @Prop()
  backstory: string;

  @Prop()
  description: string;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
