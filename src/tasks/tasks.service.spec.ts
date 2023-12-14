import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repositories';
import { Status } from './status';

describe('TasksService', () => {
  let service: TasksService;
  const fakeRepository: Partial<TasksRepository> = {
    getTasks: () => Promise.resolve([]),
    createTasks: () =>
      Promise.resolve({
        id: '1',
        title: '2',
        status: Status.OPEN,
        description: '3',
        categoryId: '4',
      }),
    deleteTask: () => {
      return Promise.resolve();
    },
    getTaskById: () => Promise.resolve(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TasksRepository, useValue: fakeRepository },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return all tasks', async () => {
    const allTasks = await service.getAllTasks();
    expect(allTasks).toBeInstanceOf(Array);
  });
  it('', async () => {
    const createTask = await service.createAllTasks({
      id: '1',
      title: '2',
      status: Status.OPEN,
      description: '3',
      categoryId: '4',
    });
    expect(createTask).toBeDefined();
  });
  it('should delete task', async () => {
    const deletedTask = await service.deleteTasks('1');

    expect(deletedTask).toBeUndefined();
  });
  it('should get one task', async () => {
    const task = await service.getTasksById('1');

    expect(task).toBeUndefined();
  });
});
