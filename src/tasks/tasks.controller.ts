import { Controller, Post, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    // You can create a unique ID for each task
    const id = Date.now().toString();

    // Save the task in the database
    const task = await this.tasksService.createTask(createTaskDto);

    // Return a success message
    return task;
  }
}
