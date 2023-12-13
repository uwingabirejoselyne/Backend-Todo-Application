import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriesDto {
  @ApiProperty()
  @IsString()
  readonly name: string;
}
