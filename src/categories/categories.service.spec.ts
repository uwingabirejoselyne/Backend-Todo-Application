import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesRepository } from './categories.repositories';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService, CategoriesRepository],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('it should be get all service', async () => {
    const allservices = await service.getAllCategories();
    expect(allservices).toBeInstanceOf(Array);
  });
});
