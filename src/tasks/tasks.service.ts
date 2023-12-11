import { Injectable } from '@nestjs/common';
import { JsonDB, Config } from 'node-json-db';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  private db: JsonDB;
  constructor() {
    this.db = new JsonDB(new Config('myDataBase', true, false, '/'));
  }
  async createTask(task: Task) {
    const id = Date.now().toString();
    const taskToSave = { ...task, id }; // Ensure the task has an ID
    await this.db.push(`/tasks/${id}`, taskToSave);
    return taskToSave;
  }
}
