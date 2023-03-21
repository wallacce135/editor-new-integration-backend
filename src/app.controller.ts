import { Controller, Get, Post, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('saveInformation')
  async savingInformation(@Res() response): Promise<void>{

    console.log('route works!');

    return response.status(HttpStatus.OK).json()
  }

}
