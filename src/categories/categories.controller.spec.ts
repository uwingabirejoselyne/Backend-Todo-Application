import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

describe('CategoriesController', () => {
  let controller: CategoriesController;
  let fakeCategoryService: Partial<CategoriesService>;

  beforeEach(async () => {
    fakeCategoryService = {
      getAllCategories: () => Promise.resolve([]),
      createAllCategories: () => {
        return Promise.resolve({
          id: '1',
          name: 'joselyne',
        });
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
    const newCategories = controller.createCategories({
      name: 'category',
    });
    expect(newCategories).toBeDefined();
  });
});
