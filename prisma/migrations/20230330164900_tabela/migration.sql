/*
  Warnings:

  - You are about to drop the column `nomePessoa` on the `TipoPessoa` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nomeTipo]` on the table `TipoPessoa` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nomeTipo` to the `TipoPessoa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_enderecoId_fkey";

-- DropIndex
DROP INDEX "TipoPessoa_nomePessoa_key";

-- AlterTable
ALTER TABLE "Pessoa" ALTER COLUMN "enderecoId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TipoPessoa" DROP COLUMN "nomePessoa",
ADD COLUMN     "nomeTipo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TipoPessoa_nomeTipo_key" ON "TipoPessoa"("nomeTipo");

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("idEndereco") ON DELETE SET NULL ON UPDATE CASCADE;
