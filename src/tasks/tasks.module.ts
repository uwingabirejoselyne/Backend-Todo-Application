import { Module, forwardRef } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repositories';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
  imports: [forwardRef(() => CategoriesModule)],
})
export class TasksModule {}
