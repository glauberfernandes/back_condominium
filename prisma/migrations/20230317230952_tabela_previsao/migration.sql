-- CreateTable
CREATE TABLE "Previsao" (
    "idPrevisao" SERIAL NOT NULL,
    "dataVisita" TIMESTAMP(3) NOT NULL,
    "totalPessoas" INTEGER NOT NULL,
    "chuva" BOOLEAN NOT NULL,
    "evento" BOOLEAN NOT NULL,

    CONSTRAINT "Previsao_pkey" PRIMARY KEY ("idPrevisao")
);
