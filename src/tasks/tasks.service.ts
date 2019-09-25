import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task.status.enum';
import { GetFilterTaskDto } from './dto/get.filter.task.dto';
import { User } from '../auth/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTasks(user: User, filterDto: GetFilterTaskDto): Promise<Task[]> {
    return this.taskRepository.getTasks(user, filterDto);
  }

  async getTaskById(user: User, id: number): Promise<Task> {
    const found = await this.taskRepository.findOne({ where: { id, userId: user.id }});
    if (!found) {
      throw new NotFoundException(`Task with ID: ${id} not found`);
    }
    return found;
  }

  async deleteTaskById(user: User, id: number): Promise<void> {
    const result = await this.taskRepository.delete({ id, userId: user.id });
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID: ${id} not found`);
    }
  }

  async updateTaskStatus(user: User, id: number, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(user, id);
    task.status = status;
    await task.save();
    return task;
  }

  async createTask(user: User, createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(user, createTaskDto);
  }
}
