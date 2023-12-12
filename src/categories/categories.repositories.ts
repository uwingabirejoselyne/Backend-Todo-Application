import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/main';
import { CreateCategoriesDto } from './dto/create.categories.dto';

@Injectable()
export class CategoriesRepository {
  async getCategories() {
    try {
      return await db.getData('/categories');
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async createCategories(body: CreateCategoriesDto) {
    return await db.push('/categories[]', { body }, true);
  }
}
