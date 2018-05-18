import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersService } from 'users/users.service';
import { UsersController } from 'users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  components: [UsersService],
})
export class AppModule {}
