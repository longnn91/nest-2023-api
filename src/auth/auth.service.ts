import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  doSomeThing() {
    console.log('Do some thing');
  }
}
