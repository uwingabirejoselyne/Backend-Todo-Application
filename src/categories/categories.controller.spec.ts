import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './categories.repositories';
import { CreateCategoriesDto } from './dto/create.categories.dto';

describe('CategoriesController', () => {
  let controller: CategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [CategoriesService, CategoriesRepository],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('it should return all categories', async () => {
    const allCategories = await controller.getCategories();
    expect(allCategories).toBeInstanceOf(Array);
  });
  it('it should create all categories', async () => {
    const category = new CreateCategoriesDto();
    category.name = 'joselyne';
    expect((await controller.createCategories(category)).name).toEqual(
      category.name,
    );
  });
  it('it should delete one category', async () => {
    const category = new CreateCategoriesDto();
    category.name = 'joselyne';
    const createdCategory = (await controller.createCategories(category)).id;
    console.log(createdCategory);
    expect(await controller.deleteOnecategory(createdCategory)).toContain(
      'category is deleted',
    );
  });
});
