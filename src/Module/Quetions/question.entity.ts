import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Answers } from '../Answers/answer.entity';
import { TitleQue } from '../TitleQue/titleque.entity';

@Entity()
export class Questions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  score: number;

  @OneToOne(() => Answers, { nullable: true })
  @JoinColumn()
  answers: Answers;

  @ManyToOne(() => TitleQue, (titleQue) => titleQue.Questions)
  titleQue: TitleQue;
}
