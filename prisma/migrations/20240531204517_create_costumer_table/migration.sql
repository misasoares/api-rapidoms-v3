/*
  Warnings:

  - You are about to drop the column `address` on the `internal_order` table. All the data in the column will be lost.
  - You are about to drop the column `costumer` on the `internal_order` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `internal_order` table. All the data in the column will be lost.
  - Added the required column `costumerUid` to the `internal_order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "internal_order" DROP COLUMN "address",
DROP COLUMN "costumer",
DROP COLUMN "phone",
ADD COLUMN     "costumerUid" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Costumer" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpfOrCnpj" TEXT,
    "address" TEXT,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Costumer_pkey" PRIMARY KEY ("uid")
);

-- AddForeignKey
ALTER TABLE "internal_order" ADD CONSTRAINT "internal_order_costumerUid_fkey" FOREIGN KEY ("costumerUid") REFERENCES "Costumer"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
