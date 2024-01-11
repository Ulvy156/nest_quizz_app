import { Body, Controller, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { Answers } from './answer.entity';

@Controller('/answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  async createAnswer(@Body() answer: Answers): Promise<Answers> {
    return await this.answerService.createAnswer(answer);
  }
}
