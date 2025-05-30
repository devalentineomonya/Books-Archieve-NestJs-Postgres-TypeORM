import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  boi: string;

  @Column({ type: 'varchar' })
  avatar: string;

  @Column({ type: 'timestamp without time zone' })
  dateOfBirth: Date;

  @OneToOne(() => User, (profile) => profile.id, { cascade: true })
  @JoinColumn()
  user: Profile;
}
