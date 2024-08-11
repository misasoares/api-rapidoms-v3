/*
  Warnings:

  - Added the required column `cca` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warranty` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "cca" INTEGER NOT NULL,
ADD COLUMN     "warranty" INTEGER NOT NULL;
