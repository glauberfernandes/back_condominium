-- CreateTable
CREATE TABLE "Tipo_Ccorrencia" (
    "idTipoOcorrencia" SERIAL NOT NULL,
    "descTipoOcorrencia" VARCHAR(255) NOT NULL,

    CONSTRAINT "Tipo_Ccorrencia_pkey" PRIMARY KEY ("idTipoOcorrencia")
);

-- CreateTable
CREATE TABLE "Status_Ocorrencia" (
    "idStatusOcorrencia" SERIAL NOT NULL,
    "descStatusOcorrencia" VARCHAR(255) NOT NULL,

    CONSTRAINT "Status_Ocorrencia_pkey" PRIMARY KEY ("idStatusOcorrencia")
);
