import { Status } from 'src/status';
import { IsString } from 'class-validator';

export class CreateTaskDto {
  readonly id: number;

  @IsString()
  title: string;

  status: Status;

  @IsString()
  description: string;

  @IsString()
  categoryId: string;
}
