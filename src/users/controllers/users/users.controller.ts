import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Body,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  ParseBoolPipe
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(
    @Query('sortBy') sortBy: string,
    @Query('sortDesc', ParseBoolPipe) sortDesc: boolean,
  ) {
    console.log(sortBy, sortDesc);
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
  @UsePipes(new ValidationPipe())
  createUsers(@Body() userData: CreateUserDto) {
    // we can use body decorator to type annoate my request
    console.log(userData);
    return {};
    // response.send('User Created');
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log('id>>', id);
    return { id };
  }
  // nested as well
  @Get(':id/:postId')
  getUserByIdAndPost(@Param('id') id: string, @Param('postId') postId: string) {
    console.log('id', id, postId);
    return id;
  }
}
