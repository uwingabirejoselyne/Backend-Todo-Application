import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tasks')
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
  @Get(':id')
  getoneTask(@Param('id') id: string) {
    return this.tasksService.getTasksById(id);
  }
  @Delete(':id')
  deleteOneTask(@Param('id') id: string) {
    return this.tasksService.deleteTasks(id);
  }
}
