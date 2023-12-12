import { InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/main';
import { CreateTaskDto } from './dto/create.task.dto';
import { v4 as uuidv4 } from 'uuid';

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
    const id = uuidv4();
    const task = {
      id,
      ...body,
      status: body.status ? body.status : Status.OPEN,
    };
    return await db.push('/tasks[]', task, true);
  }
  async getTaskById(id: string) {
    try {
      const task = db.find('/tasks', (task) => task.id === id);
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
      const task = await db.getIndex('/tasks', id, 'id');

      if (task < 0) {
        throw new InternalServerErrorException('task not found ');
      }
      await db.delete(`/tasks[${task}]`);
    } catch (error) {
      throw new InternalServerErrorException('failed to delete ');
    }
  }
}
