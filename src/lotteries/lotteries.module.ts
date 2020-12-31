import { Module } from '@nestjs/common';
import { LotofacilService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LotteiresController } from './controllers';
import { LotofacilRepository } from './repositories';
import { StringFormatterHelper } from 'src/shared/helper';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            LotofacilRepository,
        ], 'databaseConnection'),
    ],
    providers: [
        StringFormatterHelper,
        LotofacilService,
    ],
    controllers: [
        LotteiresController,
    ],
})
export class LotteriesModule {}
