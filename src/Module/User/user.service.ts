import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userService: Repository<User>,
  ) {}

  async createUser(user: User): Promise<User> {
    //save user to db
    return await this.userService.save(user);
  }

  // async hashPassword(password: string): Promise<string> {
  //   const saltRounds = 10;
  //   const hashedPassword = await bcrypt.hash(password, saltRounds);
  //   return hashedPassword;
  // }

  async getQuestionById(id: number): Promise<User> {
    return await this.userService.findOne({
      //find user by id
      where: {
        id: id,
      },
      relations: [
        //inlcudes related realtionships
        'titleques',
        'titleques.Questions',
        'titleques.Questions.answers',
      ],
    });
  }
}
