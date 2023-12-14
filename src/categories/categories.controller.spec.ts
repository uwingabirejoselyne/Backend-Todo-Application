import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDto } from './dto/create.categories.dto';

describe('CategoriesController', () => {
  let controller: CategoriesController;
  let fakeCategoryService: Partial<CategoriesService>;

  beforeEach(async () => {
    fakeCategoryService = {
      getAllCategories: () => {
        return Promise.resolve([]);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [
        { provide: CategoriesService, useValue: fakeCategoryService },
      ],
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
    expect(await controller.deleteOnecategory(createdCategory)).toContain(
      'category is deleted',
    );
  });
});
