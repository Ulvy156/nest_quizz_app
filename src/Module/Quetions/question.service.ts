import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from './question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Questions)
    private questionRepository: Repository<Questions>,
  ) {}

  async createQuestion(question: Questions): Promise<Questions> {
    return await this.questionRepository.save(question);
  }

  async getQuesById(@Param('id') id: number): Promise<Questions> {
    return await this.questionRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        answers: true,
      },
    });
  }
}
