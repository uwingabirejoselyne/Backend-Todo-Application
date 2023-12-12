import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getTask() {
    return this.tasksService.getAllTasks();
  }
  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return this.tasksService.createAllTasks(body);
  }
}
