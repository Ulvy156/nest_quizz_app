import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Get(':id')
  async getQueById(@Param('id') id: number): Promise<User> {
    return await this.userService.getQuestionById(id);
  }
}
