import { InternalServerErrorException } from '@nestjs/common';
import { Config, JsonDB } from 'node-json-db';
import { CreateTaskDto } from './dto/create.task.dto';
import { v4 as uuidv4 } from 'uuid';

import { Status } from './status';
export class TasksRepository {
  db: JsonDB;
  constructor() {
    this.db = new JsonDB(new Config('myDataBase', true, true, '/'));
  }
  async getTasks() {
    try {
      return await this.db.getData('/tasks');
    } catch (error) {
      throw new InternalServerErrorException('Data not found');
    }
  }
  async createTasks(body: CreateTaskDto) {
    try {
      const task = {
        id: uuidv4(),
        ...body,
        status: body.status ? body.status : Status.OPEN,
      };
      await this.db.push('/tasks[]', task, true);
      return body;
    } catch (error) {
      throw new InternalServerErrorException('Data is not create');
    }
  }
  async getTaskById(id: string) {
    try {
      const task = this.db.find('/tasks', (task) => task.id === id);
      if (!task) {
        throw new Error('Task not found');
      }
      return task;
    } catch (error) {
      throw new Error('Data not found');
    }
  }
  async deleteTask(id: string) {
    try {
      const task = await this.db.getIndex('/tasks', id, 'id');

      if (task < 0) {
        throw new InternalServerErrorException('task not found ');
      }
      await this.db.delete(`/tasks[${task}]`);
    } catch (error) {
      throw new InternalServerErrorException('failed to delete ');
    }
  }
  // async deleteTask(id: string) {
  //   const allTasks = await db.getData('/tasks');
  //   const allCategories = await db.getData('/categories');
  //   const isTaskUsedInCategories = allTasks.some(
  //     (task: any) => task.categoryId === id,
  //   );
  //   if (isTaskUsedInCategories) {
  //     throw new ConflictException(
  //       'Cannot delete category. It is used in tasks.',
  //     );
  //   } else {
  //     const updatedCategories = allCategories.filter(
  //       (Categories: any) => Categories.id !== id,
  //     );
  //     await db.push('/categories', updatedCategories, true);

  //     return { message: 'The Task has been deleted successfully!!!' };
  //   }
  // }
}
