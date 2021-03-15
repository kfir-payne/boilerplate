import { Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { Book } from './book.entity';
import { createBookParams, updateBookParams } from './book.type';

@Injectable()
export class BookService {
  bookRepository: Repository<Book>;
  constructor() {
    this.bookRepository = getRepository(Book);
  }

  async isBookExist(id: string): Promise<boolean> {
    return (await this.bookRepository.findOne(id)) ? true : false;
  }

  async getBookById(id: string): Promise<Book> {
    return await this.bookRepository.findOne(id);
  }

  async getBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async deleteBookById(id: string): Promise<Book> {
    const deletedBook = await this.getBookById(id);
    await this.bookRepository.delete(id);
    return deletedBook;
  }

  async createBook(params: createBookParams): Promise<Book> {
    const createdBook = new Book(
      params.title,
      params.description,
      params.ISBN,
      params.author,
      params.publicationDate,
      params.genre,
      params.price,
    );
    return await this.bookRepository.save(createdBook);
  }

  async updateBook(params: updateBookParams): Promise<Book> {
    const book = await this.getBookById(params.id);
    book.title = params.title ?? book.title;
    book.description = params.description ?? book.description;
    book.ISBN = params.ISBN ?? book.ISBN;
    book.author = params.author ?? book.author;
    book.publicationDate = params.publicationDate ?? book.publicationDate;
    book.genre = params.genre ?? book.genre;
    book.price = params.price ?? book.price;
    return await this.bookRepository.save(book);
  }
}
