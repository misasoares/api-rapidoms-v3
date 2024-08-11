/*
  Warnings:

  - You are about to drop the `Costumer` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "internal_order" DROP CONSTRAINT "internal_order_costumerUid_fkey";

-- AlterTable
ALTER TABLE "internal_order" ADD COLUMN     "userUid" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "address" TEXT,
ADD COLUMN     "cpfOrCnpj" TEXT,
ADD COLUMN     "phone" TEXT NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- DropTable
DROP TABLE "Costumer";

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- AddForeignKey
ALTER TABLE "internal_order" ADD CONSTRAINT "internal_order_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "users"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
