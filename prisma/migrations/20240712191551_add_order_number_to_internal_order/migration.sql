/*
  Warnings:

  - Added the required column `orderNumber` to the `internal_order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "internal_order" ADD COLUMN     "orderNumber" TEXT NOT NULL;
