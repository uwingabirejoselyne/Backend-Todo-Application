import { InternalServerErrorException } from '@nestjs/common';
import { db } from 'src/main';
export class TasksRepository {
  async getTasks() {
    try {
      return await db.getData('/tasks');
    } catch (error) {
      throw new InternalServerErrorException('Data not found');
    }
  }
}
