import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TitleQue } from '../TitleQue/titleque.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  is_teacher: boolean;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => TitleQue, (titleQue) => titleQue.User)
  titleques: TitleQue[];

  @UpdateDateColumn()
  updated_at: Date;
}
