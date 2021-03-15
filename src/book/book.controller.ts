import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Book } from './book.entity';
import { BookService } from './book.service';

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

  @Get(':bookId')
  async getBook(@Param() params)
}
