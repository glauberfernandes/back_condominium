/*
  Warnings:

  - Added the required column `idPessoa` to the `Destino` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Destino" DROP CONSTRAINT "Destino_idDestino_fkey";

-- AlterTable
ALTER TABLE "Destino" ADD COLUMN     "idPessoa" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Destino" ADD CONSTRAINT "Destino_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa"("idPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;
