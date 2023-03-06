/*
  Warnings:

  - You are about to drop the column `veiculoId` on the `Pessoa` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_telefoneID_fkey";

-- DropForeignKey
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_veiculoId_fkey";

-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "veiculoId";

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
CREATE UNIQUE INDEX "_PessoaToTelefone_AB_unique" ON "_PessoaToTelefone"("A", "B");

-- CreateIndex
CREATE INDEX "_PessoaToTelefone_B_index" ON "_PessoaToTelefone"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PessoaToVeiculo_AB_unique" ON "_PessoaToVeiculo"("A", "B");

-- CreateIndex
CREATE INDEX "_PessoaToVeiculo_B_index" ON "_PessoaToVeiculo"("B");

-- AddForeignKey
ALTER TABLE "_PessoaToTelefone" ADD CONSTRAINT "_PessoaToTelefone_A_fkey" FOREIGN KEY ("A") REFERENCES "Pessoa"("idPessoa") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PessoaToTelefone" ADD CONSTRAINT "_PessoaToTelefone_B_fkey" FOREIGN KEY ("B") REFERENCES "Telefone"("idTelefone") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PessoaToVeiculo" ADD CONSTRAINT "_PessoaToVeiculo_A_fkey" FOREIGN KEY ("A") REFERENCES "Pessoa"("idPessoa") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PessoaToVeiculo" ADD CONSTRAINT "_PessoaToVeiculo_B_fkey" FOREIGN KEY ("B") REFERENCES "Veiculo"("idVeiculo") ON DELETE CASCADE ON UPDATE CASCADE;
