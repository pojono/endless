import { TaskStatus } from '../task.model';

export class GetFilterTaskDto {
    status: TaskStatus;
    search: string;
}