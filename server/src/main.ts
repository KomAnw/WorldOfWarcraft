import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
const PORT = process.env.PORT || 5000;

const start = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Server on port: ${PORT}`));
};

start();
