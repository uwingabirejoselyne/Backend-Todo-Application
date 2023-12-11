import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Status } from 'src/status';
import { Category } from 'src/categories/category.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.OPEN,
  })
  status: Status;

  description: string;

//   @ManyToOne(() => Category, (category) => category.tasks)
//   category: Category;
}
