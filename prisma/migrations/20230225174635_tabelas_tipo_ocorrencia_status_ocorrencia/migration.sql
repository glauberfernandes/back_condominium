/*
  Warnings:

  - You are about to drop the `_PessoaToTelefone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PessoaToVeiculo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `telefoneID` to the `Pessoa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `veiculoId` to the `Pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_PessoaToTelefone" DROP CONSTRAINT "_PessoaToTelefone_A_fkey";

-- DropForeignKey
ALTER TABLE "_PessoaToTelefone" DROP CONSTRAINT "_PessoaToTelefone_B_fkey";

-- DropForeignKey
ALTER TABLE "_PessoaToVeiculo" DROP CONSTRAINT "_PessoaToVeiculo_A_fkey";

-- DropForeignKey
ALTER TABLE "_PessoaToVeiculo" DROP CONSTRAINT "_PessoaToVeiculo_B_fkey";

-- AlterTable
ALTER TABLE "Pessoa" ADD COLUMN     "telefoneID" INTEGER NOT NULL,
ADD COLUMN     "veiculoId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_PessoaToTelefone";

-- DropTable
DROP TABLE "_PessoaToVeiculo";

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_telefoneID_fkey" FOREIGN KEY ("telefoneID") REFERENCES "Telefone"("idTelefone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "Veiculo"("idVeiculo") ON DELETE RESTRICT ON UPDATE CASCADE;
