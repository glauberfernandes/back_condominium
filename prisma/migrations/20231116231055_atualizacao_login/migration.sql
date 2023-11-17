/*
  Warnings:

  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Login" ADD COLUMN     "role" TEXT,
ALTER COLUMN "exp" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Usuario";
