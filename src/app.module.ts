import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';
import { BookreviewsModule } from './bookreviews/bookreviews.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, ProfileModule, AuthorsModule, BooksModule, CategoriesModule, BookreviewsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
