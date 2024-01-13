import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Ticket } from './Ticket';

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({ type: 'varchar', length: 255 })
    name!: string;

  @Column({ type: 'text' })
    comment!: string;

  @Column({ type: 'timestamp' })
    date!: Date;

  @Column({ type: 'int' })
    ticket_id!: number;

  @ManyToOne(() => Ticket, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'ticket_id' })
    ticket!: Ticket;
}
