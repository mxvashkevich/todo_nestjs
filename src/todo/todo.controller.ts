import { Body, Controller, Get, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";


@Controller('api')
export class TodoController {

  constructor(private todoService: TodoService) {}

  @Post()
  create(@Body() userDto: CreateTodoDto) {
    return this.todoService.createTodo(userDto);
  }

  @Get()
  getAll() {
    return this.todoService.getAllTodo();
  }
}