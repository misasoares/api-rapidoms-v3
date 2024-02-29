/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `car_models` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "car_models_name_key" ON "car_models"("name");
