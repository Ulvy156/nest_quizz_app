import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TitleQue } from './titleque.entity';
import { TitleQueController } from './titleque.controller';
import { TitleQueService } from './titleque.service';

@Module({
  imports: [TypeOrmModule.forFeature([TitleQue])],
  controllers: [TitleQueController],
  providers: [TitleQueService],
})
export class TitleQueModule {}
