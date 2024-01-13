import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity('todos')
export class Todo {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({ type: 'varchar', length: 255 })
    title!: string;

  @Column({ type: 'text', nullable: true })
    description!: string;

  @Column({ type: 'date', nullable: true })
    due_date!: Date;

  @Column({ type: 'varchar', length: 10, nullable: true })
    priority!: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
    status!: string;

  @Column({ type: 'int', nullable: true })
    shared_with!: number;

  @Column({ type: 'int', nullable: true })
    assigned_to!: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at!: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'shared_with' })
  sharedWithUser!: User;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'assigned_to' })
  assignedToUser!: User;
}
