import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import {UsersService} from './modules/users/users.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("get:api/v1")
    return this.appService.getHello();
  }
}
