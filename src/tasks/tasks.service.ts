import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repositories';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}
  getAllTasks() {
    return this.tasksRepository.getTasks();
  }
}
