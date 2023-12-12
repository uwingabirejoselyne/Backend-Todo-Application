import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repositories';
import { CreateCategoriesDto } from './dto/create.categories.dto';

@Injectable()
export class CategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  getAllCategories() {
    return this.categoriesRepository.getCategories();
  }
  createAllCategories(body: CreateCategoriesDto) {
    return this.categoriesRepository.createCategories(body);
  }
}
