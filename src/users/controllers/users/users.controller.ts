import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return {
      userName: 'sagun',
    };
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        userName: 'sagun',
        posts: [
          { id: 1, title: 'post 1' },
          { id: 2, title: 'post 2' },
        ],
      },
    ];
  }
}
