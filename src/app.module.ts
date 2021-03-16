import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './book/book.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BooksModule],
})
export class AppModule {}
