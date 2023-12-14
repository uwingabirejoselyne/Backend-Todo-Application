import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
// import { Status } from '../status';
import { Status } from '../status';

export class CreateTaskDto {
  @IsOptional()
  id?: string;
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  status: Status;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  categoryId: string;
}
