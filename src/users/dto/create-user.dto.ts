import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  readonly username: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  readonly password: string;
}
