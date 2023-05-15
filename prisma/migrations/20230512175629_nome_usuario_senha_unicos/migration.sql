/*
  Warnings:

  - A unique constraint covering the columns `[nomeUsuario]` on the table `Login` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[senha]` on the table `Login` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Login_nomeUsuario_key" ON "Login"("nomeUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "Login_senha_key" ON "Login"("senha");
