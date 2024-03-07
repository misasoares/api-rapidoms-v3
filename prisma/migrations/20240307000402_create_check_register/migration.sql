-- CreateTable
CREATE TABLE "check_register" (
    "uid" TEXT NOT NULL,
    "accName" TEXT NOT NULL,
    "bank" TEXT NOT NULL,
    "accNumber" TEXT NOT NULL,
    "agencyNumber" TEXT NOT NULL,
    "payerName" TEXT NOT NULL,
    "checkNumber" TEXT NOT NULL,
    "payerPhone" TEXT NOT NULL,
    "sendTo" TEXT,
    "dueDate" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "check_register_pkey" PRIMARY KEY ("uid")
);
