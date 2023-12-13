import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Config, JsonDB } from 'node-json-db';
import { ValidationPipe } from '@nestjs/common';

export const db = new JsonDB(new Config('myDataBase', true, true, '/'));
db.push('/categories', []);
db.push('/tasks', []);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('backend-todo')
    .setDescription('An API for managing Tasks and categories.')
    .setVersion('1.0')
    .addTag('Todo')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
