import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
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

  @Post()
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send('User Created');
  }
}
