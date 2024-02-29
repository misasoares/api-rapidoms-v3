/*
  Warnings:

  - Changed the type of `yearFabrication` on the `car_models` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "car_models" DROP COLUMN "yearFabrication",
ADD COLUMN     "yearFabrication" INTEGER NOT NULL;
