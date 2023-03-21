import { Controller, Get, HttpStatus, Param, Post, Req, Res } from "@nestjs/common";
import { InformationService } from "./information.service";

@Controller('information')
export class InformationController  {
    constructor(private readonly informationService: InformationService) { }


    @Get(':id')
    async getInformation(@Req() request, @Res() response, @Param() id: string){

        // console.log('route works -> ', id )
        // let data = 

        return response.status(HttpStatus.OK).json()

    }


    @Post('saveInformation')
    async saveInformation(@Res() response, @Req() request){

        console.log(request.body.files);

        await this.informationService.createNew(request.body.files)

        return response.status(HttpStatus.OK).json()
    }

}