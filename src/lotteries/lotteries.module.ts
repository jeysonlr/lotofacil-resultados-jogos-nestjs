import { Module } from '@nestjs/common';
import { LotofacilService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LotteiresController } from './controllers';
import { LotofacilRepository } from './repositories';
import { OpenFileHelper, ReadDqlFileHelper, ReadFileHelper, StringFormatterHelper } from 'src/shared/helper';
// import { EntityManager } from 'typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            LotofacilRepository,
        ], 'databaseConnection'),
    ],
    providers: [
        StringFormatterHelper,
        LotofacilService,
        ReadDqlFileHelper,
        ReadFileHelper,
        OpenFileHelper,
        // EntityManager
    ],
    controllers: [
        LotteiresController,
    ],
})
export class LotteriesModule {}
