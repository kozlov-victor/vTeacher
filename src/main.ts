import {NestFactory} from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import {AppModule} from './app.module';

const PORT = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.setBaseViewsDir(join(__dirname, '..', 'static'));
  app.setViewEngine('html');

  await app.listen(PORT);
}
bootstrap();