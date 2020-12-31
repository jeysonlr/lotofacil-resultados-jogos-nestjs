import { Module } from '@nestjs/common';
import { StringFormatterHelper } from 'src/shared/helper';
import { LotteiresController } from './controllers';
import { LotteriesService } from './services';

@Module({
    providers: [
        StringFormatterHelper,
        LotteriesService,
    ],
    controllers: [
        LotteiresController,
    ],
})
export class LotteriesModule {}
