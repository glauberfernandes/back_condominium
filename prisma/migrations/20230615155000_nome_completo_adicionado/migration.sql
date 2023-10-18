/*
  Warnings:

  - Added the required column `nomeCompleto` to the `Login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Login" ADD COLUMN     "nomeCompleto" TEXT NOT NULL;
