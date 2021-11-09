import { ApiTags } from '@nestjs/swagger';
import { LotofacilService } from '../services';
import { Controller, Get } from '@nestjs/common';
import { OkResponseDataDto } from 'src/shared/dtos';
import { ROUTES, SUCCESS_MESSAGES } from '../constants';
import { ResultGameLotofacilDto } from '../dtos';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class LotofacilController
 */
@ApiTags('Lotofácil')
@Controller(ROUTES.LOTOFACIL)
export class LotofacilController {
    constructor(
        private readonly lotteriesService: LotofacilService
    ) { }

    @Get(ROUTES.LOTOFACIL_POPULATE)
    async populateDatabase() {
        await this.lotteriesService.populateDatabaseLotofacil();
        return new OkResponseDataDto<string>(
            SUCCESS_MESSAGES.POPULATE_GAME
        );
    }

    @Get()
    async getGames() {
        const lotofacil = await this.lotteriesService.findGames();
        return new OkResponseDataDto<ResultGameLotofacilDto>(
            SUCCESS_MESSAGES.GET_SUCCESS, lotofacil
        );
    }
}
