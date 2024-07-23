-- CreateTable
CREATE TABLE "_InternalOrderToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_InternalOrderToProduct_AB_unique" ON "_InternalOrderToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_InternalOrderToProduct_B_index" ON "_InternalOrderToProduct"("B");

-- AddForeignKey
ALTER TABLE "_InternalOrderToProduct" ADD CONSTRAINT "_InternalOrderToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "internal_order"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InternalOrderToProduct" ADD CONSTRAINT "_InternalOrderToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
