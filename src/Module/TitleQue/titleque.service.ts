import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TitleQue } from './titleque.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TitleQueService {
  constructor(
    @InjectRepository(TitleQue)
    private readonly titleQueRepo: Repository<TitleQue>,
  ) {}

  async createTitleQue(titleQues: TitleQue): Promise<TitleQue> {
    return await this.titleQueRepo.save(titleQues);
  }

  async getTitleQueById(id: number): Promise<TitleQue> {
    return await this.titleQueRepo.findOne({
      where: {
        id: id,
      },
      relations: ['Questions', 'Questions.answers'],
    });
  }
}
