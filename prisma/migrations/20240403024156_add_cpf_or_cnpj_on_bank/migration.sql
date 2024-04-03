/*
  Warnings:

  - Added the required column `cpfOrCnpj` to the `banks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "banks" ADD COLUMN     "cpfOrCnpj" TEXT NOT NULL;
