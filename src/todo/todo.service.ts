import { Injectable } from "@nestjs/common";
import { Todo } from "./entities/todo.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private todoRepository: typeof Todo) {}

  async createTodo(dto: CreateTodoDto) {
    const todo = await this.todoRepository;
    return todo;
  }

  async getAllTodo() {
    const todoAll = await this.todoRepository.findAll();
    return todoAll;
  }
}