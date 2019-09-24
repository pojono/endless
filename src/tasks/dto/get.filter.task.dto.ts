import { TaskStatus } from '../task.model';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class GetFilterTaskDto {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
