/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('verosApi/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API Veros Express')
    .setDescription('Api de control de bodega de veros express')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docApi', app, document);

    // Configuracion de CORS
    app.enableCors({
      origin: 'http://localhost:4200',
      allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    });

  await app.listen(3000);
}
bootstrap();
