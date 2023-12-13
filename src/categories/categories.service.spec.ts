import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesRepository } from './categories.repositories';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDto } from './dto/create.categories.dto';

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
  it('it should create categories', async () => {
    const category = new CreateCategoriesDto();
    category.name = 'joselyne';
    expect((await service.createAllCategories(category)).name).toEqual(
      category.name,
    );
  });
  it('it should delete one category', async () => {
    const category = new CreateCategoriesDto();
    category.name = 'joselyne';
    const createdCategory = (await service.createAllCategories(category)).id;
    expect(await service.deleteCategoriesById(createdCategory)).toContain(
      'category is deleted',
    );
  });
});
