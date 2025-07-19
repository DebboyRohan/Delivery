/*
  Warnings:

  - You are about to drop the column `amountRecieved` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Order` table. All the data in the column will be lost.
  - Added the required column `totalAmount` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPaid` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amountPaid` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "amountRecieved",
DROP COLUMN "discount",
DROP COLUMN "totalPrice",
ADD COLUMN     "totalAmount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "totalDiscount" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "totalPaid" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "amountPaid" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "discount" DECIMAL(65,30) NOT NULL DEFAULT 0;
