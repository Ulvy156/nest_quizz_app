import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Answers } from './answer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answers)
    private readonly answerService: Repository<Answers>,
  ) {}

  async createAnswer(question: Answers): Promise<Answers> {
    return await this.answerService.save(question);
  }
}
