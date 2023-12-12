import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repositories';
import { CreateTaskDto } from './dto/create.task.dto';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}
  getAllTasks() {
    return this.tasksRepository.getTasks();
  }
  createAllTasks(body: CreateTaskDto) {
    return this.tasksRepository.createTasks(body);
  }
  getTasksById(id: string) {
    return this.tasksRepository.getTaskById(id);
  }
}
