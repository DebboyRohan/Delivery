
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.12.0
 * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
 */
Prisma.prismaVersion = {
  client: "6.12.0",
  engine: "8047c96bbd92db98a2abc7c9323ce77c02c89dbc"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  clerkId: 'clerkId',
  name: 'name',
  email: 'email',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FinanceExpenseScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  createdById: 'createdById',
  type: 'type',
  description: 'description',
  value: 'value',
  productId: 'productId',
  variantId: 'variantId',
  quantity: 'quantity'
};

exports.Prisma.InventoryScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  variantId: 'variantId',
  quantityAdded: 'quantityAdded',
  costPerUnit: 'costPerUnit',
  dealer: 'dealer',
  dateReceived: 'dateReceived',
  createdById: 'createdById',
  createdAt: 'createdAt'
};

exports.Prisma.RemainingInventoryScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  variantId: 'variantId',
  quantity: 'quantity',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  userName: 'userName',
  phone: 'phone',
  alternatePhone: 'alternatePhone',
  roll: 'roll',
  hall: 'hall',
  deliveryDate: 'deliveryDate',
  totalAmount: 'totalAmount',
  totalPaid: 'totalPaid',
  totalDiscount: 'totalDiscount',
  additionalInfo: 'additionalInfo',
  deliveryStatus: 'deliveryStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  referalId: 'referalId'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  productId: 'productId',
  variantId: 'variantId',
  quantity: 'quantity',
  unitPrice: 'unitPrice',
  totalPrice: 'totalPrice',
  amountPaid: 'amountPaid',
  discount: 'discount',
  deliveryStatus: 'deliveryStatus'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VariantScalarFieldEnum = {
  id: 'id',
  name: 'name',
  variantPrice: 'variantPrice',
  productId: 'productId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  admin: 'admin',
  sales: 'sales',
  delivery: 'delivery',
  treasurer: 'treasurer'
};

exports.FinanceExpenseType = exports.$Enums.FinanceExpenseType = {
  PURCHASE: 'PURCHASE',
  GENERAL: 'GENERAL'
};

exports.Hall = exports.$Enums.Hall = {
  ABV: 'ABV',
  Azad: 'Azad',
  BCRoy: 'BCRoy',
  BRH: 'BRH',
  Gokhale: 'Gokhale',
  HJB: 'HJB',
  JCB: 'JCB',
  Nehru: 'Nehru',
  LBS: 'LBS',
  LLR: 'LLR',
  MMM: 'MMM',
  MS: 'MS',
  MT: 'MT',
  SNVH: 'SNVH',
  PDFBlock: 'PDFBlock',
  Patel: 'Patel',
  RK: 'RK',
  RaniLaxmiBai: 'RaniLaxmiBai',
  RP: 'RP',
  SAM: 'SAM',
  SBP1: 'SBP1',
  SBP2: 'SBP2',
  SNIG: 'SNIG',
  VSRC1: 'VSRC1',
  VSRC2: 'VSRC2',
  VidyaSagar: 'VidyaSagar',
  ZakirHussain: 'ZakirHussain',
  Radar: 'Radar'
};

exports.DeliveryStatus = exports.$Enums.DeliveryStatus = {
  PENDING: 'PENDING',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

exports.Prisma.ModelName = {
  User: 'User',
  FinanceExpense: 'FinanceExpense',
  Inventory: 'Inventory',
  RemainingInventory: 'RemainingInventory',
  Order: 'Order',
  OrderItem: 'OrderItem',
  Product: 'Product',
  Variant: 'Variant'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
