/*
  Warnings:

  - Added the required column `status` to the `internal_order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EInternalOrderStatus" AS ENUM ('IN_PROGRESS', 'CONCLUDED');

-- AlterTable
ALTER TABLE "internal_order" ADD COLUMN     "status" "EInternalOrderStatus" NOT NULL;
