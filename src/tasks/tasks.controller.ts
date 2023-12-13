import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  async getTask() {
    return await this.tasksService.getAllTasks();
  }
  @Post()
  async createTask(@Body() body: CreateTaskDto) {
    return await this.tasksService.createAllTasks(body);
  }
  @Get(':id')
  async getoneTask(@Param('id') id: string) {
    return await this.tasksService.getTasksById(id);
  }
  @Delete(':id')
  async deleteOneTask(@Param('id') id: string) {
    return await this.tasksService.deleteTasks(id);
  }
}
