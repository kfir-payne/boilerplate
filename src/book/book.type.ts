import { Genre } from './book.enum';

export type createBookParams = {
  title: string;
  description: string;
  ISBN: number;
  author: string;
  publicationDate: Date;
  genre: Genre;
  price: number;
};

export type updateBookParams = {
  id: string;
  title?: string;
  description?: string;
  ISBN?: number;
  author?: string;
  publicationDate?: Date;
  genre?: Genre;
  price?: number;
};
