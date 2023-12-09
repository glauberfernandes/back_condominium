import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as path from 'path';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  const porta = 3000;

  const uploadDirectory = path.join(__dirname, '..', 'uploads');

  if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
  }

  app.use(multer({ dest: uploadDirectory }).single('file'));

  await app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando na porta: ' + porta);
  });
}

bootstrap();
