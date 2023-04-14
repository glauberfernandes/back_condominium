/*
  Warnings:

  - Added the required column `DDD` to the `Telefone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Telefone" ADD COLUMN     "DDD" INTEGER NOT NULL;
