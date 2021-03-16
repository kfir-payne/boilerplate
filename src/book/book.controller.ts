import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Book } from './book.entity';
import { BookService } from './book.service';
import { createBookParams, getBookParams, updateBookParams } from './book.type';

@Controller('books')
export class BookController {
  bookService: BookService;
  constructor() {
    this.bookService = new BookService();
  }

  @Get()
  async getBooks(): Promise<Book[]> {
    return await this.bookService.getBooks();
  }

  @Get(':id')
  async getBook(@Param() params: getBookParams): Promise<string> {
    if (!(await this.bookService.isBookExist(params.id))) {
      new NotFoundException('Book Not Found!');
    }
    return JSON.stringify(await this.bookService.getBookById(params.id));
  }

  @Post()
  async createBook(@Body() body: createBookParams): Promise<string> {
    const book: Book = await this.bookService.createBook(body);
    return JSON.stringify(book);
  }

  @Delete(':id')
  async deleteBook(@Param() params: getBookParams): Promise<string> {
    if (!(await this.bookService.isBookExist(params.id))) {
      new NotFoundException('Book Not Found!');
    }
    const book: Book = await this.bookService.deleteBookById(params.id);
    return JSON.stringify(book);
  }

  @Patch(':id')
  async updateBook(
    @Param() params: getBookParams,
    @Body() body: updateBookParams,
  ): Promise<string> {
    if (!(await this.bookService.isBookExist(params.id))) {
      new NotFoundException('Book Not Found!');
    }
    const book: Book = await this.bookService.updateBook(body);
    return JSON.stringify(book);
  }
}
