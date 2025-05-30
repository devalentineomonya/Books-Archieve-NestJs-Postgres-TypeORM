import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar', length: 2000 })
  description: string;

  @Column({ type: 'year' })
  publicationYear: string;

  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;
}
