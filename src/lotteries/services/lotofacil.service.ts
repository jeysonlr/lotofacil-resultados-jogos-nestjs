import xlsx from 'node-xlsx';
import * as path from 'path';
import { LotofacilDto } from '../dtos';
import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LotofacilRepository } from '../repositories';
import { ReadDqlFileHelper, StringFormatterHelper } from 'src/shared/helper';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class LotofacilService
 */
@Injectable()
export class LotofacilService {
    constructor(
        @InjectRepository(LotofacilRepository, 'databaseConnection')
        private readonly lotofacilRepository: LotofacilRepository,
        private readonly stringFormatter: StringFormatterHelper,
        private readDqlFileHelper: ReadDqlFileHelper,
        // private entityManager: EntityManager
    ) { }

    /**
     * @return {*}  {Promise<void>}
     * @memberof LotofacilService
     */
    async populateDatabaseLotofacil(): Promise<void> {
        const filePath = path.resolve(process.env.DIRNAME + process.env.LOTOFACIL);

        var readArchive = await xlsx.parse(filePath);
        const table = readArchive[0].data;

        var tableEdit = table.slice(7);

        this.findGames();

        // for (var i = 0; i < tableEdit.length; i++) {
        //     const lotofacilDto = new LotofacilDto();
        //     lotofacilDto.numeroConcurso = tableEdit[i][0];
        //     lotofacilDto.dataSorteio = tableEdit[i][1];
        //     lotofacilDto.loteria = process.env.NAME_LOTOFACIL;
        //     lotofacilDto.bola1 = tableEdit[i][2];
        //     lotofacilDto.bola2 = tableEdit[i][3];
        //     lotofacilDto.bola3 = tableEdit[i][4];
        //     lotofacilDto.bola4 = tableEdit[i][5];
        //     lotofacilDto.bola5 = tableEdit[i][6];
        //     lotofacilDto.bola6 = tableEdit[i][7];
        //     lotofacilDto.bola7 = tableEdit[i][8];
        //     lotofacilDto.bola8 = tableEdit[i][9];
        //     lotofacilDto.bola9 = tableEdit[i][10];
        //     lotofacilDto.bola10 = tableEdit[i][11];
        //     lotofacilDto.bola11 = tableEdit[i][12];
        //     lotofacilDto.bola12 = tableEdit[i][13];
        //     lotofacilDto.bola13 = tableEdit[i][14];
        //     lotofacilDto.bola14 = tableEdit[i][15];
        //     lotofacilDto.bola15 = tableEdit[i][16];

        //     await this.lotofacilRepository.createLotofacil(lotofacilDto);
        // }
    }

    async findGames(): Promise<void> {
        const sqlFile = await this.readDqlFileHelper.read('lotofacil.sql');
        const resultQuery = await this.lotofacilRepository.findGames(sqlFile);

        const moreTimesTheyLeft = resultQuery.slice(0,15);
        const lessTimesLeft = resultQuery.slice(-15);

        console.log(moreTimesTheyLeft)
        // for (let index = 0; resultQuery.length <= 10; index++) {
        //     console.log(resultQuery)
        // }
        // console.log(sqlFile)
    }
}
