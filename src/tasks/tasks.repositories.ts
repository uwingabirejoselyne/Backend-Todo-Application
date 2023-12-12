import { InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/main';
import { CreateTaskDto } from './dto/create.task.dto';
export class TasksRepository {
  async getTasks() {
    try {
      return await db.getData('/tasks');
    } catch (error) {
      throw new InternalServerErrorException('Data not found');
    }
  }
  async createTasks(body: CreateTaskDto) {
    return await db.push('/tasks[]', { body }, true);
  }
}
