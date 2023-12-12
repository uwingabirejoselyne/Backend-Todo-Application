import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/main';
import { CreateCategoriesDto } from './dto/create.categories.dto';
import { v4 as uuidv4 } from 'uuid';

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
    try {
      const id = uuidv4();
      const category = {
        id,
        ...body,
      };
      return await db.push('/categories[]', { category }, true);
    } catch (error) {
      throw new InternalServerErrorException('categories is not created');
    }
  }
}
