import { ApiTags } from '@nestjs/swagger';
import { LotofacilService } from '../services';
import { Controller, Get } from '@nestjs/common';
import { OkResponseDataDto } from 'src/shared/dto';
import { ROUTES, SUCCESS_MESSAGES } from '../constants';
import { ApiInfoDTO, ResultGameLotofacilDto } from '../dtos';

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

    @Get(ROUTES.API_INFO)
    async checkApi() {
        const apiInfo = new ApiInfoDTO();
        apiInfo.environment = process.env.ENVIRONMENT;
        apiInfo.version = process.env.VERSION;
        apiInfo.address = process.env.URI;
        apiInfo.message = process.env.MESSAGE;
        apiInfo.documentation = process.env.DOCUMENTATION;
        return new OkResponseDataDto<ApiInfoDTO>(SUCCESS_MESSAGES.GET_SUCCESS, apiInfo);
    }

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
