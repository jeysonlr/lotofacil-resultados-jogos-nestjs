import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from './shared/pipes';
import { HttpExceptionFilter } from './shared/exceptions';
import { LotteriesModule } from './lotteries/lotteries.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: [/http:\/\/localhost\:\d{4}/],
        methods: ['GET', 'PUT', 'POST', 'OPTIONS'],
        allowedHeaders: ['Access-Control-Allow-Origin'],
        credentials: true
    });

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
        include: [AppModule, LotteriesModule],
    });
    SwaggerModule.setup('documentation', app, document);

    await app.listen(process.env.PORT || 3333);
}
bootstrap();
