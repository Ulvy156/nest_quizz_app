import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionsService } from './question.service';
import { Questions } from './question.entity';

@Controller('/question')
export class QuestionController {
  constructor(private readonly questionService: QuestionsService) {}

  @Post()
  async createQuestion(@Body() question: Questions): Promise<Questions> {
    return await this.questionService.createQuestion(question);
  }

  @Get(':id')
  async getQueById(@Param('id') id: number): Promise<Questions> {
    return await this.questionService.getQuesById(id);
  }
}
