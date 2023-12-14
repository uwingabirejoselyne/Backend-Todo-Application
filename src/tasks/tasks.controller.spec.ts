import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Status } from './status';

describe('TasksController', () => {
  let controller: TasksController;
  const fakeTasksService: Partial<TasksService> = {
    getAllTasks: () => Promise.resolve([]),
    createAllTasks: () =>
      Promise.resolve({
        id: '1',
        title: '2',
        status: Status.OPEN,
        description: '3',
        categoryId: '4',
      }),
    deleteTasks: () => {
      return Promise.resolve();
    },
    getTasksById: () => Promise.resolve(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [{ provide: TasksService, useValue: fakeTasksService }],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should return all tasks', async () => {
    const allTasks = await controller.getTask();
    expect(allTasks).toBeInstanceOf(Array);
  });
  it('', async () => {
    const createTask = await controller.createTask({
      id: '1',
      title: '2',
      status: Status.OPEN,
      description: '3',
      categoryId: '4',
    });
    expect(createTask).toBeDefined();
  });
  it('should delete task', async () => {
    const deletedTask = await controller.deleteOneTask('1');

    expect(deletedTask).toBeUndefined();
  });
  it('should get one task', async () => {
    const task = await controller.getoneTask('1');

    expect(task).toBeUndefined();
  });
});
