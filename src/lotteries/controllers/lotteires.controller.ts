import { Controller, Get } from '@nestjs/common';
import { LotofacilService } from '../services';

@Controller()
export class LotteiresController {
    constructor(
        private readonly lotteriesService: LotofacilService
    ) { }

    @Get()
    async getAll() {
        const lotteries = await this.lotteriesService.populateDatabaseLotofacil();
       return 'Ok';
        // return new OkResponseDataDto<GeonameCityEntity[]>(
        //     SUCCESS_MESSAGES.GET_SUCCESS, geonameCitys
        // );
    }
}
