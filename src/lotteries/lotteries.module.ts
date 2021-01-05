import { Module } from '@nestjs/common';
import { LotofacilService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LotofacilController } from './controllers';
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
        LotofacilController,
    ],
})
export class LotteriesModule {}
