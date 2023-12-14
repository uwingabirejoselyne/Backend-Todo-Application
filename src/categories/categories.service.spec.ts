import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesRepository } from './categories.repositories';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;
  const fakeCategoriesRepository: Partial<CategoriesRepository> = {
    getCategories: () => Promise.resolve([]),
    createCategories: () => {
      return Promise.resolve({
        name: 'hhhh',
      });
    },
    deleteCategories: (id: string) => {
      return Promise.resolve(`Deleted category ${id}`);
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        { provide: CategoriesRepository, useValue: fakeCategoriesRepository },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should be return all categories', async () => {
    const allCategories = await service.getAllCategories();
    expect(allCategories).toBeInstanceOf(Array);
  });
  it('should create all categories', async () => {
    const createCategories = await service.createAllCategories({
      name: 'j',
    });
    expect(createCategories).toBeDefined();
  });
  it('should delete category', async () => {
    const deleteCategory = await service.deleteCategoriesById('1');
    expect(deleteCategory).toBe(`Deleted category 1`);
  });
});
