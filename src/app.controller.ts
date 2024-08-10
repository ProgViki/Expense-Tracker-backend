import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { data  } from './data';


@Controller('report/:type')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(
    @Param('type') type: string,
    // @Query('startDate') startDate: string,
    // @Query('endDate') endDate: string,
    // @Query('limit') limit: number,
    // @Query('offset') offset: number,
    // @Query('sort') sort: string,
    // @Query('order') order: string,
    // @Query('filter') filter: string,
  ) {
    console.log(type)
    return [];
  }

  @Get(':id')
  getReportById() {
    return {};
  }
  @Post()
  createReports() {
    return 'Created';
  }
  @Get()
  getAllReport() {
    return [];
  }
  @Get()
  getAllRepors() {
    return [];
  }



}
