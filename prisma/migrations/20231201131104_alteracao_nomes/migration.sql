/*
  Warnings:

  - You are about to drop the column `idPessoa` on the `Destino` table. All the data in the column will be lost.
  - Added the required column `pessoaId` to the `Destino` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Destino" DROP CONSTRAINT "Destino_idPessoa_fkey";

-- AlterTable
ALTER TABLE "Destino" DROP COLUMN "idPessoa",
ADD COLUMN     "pessoaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Destino" ADD CONSTRAINT "Destino_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("idPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;
