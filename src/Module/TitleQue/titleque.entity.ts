import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Questions } from '../Quetions/question.entity';
import { User } from '../User/user.entity';

@Entity()
export class TitleQue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Questions, (question) => question.titleQue)
  Questions: Questions[];

  @ManyToOne(() => User, (user) => user.titleques)
  User: User;
}
