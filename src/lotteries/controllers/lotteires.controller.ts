import { Controller, Get } from '@nestjs/common';
import { OkResponseDataDto } from 'src/shared/dto';
import { SUCCESS_MESSAGES } from '../constants';
import { ResultGameLotofacil } from '../dtos';
import { LotofacilService } from '../services';

@Controller()
export class LotteiresController {
    constructor(
        private readonly lotteriesService: LotofacilService
    ) { }

    @Get()
    async getAll() {
        const lotofacil = await this.lotteriesService.populateDatabaseLotofacil();
        return 'Ok';
        // return new OkResponseDataDto<ResultGameLotofacil>(
        //     SUCCESS_MESSAGES.GET_SUCCESS, lotofacil
        // );
    }

    @Get('/getgames')
    async getGames() {
        const lotofacil = await this.lotteriesService.findGames();
        return new OkResponseDataDto<ResultGameLotofacil>(
            SUCCESS_MESSAGES.GET_SUCCESS, lotofacil
        );
    }
}
