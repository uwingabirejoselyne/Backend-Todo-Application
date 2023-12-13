import { Status } from 'src/status';
import { IsString, IsNumber } from 'class-validator';

export class CreateTaskDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly title: string;

  readonly status: Status;

  @IsString()
  readonly description: string;

  @IsString()
  readonly categoryId: string;
}
