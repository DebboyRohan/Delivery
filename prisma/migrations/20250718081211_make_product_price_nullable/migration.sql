-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_variantId_fkey";

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "variantId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "price" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
