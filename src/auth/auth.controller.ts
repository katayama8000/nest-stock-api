import { AuthService } from './auth.service';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    console.log(createUser);
    return this.authService.login(createUser);
  }
}
