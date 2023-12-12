import { InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/main';
import { CreateTaskDto } from './dto/create.task.dto';
import { Status } from 'src/status';
export class TasksRepository {
  async getTasks() {
    try {
      return await db.getData('/tasks');
    } catch (error) {
      throw new InternalServerErrorException('Data not found');
    }
  }
  async createTasks(body: CreateTaskDto) {
    const task = {
      ...body,
      status: body.status ? body.status : Status.OPEN,
    };
    return await db.push('/tasks[]', { task }, true);
  }
}
