import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({ type: 'varchar', length: 255 })
    title!: string;

  @Column({ type: 'text', nullable: true })
    description!: string;

  @Column({ type: 'varchar', length: 14, nullable: true, name: 'document' })
    document!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
    type!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
    institution!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
    category!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
    priority!: string;

  @Column({ type: 'text', nullable: true })
    complement!: string;

  @Column({ type: 'bytea', nullable: true })
    attachment!: Buffer;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'name' })
    name!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
    email!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true, name: 'date' })
    date!: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'forwarded_to' })
  forwardedToUser!: User;
  
}
