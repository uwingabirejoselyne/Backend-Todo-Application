import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repositories';
import { CreateCategoriesDto } from './dto/create.categories.dto';

@Injectable()
export class CategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async getAllCategories() {
    return await this.categoriesRepository.getCategories();
  }
  async createAllCategories(body: CreateCategoriesDto) {
    return await this.categoriesRepository.createCategories(body);
  }
  async deleteCategoriesById(id: string) {
    return await this.categoriesRepository.deleteCategories(id);
  }
}
