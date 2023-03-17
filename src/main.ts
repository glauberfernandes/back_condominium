import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  const porta = 3000;
  await app.listen(porta, () => {
    console.log("Servidor rodando na porta: " + porta)
  });
}
bootstrap();
