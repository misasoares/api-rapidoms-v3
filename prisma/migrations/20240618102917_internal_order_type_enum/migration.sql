/*
  Warnings:

  - Changed the type of `type` on the `internal_order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "EInternalOrderType" AS ENUM ('BUDGET', 'ORDER', 'RECEIPT');

-- AlterTable
ALTER TABLE "internal_order" DROP COLUMN "type",
ADD COLUMN     "type" "EInternalOrderType" NOT NULL;
