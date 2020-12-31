import xlsx from 'node-xlsx';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { StringFormatterHelper } from 'src/shared/helper';

@Injectable()
export class LotteriesService {
    constructor(
        // @InjectRepository(GeonameCityRepository, 'databaseConnection')
        // private readonly geonameCityRepository: GeonameCityRepository,
        private configService: ConfigService,
        private readonly stringFormatter: StringFormatterHelper,
    ) { }

    /**
     * @return {*}  {Promise<GeonameCityEntity[]>}
     * @memberof GeonameCityService
     */
    async findAll(): Promise<void> {
        const identity = x => x;
        const filePath = path.resolve(process.env.DIRNA);

        var ab = await xlsx.parse(filePath)
        const tabela = ab[0].data;
        tabela.map((dados) => {
            // console.log(dados)

        }).filter(identity)
        console.log(tabela.length)
    }
}
