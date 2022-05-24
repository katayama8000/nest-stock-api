import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Post()
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    console.log(createUser);
    return this.usersService.create(createUser);
  }
}
