import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriesDto {
  @IsOptional()
  id?: string;
  @ApiProperty()
  @IsString()
  name: string;
}
