-- CreateTable
CREATE TABLE "internal_order" (
    "uid" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "costumer" TEXT NOT NULL,
    "phone" TEXT,
    "address" TEXT,
    "vehicles" TEXT,
    "totalValue" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "internal_order_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "products_internal_order" (
    "uid" TEXT NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "unityValue" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "internalOrderUid" TEXT,

    CONSTRAINT "products_internal_order_pkey" PRIMARY KEY ("uid")
);

-- AddForeignKey
ALTER TABLE "products_internal_order" ADD CONSTRAINT "products_internal_order_internalOrderUid_fkey" FOREIGN KEY ("internalOrderUid") REFERENCES "internal_order"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
