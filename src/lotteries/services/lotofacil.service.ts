import xlsx from 'node-xlsx';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LotofacilRepository } from '../repositories';
import { ReadDqlFileHelper, StringFormatterHelper } from 'src/shared/helper';
import { LotofacilDto, ResultGameLotofacil, MoreTimesTheyLeftDto, LessTimesLeftDto } from '../dtos';

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
        private readDqlFileHelper: ReadDqlFileHelper
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

        for (var i = 0; i < tableEdit.length; i++) {
            const lotofacilDto = new LotofacilDto();
            lotofacilDto.numeroConcurso = tableEdit[i][0];
            lotofacilDto.dataSorteio = tableEdit[i][1];
            lotofacilDto.loteria = process.env.NAME_LOTOFACIL;
            lotofacilDto.bola1 = tableEdit[i][2];
            lotofacilDto.bola2 = tableEdit[i][3];
            lotofacilDto.bola3 = tableEdit[i][4];
            lotofacilDto.bola4 = tableEdit[i][5];
            lotofacilDto.bola5 = tableEdit[i][6];
            lotofacilDto.bola6 = tableEdit[i][7];
            lotofacilDto.bola7 = tableEdit[i][8];
            lotofacilDto.bola8 = tableEdit[i][9];
            lotofacilDto.bola9 = tableEdit[i][10];
            lotofacilDto.bola10 = tableEdit[i][11];
            lotofacilDto.bola11 = tableEdit[i][12];
            lotofacilDto.bola12 = tableEdit[i][13];
            lotofacilDto.bola13 = tableEdit[i][14];
            lotofacilDto.bola14 = tableEdit[i][15];
            lotofacilDto.bola15 = tableEdit[i][16];

            await this.lotofacilRepository.createLotofacil(lotofacilDto);
        }
    }

    /**
     * @return {*}  {Promise<ResultGameLotofacil>}
     * @memberof LotofacilService
     */
    async findGames(): Promise<ResultGameLotofacil> {
        const sqlFile = await this.readDqlFileHelper.read('lotofacil.sql');
        const resultQuery = await this.lotofacilRepository.findGames(sqlFile);

        const moreTimesTheyLeft = resultQuery.slice(0, 15);
        const lessTimesLeft = resultQuery.slice(-15);

        /* numeros que mais saíram */
        const resultMoreTimesTheyLeft = moreTimesTheyLeft.map((data) => {
            const moreTimesTheyLeftDto = new MoreTimesTheyLeftDto();
            moreTimesTheyLeftDto.number = data.numero;
            moreTimesTheyLeftDto.numberOfTimes = Number(data.vezes);

            return moreTimesTheyLeftDto;
        });

         /* numeros que menos saíram */
        const resultLessTimesLeft = lessTimesLeft.map((data) => {
            const lessTimesLeftDto = new LessTimesLeftDto();
            lessTimesLeftDto.number = data.numero;
            lessTimesLeftDto.numberOfTimes = Number(data.vezes);

            return lessTimesLeftDto;
        });

        const resultGameLotofacil = new ResultGameLotofacil();
        resultGameLotofacil.moreTimesTheyLeft = resultMoreTimesTheyLeft;
        resultGameLotofacil.lessTimesLeft = resultLessTimesLeft;

        return resultGameLotofacil;
    }
}
