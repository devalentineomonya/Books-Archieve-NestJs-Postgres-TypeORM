import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    BeforeInsert,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Profile } from 'src/profile/entities/profile.entity';

@Entity()
export class User {
    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 100 })
    @Unique(['email'])
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @OneToOne(() => Profile, (profile) => profile.id, { cascade: true })
    @JoinColumn()
    profile: Profile;
}
