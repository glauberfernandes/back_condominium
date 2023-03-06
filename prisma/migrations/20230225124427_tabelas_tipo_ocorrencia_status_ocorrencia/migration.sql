/*
  Warnings:

  - You are about to drop the `Tipo_Ccorrencia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Tipo_Ccorrencia";

-- CreateTable
CREATE TABLE "Tipo_Ocorrencia" (
    "idTipoOcorrencia" SERIAL NOT NULL,
    "descTipoOcorrencia" VARCHAR(255) NOT NULL,

    CONSTRAINT "Tipo_Ocorrencia_pkey" PRIMARY KEY ("idTipoOcorrencia")
);
