-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_variantId_fkey";

-- AlterTable
ALTER TABLE "Inventory" ALTER COLUMN "variantId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
