-- CreateTable
CREATE TABLE "check_payers" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,

    CONSTRAINT "check_payers_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "check_payers_name_key" ON "check_payers"("name");
