import xlsx from 'node-xlsx';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LotofacilRepository } from '../repositories';
import { ReadDqlFileHelper, StringFormatterHelper } from 'src/shared/helper';
import { LotofacilDto, ResultGameLotofacil, MoreTimesTheyLeftDto, LessTimesLeftDto, RandomGames } from '../dtos';
import { SUCCESS_MESSAGES } from '../constants';

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
     * @return {*}  {Promise<string>}
     * @memberof LotofacilService
     */
    async populateDatabaseLotofacil(): Promise<void> {
        const filePath = path.resolve(process.env.DIRNAME + process.env.LOTOFACIL);

        var readArchive = await xlsx.parse(filePath);
        const table = readArchive[0].data;

        var tableEdit = table.slice(7);

        const result = tableEdit.map(async (data) => {
            const lotofacilDto = new LotofacilDto();
            lotofacilDto.numeroConcurso = data[0];
            lotofacilDto.dataSorteio = data[1];
            lotofacilDto.loteria = process.env.NAME_LOTOFACIL;
            lotofacilDto.bola1 = data[2];
            lotofacilDto.bola2 = data[3];
            lotofacilDto.bola3 = data[4];
            lotofacilDto.bola4 = data[5];
            lotofacilDto.bola5 = data[6];
            lotofacilDto.bola6 = data[7];
            lotofacilDto.bola7 = data[8];
            lotofacilDto.bola8 = data[9];
            lotofacilDto.bola9 = data[10];
            lotofacilDto.bola10 = data[11];
            lotofacilDto.bola11 = data[12];
            lotofacilDto.bola12 = data[13];
            lotofacilDto.bola13 = data[14];
            lotofacilDto.bola14 = data[15];
            lotofacilDto.bola15 = data[16];

            await this.lotofacilRepository.createLotofacil(lotofacilDto);
        });
        await Promise.all(result)
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

        const randomGamesDto = new RandomGames();
        randomGamesDto.randomGamesOne = await this.getRandomIntInclusive();
        randomGamesDto.randomGamesTwo = await this.getRandomIntInclusive();
        randomGamesDto.randomGamesThree = await this.getRandomIntInclusive();

        const resultGameLotofacil = new ResultGameLotofacil();
        resultGameLotofacil.moreTimesTheyLeft = resultMoreTimesTheyLeft;
        resultGameLotofacil.lessTimesLeft = resultLessTimesLeft;
        resultGameLotofacil.randomGames = randomGamesDto;

        return resultGameLotofacil;
    }

    async getRandomIntInclusive(): Promise<number[]> {

        const randomNumbers = [Number()];
        while (randomNumbers.length < 15) {
            var aleatoryNumber = Math.floor(Math.random() * 25 + 1);

            if (randomNumbers.indexOf(aleatoryNumber) == -1) {
                randomNumbers.push(aleatoryNumber);
            }
        }
        return await randomNumbers;
    }
}
