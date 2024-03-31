-- CreateTable
CREATE TABLE "users" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "admin" BOOLEAN DEFAULT false,
    "document" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "car_brands" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "car_brands_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "car_models" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "yearFabrication" INTEGER NOT NULL,
    "carBrandUid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "car_models_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "products" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "orders" (
    "uid" TEXT NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "total_value" DECIMAL(65,30) NOT NULL,
    "userUid" TEXT NOT NULL,
    "carModelUid" TEXT NOT NULL,
    "productUid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "check_register" (
    "uid" TEXT NOT NULL,
    "payerName" TEXT NOT NULL,
    "checkNumber" TEXT NOT NULL,
    "payerPhone" TEXT,
    "sendTo" TEXT,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "value" TEXT NOT NULL,
    "accBankUid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "banksUid" TEXT NOT NULL,

    CONSTRAINT "check_register_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "banks" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "accNumber" TEXT NOT NULL,
    "agencyNumber" TEXT NOT NULL,
    "accountBankUid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "banks_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "account_bank" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "account_bank_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "_CarModelToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_document_key" ON "users"("document");

-- CreateIndex
CREATE UNIQUE INDEX "car_brands_name_key" ON "car_brands"("name");

-- CreateIndex
CREATE UNIQUE INDEX "car_models_name_key" ON "car_models"("name");

-- CreateIndex
CREATE UNIQUE INDEX "check_register_checkNumber_key" ON "check_register"("checkNumber");

-- CreateIndex
CREATE UNIQUE INDEX "banks_name_key" ON "banks"("name");

-- CreateIndex
CREATE UNIQUE INDEX "banks_accNumber_key" ON "banks"("accNumber");

-- CreateIndex
CREATE UNIQUE INDEX "account_bank_name_key" ON "account_bank"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CarModelToProduct_AB_unique" ON "_CarModelToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CarModelToProduct_B_index" ON "_CarModelToProduct"("B");

-- AddForeignKey
ALTER TABLE "car_models" ADD CONSTRAINT "car_models_carBrandUid_fkey" FOREIGN KEY ("carBrandUid") REFERENCES "car_brands"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_carModelUid_fkey" FOREIGN KEY ("carModelUid") REFERENCES "car_models"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_productUid_fkey" FOREIGN KEY ("productUid") REFERENCES "products"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_register" ADD CONSTRAINT "check_register_banksUid_fkey" FOREIGN KEY ("banksUid") REFERENCES "banks"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_register" ADD CONSTRAINT "check_register_accBankUid_fkey" FOREIGN KEY ("accBankUid") REFERENCES "account_bank"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "banks" ADD CONSTRAINT "banks_accountBankUid_fkey" FOREIGN KEY ("accountBankUid") REFERENCES "account_bank"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarModelToProduct" ADD CONSTRAINT "_CarModelToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "car_models"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarModelToProduct" ADD CONSTRAINT "_CarModelToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
