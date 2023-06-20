import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private prismaService: PrismaService,
  ) {}

  @Post('register')
  async register(@Body() body: AuthDTO) {
    const hashedPassword = await argon.hash(body.password);
    // const user = this.prismaService.user.create({
    //   data: {},
    // });c
    return hashedPassword;
  }
}
