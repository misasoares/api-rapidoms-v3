/*
  Warnings:

  - Added the required column `amper` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "amper" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
