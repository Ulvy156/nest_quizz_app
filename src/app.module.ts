import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './Module/Quetions/quetion.module';
import { AnswerModule } from './Module/Answers/answer.module';
import { TitleQueModule } from './Module/TitleQue/tilteque.module';
import { UserModule } from './Module/User/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'quiz_app',
      synchronize: true,
      entities: [join(process.cwd(), 'dist/**/*.Entity.js')],
    }),
    QuestionModule,
    AnswerModule,
    TitleQueModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
