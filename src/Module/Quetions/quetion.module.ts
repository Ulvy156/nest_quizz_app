import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questions } from './question.entity';
import { QuestionsService } from './question.service';
import { QuestionController } from './question.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Questions])],
  controllers: [QuestionController],
  providers: [QuestionsService],
})
export class QuestionModule {}
