import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseTypeOrmConfig } from "./config";
import { HttpModule, Module } from "@nestjs/common";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `env/.${process.env.NODE_ENV}.env`,
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: DatabaseTypeOrmConfig,
            name: 'databaseConnection',
        }),
        HttpModule,
    ],
    exports: [
        HttpModule,
        ConfigModule,
    ]
})
export class AppModule { }
