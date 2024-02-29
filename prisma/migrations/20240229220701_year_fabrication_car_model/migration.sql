/*
  Warnings:

  - Added the required column `yearFabrication` to the `car_models` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "car_models" ADD COLUMN     "yearFabrication" TEXT NOT NULL;
