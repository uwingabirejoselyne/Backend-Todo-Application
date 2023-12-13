import { Status } from 'src/status';
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  status: Status;

  @IsString()
  description: string;

  @IsString()
  categoryId: string;
}
