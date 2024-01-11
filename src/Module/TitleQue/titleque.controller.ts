import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TitleQueService } from './titleque.service';
import { TitleQue } from './titleque.entity';

@Controller('/title_que')
export class TitleQueController {
  constructor(private readonly titleQueService: TitleQueService) {}

  @Post()
  async createTileQue(@Body() titleQue: TitleQue): Promise<TitleQue> {
    return await this.titleQueService.createTitleQue(titleQue);
  }

  @Get(':id')
  async createTitleQueById(@Param('id') id: number): Promise<TitleQue> {
    return await this.titleQueService.getTitleQueById(id);
  }
}
