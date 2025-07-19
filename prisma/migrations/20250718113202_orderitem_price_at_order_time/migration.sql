/*
  Warnings:

  - Added the required column `totalPrice` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPrice` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "totalPrice" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "totalPrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "unitPrice" DECIMAL(65,30) NOT NULL;
