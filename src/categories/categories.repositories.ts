import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Config, JsonDB } from 'node-json-db';
import { CreateCategoriesDto } from './dto/create.categories.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategoriesRepository {
  db: JsonDB;
  constructor() {
    this.db = new JsonDB(new Config('myDataBase', true, true, '/'));
  }
  async getCategories() {
    try {
      return await this.db.getData('/categories');
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async createCategories(body: CreateCategoriesDto) {
    try {
      const category = {
        id: uuidv4(),
        ...body,
      };
      await this.db.push('/categories[]', { category }, true);
      return body;
    } catch (error) {
      throw new InternalServerErrorException('categories is not created');
    }
  }
  async deleteCategories(id: string) {
    const allTasks = await this.db.getData('/tasks');
    const allCategories = await this.db.getData('/categories');
    const isTaskUsedInCategories = allTasks.some(
      (task: any) => task.categoryId === id,
    );
    if (isTaskUsedInCategories) {
      throw new ConflictException(
        'Cannot delete category. It is used in tasks.',
      );
    } else {
      const updatedCategories = allCategories.filter(
        (Categories: any) => Categories.id !== id,
      );
      await this.db.push('/categories', updatedCategories, true);

      return `category is deleted ${id}`;
    }
  }
}
