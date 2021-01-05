import { ResultGameLotofacil } from '../dtos';
import { LotofacilService } from '../services';
import { Controller, Get } from '@nestjs/common';
import { OkResponseDataDto } from 'src/shared/dto';
import { ROUTES, SUCCESS_MESSAGES } from '../constants';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class LotofacilController
 */
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
        return new OkResponseDataDto<ResultGameLotofacil>(
            SUCCESS_MESSAGES.GET_SUCCESS, lotofacil
        );
    }
}
