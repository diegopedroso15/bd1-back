import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('users')
@Unique(['email'])
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({ type: 'varchar', length: 255 })
    name!: string;

  @Column({ type: 'varchar', length: 255 })
    email!: string;

  @Column({ type: 'boolean', nullable: true, default: false })
    admin_user!: boolean;

  @Column({ type: 'varchar', length: 255 })
    username!: string;

  @Column({ type: 'varchar', length: 255 })
    password!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
    token!: string | null;

  @Column({ type: 'timestamp', nullable: true })
    expires_in!: Date | null;
}
