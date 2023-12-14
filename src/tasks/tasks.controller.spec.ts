import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repositories';
import { CreateTaskDto } from './dto/create.task.dto';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService, TasksRepository],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('it should create a task', async () => {
    const task = new CreateTaskDto();
    task.title = 'j';
    task.description = 'hhhh';
    task.categoryId = 'ppp';
    expect((await controller.createTask(task)).title).toEqual(task.title);
  });
  it('it get task by Id', async () => {
    const task = new CreateTaskDto();
    task.title = 'j';
    task.description = 'hhhh';
    task.categoryId = 'ppp';
    const createTask = await controller.createTask(task);
    expect(await controller.getoneTask(createTask.title));
  });
});
