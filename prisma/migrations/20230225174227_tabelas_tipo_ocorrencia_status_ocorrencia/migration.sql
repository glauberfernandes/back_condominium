/*
  Warnings:

  - A unique constraint covering the columns `[descStatusOcorrencia]` on the table `Status_Ocorrencia` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[descTipoOcorrencia]` on the table `Tipo_Ocorrencia` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Status_Ocorrencia" ALTER COLUMN "descStatusOcorrencia" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Tipo_Ocorrencia" ALTER COLUMN "descTipoOcorrencia" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Telefone" (
    "idTelefone" SERIAL NOT NULL,
    "numeroTelefone" TEXT NOT NULL,

    CONSTRAINT "Telefone_pkey" PRIMARY KEY ("idTelefone")
);

-- CreateTable
CREATE TABLE "Veiculo" (
    "idVeiculo" SERIAL NOT NULL,
    "placa" TEXT NOT NULL,
    "tipoVeiculo" TEXT,
    "cor" TEXT,
    "modelo" TEXT,

    CONSTRAINT "Veiculo_pkey" PRIMARY KEY ("idVeiculo")
);

-- CreateTable
CREATE TABLE "Ocorrencia" (
    "idOcorrencia" SERIAL NOT NULL,
    "nomePorteiro" VARCHAR(255) NOT NULL,
    "descOcorrencia" VARCHAR(500) NOT NULL,
    "dataOcorrencia" TIMESTAMP(3) NOT NULL,
    "tipoOcorrenciaId" INTEGER NOT NULL,
    "statusOcorrenciaId" INTEGER NOT NULL,

    CONSTRAINT "Ocorrencia_pkey" PRIMARY KEY ("idOcorrencia")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "idEndereco" SERIAL NOT NULL,
    "quadra" TEXT NOT NULL,
    "lote" TEXT NOT NULL,
    "bloco" TEXT NOT NULL,
    "apartamento" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("idEndereco")
);

-- CreateTable
CREATE TABLE "Destino" (
    "idDestino" SERIAL NOT NULL,
    "descDestino" TEXT NOT NULL,
    "dhEntrada" TIMESTAMP(3) NOT NULL,
    "dhSaida" TIMESTAMP(3) NOT NULL,
    "enderecoId" INTEGER NOT NULL,

    CONSTRAINT "Destino_pkey" PRIMARY KEY ("idDestino")
);

-- CreateTable
CREATE TABLE "TipoPessoa" (
    "idTipoPessoa" SERIAL NOT NULL,
    "nomePessoa" TEXT NOT NULL,
    "descTipoPessoa" TEXT,

    CONSTRAINT "TipoPessoa_pkey" PRIMARY KEY ("idTipoPessoa")
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "idPessoa" SERIAL NOT NULL,
    "nomePessoa" VARCHAR(255) NOT NULL,
    "documento" VARCHAR(50) NOT NULL,
    "empresa" VARCHAR(255),
    "nomePai" VARCHAR(255),
    "nomeMae" VARCHAR(255),
    "email" VARCHAR(100),
    "tipoPessoaId" INTEGER NOT NULL,
    "enderecoId" INTEGER NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("idPessoa")
);

-- CreateTable
CREATE TABLE "_PessoaToTelefone" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PessoaToVeiculo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Telefone_numeroTelefone_key" ON "Telefone"("numeroTelefone");

-- CreateIndex
CREATE UNIQUE INDEX "Veiculo_placa_key" ON "Veiculo"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Destino_descDestino_key" ON "Destino"("descDestino");

-- CreateIndex
CREATE UNIQUE INDEX "TipoPessoa_nomePessoa_key" ON "TipoPessoa"("nomePessoa");

-- CreateIndex
CREATE UNIQUE INDEX "_PessoaToTelefone_AB_unique" ON "_PessoaToTelefone"("A", "B");

-- CreateIndex
CREATE INDEX "_PessoaToTelefone_B_index" ON "_PessoaToTelefone"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PessoaToVeiculo_AB_unique" ON "_PessoaToVeiculo"("A", "B");

-- CreateIndex
CREATE INDEX "_PessoaToVeiculo_B_index" ON "_PessoaToVeiculo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Status_Ocorrencia_descStatusOcorrencia_key" ON "Status_Ocorrencia"("descStatusOcorrencia");

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_Ocorrencia_descTipoOcorrencia_key" ON "Tipo_Ocorrencia"("descTipoOcorrencia");

-- AddForeignKey
ALTER TABLE "Ocorrencia" ADD CONSTRAINT "Ocorrencia_tipoOcorrenciaId_fkey" FOREIGN KEY ("tipoOcorrenciaId") REFERENCES "Tipo_Ocorrencia"("idTipoOcorrencia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ocorrencia" ADD CONSTRAINT "Ocorrencia_statusOcorrenciaId_fkey" FOREIGN KEY ("statusOcorrenciaId") REFERENCES "Status_Ocorrencia"("idStatusOcorrencia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Destino" ADD CONSTRAINT "Destino_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("idEndereco") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_tipoPessoaId_fkey" FOREIGN KEY ("tipoPessoaId") REFERENCES "TipoPessoa"("idTipoPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("idEndereco") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PessoaToTelefone" ADD CONSTRAINT "_PessoaToTelefone_A_fkey" FOREIGN KEY ("A") REFERENCES "Pessoa"("idPessoa") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PessoaToTelefone" ADD CONSTRAINT "_PessoaToTelefone_B_fkey" FOREIGN KEY ("B") REFERENCES "Telefone"("idTelefone") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PessoaToVeiculo" ADD CONSTRAINT "_PessoaToVeiculo_A_fkey" FOREIGN KEY ("A") REFERENCES "Pessoa"("idPessoa") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PessoaToVeiculo" ADD CONSTRAINT "_PessoaToVeiculo_B_fkey" FOREIGN KEY ("B") REFERENCES "Veiculo"("idVeiculo") ON DELETE CASCADE ON UPDATE CASCADE;
