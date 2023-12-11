import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './categories.repositories';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoriesRepository],
})
export class CategoriesModule {}
