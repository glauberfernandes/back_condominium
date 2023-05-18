import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as multer from 'multer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  const porta = 3000;
  app.use(multer({ dest: './uploads' }).single('visitante')); // Especifique o diretório onde os arquivos serão salvos

  await app.listen(porta, () => {
    console.log("Servidor rodando na porta: " + porta)
  });
}
bootstrap();
