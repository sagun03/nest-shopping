import { Controller, Get, Post, Req, Res, Body, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
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

  // using Body anomatore
  @Post('create')
  createUsers(@Body() userData: CreateUserDto) {
    // we can use body decorator to type annoate my request
    console.log(userData);
    return {};
    // response.send('User Created');
  }
  // nested as well
  @Get(':id/:postId')
  getUserById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log('id', id, postId);
    return id;
  }
}
