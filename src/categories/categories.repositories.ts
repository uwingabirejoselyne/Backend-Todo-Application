import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
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
  async deleteCategories(id: string) {
    const allTasks = await db.getData('/tasks');
    const allCategories = await db.getData('/categories');
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
      await db.push('/categories', updatedCategories, true);

      return { message: 'The Task has been deleted successfully!!!' };
    }
  }
}
