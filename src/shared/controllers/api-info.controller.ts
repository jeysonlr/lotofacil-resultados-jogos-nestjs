import { ApiTags } from '@nestjs/swagger';
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiInfoDTO, OkResponseDataDto } from '../dtos';
import { SUCCESS_MESSAGES } from '../constants';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ApiInfoController
 */
@ApiTags('Api_Information')
@Controller()
export class ApiInfoController {
    @Get()
    async checkApi() {
        const apiInfo = new ApiInfoDTO();
        apiInfo.environment = process.env.ENVIRONMENT;
        apiInfo.version = process.env.VERSION;
        apiInfo.address = process.env.URI;
        apiInfo.message = process.env.MESSAGE;
        apiInfo.documentation = process.env.DOCUMENTATION;
        return new OkResponseDataDto<ApiInfoDTO>(SUCCESS_MESSAGES.OK, apiInfo);
    }
}
