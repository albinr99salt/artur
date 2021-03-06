import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';
@Entity('posts')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', type: 'varchar', length: '255', default: null })
  title: string;

  @Column({ name: 'photo_url', type: 'varchar', length: '255' })
  photoUrl: string;

  @Column({
    name: 'description',
    type: 'varchar',
    length: '255',
    nullable: true,
  })
  description: string;

  @Column({
    name: 'created_at',
    type: 'varchar',
    length: '255',
    nullable: true,
  })
  createdAt: string;

  @Column({
    name: 'owner_id',
    type: 'varchar',
    length: '255',
    nullable: true,
  })
  ownerId: string;

  @ManyToOne(
    type => User,
    user => user.posts,
    {
      lazy: true,
    }
  )
  @JoinColumn({ name: 'user_id_fk' })
  user: Promise<User>;

  @Column({ type: 'varchar', length: 255, nullable: true })
  color: string;

  @Column({ type: 'varchar', length: 255, nullable: true, array: true })
  likes: string[];
}
