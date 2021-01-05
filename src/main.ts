import { LotteriesModule } from './lotteries/lotteries.module';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from './shared/pipes';
import { HttpExceptionFilter } from './shared/exceptions';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    // exibir excecoes personalizadas
    app.useGlobalFilters(new HttpExceptionFilter());

    // gerar documentacão
    const options = new DocumentBuilder()
        .setTitle('Lotteries')
        .setDescription('The API description')
        .setVersion('1.0.0')
        .setContact(
            'Jeyson Luiz Romualdo',
            'https://www.linkedin.com/in/jeyson-luiz-romualdo-86992995',
            'jeysonlr@gmail.com')
        .build();
    const document = SwaggerModule.createDocument(app, options, {
        include: [
            LotteriesModule,
        ],
    });
    SwaggerModule.setup('documentation', app, document);

    await app.listen(3333);
}
bootstrap();
