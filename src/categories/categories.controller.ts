import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDto } from './dto/create.categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  @Get()
  getCategories() {
    return this.categoriesService.getAllCategories();
  }
  @Post()
  createCategories(@Body() body: CreateCategoriesDto) {
    return this.categoriesService.createAllCategories(body);
  }
  @Delete(':id')
  deleteOnecategory(@Param('id') id: string) {
    return this.categoriesService.deleteCategoriesById(id);
  }
}
