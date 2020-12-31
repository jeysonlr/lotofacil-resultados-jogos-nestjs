import { Controller, Get } from '@nestjs/common';
import { LotteriesService } from '../services';

@Controller()
export class LotteiresController {
    constructor(
        private readonly lotteriesService: LotteriesService
    ) { }

    @Get()
    async getAll() {
        const lotteries = await this.lotteriesService.findAll();
       return 'Ok';
        // return new OkResponseDataDto<GeonameCityEntity[]>(
        //     SUCCESS_MESSAGES.GET_SUCCESS, geonameCitys
        // );
    }
}
