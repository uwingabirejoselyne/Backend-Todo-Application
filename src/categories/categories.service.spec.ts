import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesRepository } from './categories.repositories';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;
  const fakeCategoriesRepository: Partial<CategoriesRepository> = {
    getCategories: () => Promise.resolve([]),
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
});
