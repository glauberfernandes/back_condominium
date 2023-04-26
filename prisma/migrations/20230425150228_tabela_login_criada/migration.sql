-- CreateTable
CREATE TABLE "Login" (
    "idLogin" SERIAL NOT NULL,
    "nomeUsuario" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "exp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("idLogin")
);
