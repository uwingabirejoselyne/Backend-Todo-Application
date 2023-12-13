import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repositories';
import { CreateTaskDto } from './dto/create.task.dto';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}
  async getAllTasks() {
    return await this.tasksRepository.getTasks();
  }
  async createAllTasks(body: CreateTaskDto) {
    return this.tasksRepository.createTasks(body);
  }
  async getTasksById(id: string) {
    return this.tasksRepository.getTaskById(id);
  }
  async deleteTasks(id: string) {
    return this.tasksRepository.deleteTask(id);
  }
}
