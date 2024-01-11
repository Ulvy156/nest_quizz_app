import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Answers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ans_1: string;

  @Column()
  ans_2: string;

  @Column()
  ans_3: string;

  @Column()
  ans_4: string;

  @Column()
  correct_ans: string;
}
