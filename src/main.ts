import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config, JsonDB } from 'node-json-db';

export const db = new JsonDB(new Config('myDataBase', true, true, '/'));
db.push('/categories', []);
db.push('/tasks', []);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
