import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Genre } from './book.enum';

@Entity('Book')
@Unique(['id'])
export class Book {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  ISBN: number;

  @Column()
  author: string;

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  publicationDate: Date;

  @Column()
  genre: Genre;

  @Column()
  price: number;

  constructor(
    title: string,
    description: string,
    ISBN: number,
    author: string,
    publicationDate: Date,
    genre: Genre,
    price: number,
  ) {
    this.title = title;
    this.description = description;
    this.ISBN = ISBN;
    this.author = author;
    this.publicationDate = publicationDate;
    this.genre = genre;
    this.price = price;
  }
}
