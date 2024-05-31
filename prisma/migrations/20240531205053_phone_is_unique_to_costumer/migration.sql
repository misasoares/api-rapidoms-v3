/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Costumer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Costumer_phone_key" ON "Costumer"("phone");
