import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDto } from './dto/create.categories.dto';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  @Get()
  getCategories() {
    return this.categoriesService.getAllCategories();
  }
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    type: CreateCategoriesDto,
    description: 'Json structure for user object',
  })
  async createCategories(@Body() body: CreateCategoriesDto) {
    return await this.categoriesService.createAllCategories(body);
  }
  @Delete(':id')
  async deleteOnecategory(@Param('id') id: string) {
    return await this.categoriesService.deleteCategoriesById(id);
  }
}
