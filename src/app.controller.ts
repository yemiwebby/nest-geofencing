import { Get, Controller, Res, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getUsers(@Res() res) {
    res.render('index');
  }
}
