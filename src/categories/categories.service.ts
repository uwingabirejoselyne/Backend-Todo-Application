import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repositories';

@Injectable()
export class CategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  getAllCategories() {
    return this.categoriesRepository.getCategories();
  }
}
