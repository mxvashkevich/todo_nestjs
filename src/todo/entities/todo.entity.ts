import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Todo' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  text: string

  @Column({ default: false })
  flag: boolean
}