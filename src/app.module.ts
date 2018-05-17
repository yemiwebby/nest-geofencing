import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersService } from 'users/users.service';
import { UserController } from 'users/user.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  components: [UsersService],
})
export class AppModule {}
