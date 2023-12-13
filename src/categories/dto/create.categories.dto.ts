import { IsString } from 'class-validator';

export class CreateCategoriesDto {
  readonly id: number;
  @IsString()
  readonly name: string;
}
