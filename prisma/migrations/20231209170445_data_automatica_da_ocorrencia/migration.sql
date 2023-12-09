/*
  Warnings:

  - You are about to drop the column `dtCadastro` on the `Pessoa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "dtCadastro";

-- AlterTable
ALTER TABLE "TipoPessoa" ADD COLUMN     "dtCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
