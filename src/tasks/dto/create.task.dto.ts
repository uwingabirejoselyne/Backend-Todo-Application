import { Status } from 'src/status';
export class CreateTaskDto {
  readonly id: number;
  readonly title: string;
  readonly status: Status;
  readonly description: string;
  readonly categoryId: string;
}
