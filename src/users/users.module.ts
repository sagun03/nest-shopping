import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { LoggersMiddleware } from './middlewares/Loggers.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggersMiddleware).forRoutes('users');
  }
}
