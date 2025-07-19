
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FinanceExpense
 * 
 */
export type FinanceExpense = $Result.DefaultSelection<Prisma.$FinanceExpensePayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Variant
 * 
 */
export type Variant = $Result.DefaultSelection<Prisma.$VariantPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  sales: 'sales',
  delivery: 'delivery',
  treasurer: 'treasurer'
};

export type Role = (typeof Role)[keyof typeof Role]


export const DeliveryStatus: {
  PENDING: 'PENDING',
  OUT_FOR_DELIVERY: 'OUT_FOR_DELIVERY',
  NOT_AVAILABLE: 'NOT_AVAILABLE',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus]


export const FinanceExpenseType: {
  PURCHASE: 'PURCHASE',
  GENERAL: 'GENERAL'
};

export type FinanceExpenseType = (typeof FinanceExpenseType)[keyof typeof FinanceExpenseType]


export const Hall: {
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

export type Hall = (typeof Hall)[keyof typeof Hall]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type DeliveryStatus = $Enums.DeliveryStatus

export const DeliveryStatus: typeof $Enums.DeliveryStatus

export type FinanceExpenseType = $Enums.FinanceExpenseType

export const FinanceExpenseType: typeof $Enums.FinanceExpenseType

export type Hall = $Enums.Hall

export const Hall: typeof $Enums.Hall

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financeExpense`: Exposes CRUD operations for the **FinanceExpense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinanceExpenses
    * const financeExpenses = await prisma.financeExpense.findMany()
    * ```
    */
  get financeExpense(): Prisma.FinanceExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variant`: Exposes CRUD operations for the **Variant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variant.findMany()
    * ```
    */
  get variant(): Prisma.VariantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    FinanceExpense: 'FinanceExpense',
    Inventory: 'Inventory',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Product: 'Product',
    Variant: 'Variant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "financeExpense" | "inventory" | "order" | "orderItem" | "product" | "variant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FinanceExpense: {
        payload: Prisma.$FinanceExpensePayload<ExtArgs>
        fields: Prisma.FinanceExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceExpensePayload>
          }
          findFirst: {
            args: Prisma.FinanceExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceExpensePayload>
          }
          findMany: {
            args: Prisma.FinanceExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceExpensePayload>[]
          }
          create: {
            args: Prisma.FinanceExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceExpensePayload>
          }
          createMany: {
            args: Prisma.FinanceExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinanceExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceExpensePayload>[]
          }
          delete: {
            args: Prisma.FinanceExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceExpensePayload>
          }
          update: {
            args: Prisma.FinanceExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceExpensePayload>
          }
          deleteMany: {
            args: Prisma.FinanceExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinanceExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceExpensePayload>[]
          }
          upsert: {
            args: Prisma.FinanceExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceExpensePayload>
          }
          aggregate: {
            args: Prisma.FinanceExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinanceExpense>
          }
          groupBy: {
            args: Prisma.FinanceExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceExpenseCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Variant: {
        payload: Prisma.$VariantPayload<ExtArgs>
        fields: Prisma.VariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findFirst: {
            args: Prisma.VariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findMany: {
            args: Prisma.VariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          create: {
            args: Prisma.VariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          createMany: {
            args: Prisma.VariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          delete: {
            args: Prisma.VariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          update: {
            args: Prisma.VariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          deleteMany: {
            args: Prisma.VariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          upsert: {
            args: Prisma.VariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          aggregate: {
            args: Prisma.VariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariant>
          }
          groupBy: {
            args: Prisma.VariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantCountArgs<ExtArgs>
            result: $Utils.Optional<VariantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    financeExpense?: FinanceExpenseOmit
    inventory?: InventoryOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    product?: ProductOmit
    variant?: VariantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    FinanceExpense: number
    Inventory: number
    Order: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinanceExpense?: boolean | UserCountOutputTypeCountFinanceExpenseArgs
    Inventory?: boolean | UserCountOutputTypeCountInventoryArgs
    Order?: boolean | UserCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinanceExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    OrderItem: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItem?: boolean | OrderCountOutputTypeCountOrderItemArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    FinanceExpense: number
    Inventory: number
    OrderItem: number
    Variant: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinanceExpense?: boolean | ProductCountOutputTypeCountFinanceExpenseArgs
    Inventory?: boolean | ProductCountOutputTypeCountInventoryArgs
    OrderItem?: boolean | ProductCountOutputTypeCountOrderItemArgs
    Variant?: boolean | ProductCountOutputTypeCountVariantArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountFinanceExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceExpenseWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
  }


  /**
   * Count Type VariantCountOutputType
   */

  export type VariantCountOutputType = {
    FinanceExpense: number
    Inventory: number
    OrderItem: number
  }

  export type VariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinanceExpense?: boolean | VariantCountOutputTypeCountFinanceExpenseArgs
    Inventory?: boolean | VariantCountOutputTypeCountInventoryArgs
    OrderItem?: boolean | VariantCountOutputTypeCountOrderItemArgs
  }

  // Custom InputTypes
  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantCountOutputType
     */
    select?: VariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeCountFinanceExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceExpenseWhereInput
  }

  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    name: number
    email: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    name: string
    email: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FinanceExpense?: boolean | User$FinanceExpenseArgs<ExtArgs>
    Inventory?: boolean | User$InventoryArgs<ExtArgs>
    Order?: boolean | User$OrderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "name" | "email" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinanceExpense?: boolean | User$FinanceExpenseArgs<ExtArgs>
    Inventory?: boolean | User$InventoryArgs<ExtArgs>
    Order?: boolean | User$OrderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      FinanceExpense: Prisma.$FinanceExpensePayload<ExtArgs>[]
      Inventory: Prisma.$InventoryPayload<ExtArgs>[]
      Order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      name: string
      email: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FinanceExpense<T extends User$FinanceExpenseArgs<ExtArgs> = {}>(args?: Subset<T, User$FinanceExpenseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Inventory<T extends User$InventoryArgs<ExtArgs> = {}>(args?: Subset<T, User$InventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Order<T extends User$OrderArgs<ExtArgs> = {}>(args?: Subset<T, User$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.FinanceExpense
   */
  export type User$FinanceExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
    where?: FinanceExpenseWhereInput
    orderBy?: FinanceExpenseOrderByWithRelationInput | FinanceExpenseOrderByWithRelationInput[]
    cursor?: FinanceExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceExpenseScalarFieldEnum | FinanceExpenseScalarFieldEnum[]
  }

  /**
   * User.Inventory
   */
  export type User$InventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * User.Order
   */
  export type User$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model FinanceExpense
   */

  export type AggregateFinanceExpense = {
    _count: FinanceExpenseCountAggregateOutputType | null
    _avg: FinanceExpenseAvgAggregateOutputType | null
    _sum: FinanceExpenseSumAggregateOutputType | null
    _min: FinanceExpenseMinAggregateOutputType | null
    _max: FinanceExpenseMaxAggregateOutputType | null
  }

  export type FinanceExpenseAvgAggregateOutputType = {
    value: Decimal | null
    quantity: number | null
  }

  export type FinanceExpenseSumAggregateOutputType = {
    value: Decimal | null
    quantity: number | null
  }

  export type FinanceExpenseMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdById: string | null
    type: $Enums.FinanceExpenseType | null
    description: string | null
    value: Decimal | null
    productId: string | null
    variantId: string | null
    quantity: number | null
  }

  export type FinanceExpenseMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdById: string | null
    type: $Enums.FinanceExpenseType | null
    description: string | null
    value: Decimal | null
    productId: string | null
    variantId: string | null
    quantity: number | null
  }

  export type FinanceExpenseCountAggregateOutputType = {
    id: number
    createdAt: number
    createdById: number
    type: number
    description: number
    value: number
    productId: number
    variantId: number
    quantity: number
    _all: number
  }


  export type FinanceExpenseAvgAggregateInputType = {
    value?: true
    quantity?: true
  }

  export type FinanceExpenseSumAggregateInputType = {
    value?: true
    quantity?: true
  }

  export type FinanceExpenseMinAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    type?: true
    description?: true
    value?: true
    productId?: true
    variantId?: true
    quantity?: true
  }

  export type FinanceExpenseMaxAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    type?: true
    description?: true
    value?: true
    productId?: true
    variantId?: true
    quantity?: true
  }

  export type FinanceExpenseCountAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    type?: true
    description?: true
    value?: true
    productId?: true
    variantId?: true
    quantity?: true
    _all?: true
  }

  export type FinanceExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceExpense to aggregate.
     */
    where?: FinanceExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceExpenses to fetch.
     */
    orderBy?: FinanceExpenseOrderByWithRelationInput | FinanceExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinanceExpenses
    **/
    _count?: true | FinanceExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinanceExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinanceExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceExpenseMaxAggregateInputType
  }

  export type GetFinanceExpenseAggregateType<T extends FinanceExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateFinanceExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinanceExpense[P]>
      : GetScalarType<T[P], AggregateFinanceExpense[P]>
  }




  export type FinanceExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceExpenseWhereInput
    orderBy?: FinanceExpenseOrderByWithAggregationInput | FinanceExpenseOrderByWithAggregationInput[]
    by: FinanceExpenseScalarFieldEnum[] | FinanceExpenseScalarFieldEnum
    having?: FinanceExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceExpenseCountAggregateInputType | true
    _avg?: FinanceExpenseAvgAggregateInputType
    _sum?: FinanceExpenseSumAggregateInputType
    _min?: FinanceExpenseMinAggregateInputType
    _max?: FinanceExpenseMaxAggregateInputType
  }

  export type FinanceExpenseGroupByOutputType = {
    id: string
    createdAt: Date
    createdById: string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal
    productId: string | null
    variantId: string | null
    quantity: number | null
    _count: FinanceExpenseCountAggregateOutputType | null
    _avg: FinanceExpenseAvgAggregateOutputType | null
    _sum: FinanceExpenseSumAggregateOutputType | null
    _min: FinanceExpenseMinAggregateOutputType | null
    _max: FinanceExpenseMaxAggregateOutputType | null
  }

  type GetFinanceExpenseGroupByPayload<T extends FinanceExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceExpenseGroupByOutputType[P]>
        }
      >
    >


  export type FinanceExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    createdById?: boolean
    type?: boolean
    description?: boolean
    value?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | FinanceExpense$ProductArgs<ExtArgs>
    Variant?: boolean | FinanceExpense$VariantArgs<ExtArgs>
  }, ExtArgs["result"]["financeExpense"]>

  export type FinanceExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    createdById?: boolean
    type?: boolean
    description?: boolean
    value?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | FinanceExpense$ProductArgs<ExtArgs>
    Variant?: boolean | FinanceExpense$VariantArgs<ExtArgs>
  }, ExtArgs["result"]["financeExpense"]>

  export type FinanceExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    createdById?: boolean
    type?: boolean
    description?: boolean
    value?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | FinanceExpense$ProductArgs<ExtArgs>
    Variant?: boolean | FinanceExpense$VariantArgs<ExtArgs>
  }, ExtArgs["result"]["financeExpense"]>

  export type FinanceExpenseSelectScalar = {
    id?: boolean
    createdAt?: boolean
    createdById?: boolean
    type?: boolean
    description?: boolean
    value?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
  }

  export type FinanceExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "createdById" | "type" | "description" | "value" | "productId" | "variantId" | "quantity", ExtArgs["result"]["financeExpense"]>
  export type FinanceExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | FinanceExpense$ProductArgs<ExtArgs>
    Variant?: boolean | FinanceExpense$VariantArgs<ExtArgs>
  }
  export type FinanceExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | FinanceExpense$ProductArgs<ExtArgs>
    Variant?: boolean | FinanceExpense$VariantArgs<ExtArgs>
  }
  export type FinanceExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | FinanceExpense$ProductArgs<ExtArgs>
    Variant?: boolean | FinanceExpense$VariantArgs<ExtArgs>
  }

  export type $FinanceExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinanceExpense"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs> | null
      Variant: Prisma.$VariantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      createdById: string
      type: $Enums.FinanceExpenseType
      description: string
      value: Prisma.Decimal
      productId: string | null
      variantId: string | null
      quantity: number | null
    }, ExtArgs["result"]["financeExpense"]>
    composites: {}
  }

  type FinanceExpenseGetPayload<S extends boolean | null | undefined | FinanceExpenseDefaultArgs> = $Result.GetResult<Prisma.$FinanceExpensePayload, S>

  type FinanceExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinanceExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinanceExpenseCountAggregateInputType | true
    }

  export interface FinanceExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinanceExpense'], meta: { name: 'FinanceExpense' } }
    /**
     * Find zero or one FinanceExpense that matches the filter.
     * @param {FinanceExpenseFindUniqueArgs} args - Arguments to find a FinanceExpense
     * @example
     * // Get one FinanceExpense
     * const financeExpense = await prisma.financeExpense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceExpenseFindUniqueArgs>(args: SelectSubset<T, FinanceExpenseFindUniqueArgs<ExtArgs>>): Prisma__FinanceExpenseClient<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinanceExpense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinanceExpenseFindUniqueOrThrowArgs} args - Arguments to find a FinanceExpense
     * @example
     * // Get one FinanceExpense
     * const financeExpense = await prisma.financeExpense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceExpenseClient<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinanceExpense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceExpenseFindFirstArgs} args - Arguments to find a FinanceExpense
     * @example
     * // Get one FinanceExpense
     * const financeExpense = await prisma.financeExpense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceExpenseFindFirstArgs>(args?: SelectSubset<T, FinanceExpenseFindFirstArgs<ExtArgs>>): Prisma__FinanceExpenseClient<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinanceExpense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceExpenseFindFirstOrThrowArgs} args - Arguments to find a FinanceExpense
     * @example
     * // Get one FinanceExpense
     * const financeExpense = await prisma.financeExpense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceExpenseClient<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinanceExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinanceExpenses
     * const financeExpenses = await prisma.financeExpense.findMany()
     * 
     * // Get first 10 FinanceExpenses
     * const financeExpenses = await prisma.financeExpense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeExpenseWithIdOnly = await prisma.financeExpense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinanceExpenseFindManyArgs>(args?: SelectSubset<T, FinanceExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinanceExpense.
     * @param {FinanceExpenseCreateArgs} args - Arguments to create a FinanceExpense.
     * @example
     * // Create one FinanceExpense
     * const FinanceExpense = await prisma.financeExpense.create({
     *   data: {
     *     // ... data to create a FinanceExpense
     *   }
     * })
     * 
     */
    create<T extends FinanceExpenseCreateArgs>(args: SelectSubset<T, FinanceExpenseCreateArgs<ExtArgs>>): Prisma__FinanceExpenseClient<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinanceExpenses.
     * @param {FinanceExpenseCreateManyArgs} args - Arguments to create many FinanceExpenses.
     * @example
     * // Create many FinanceExpenses
     * const financeExpense = await prisma.financeExpense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceExpenseCreateManyArgs>(args?: SelectSubset<T, FinanceExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinanceExpenses and returns the data saved in the database.
     * @param {FinanceExpenseCreateManyAndReturnArgs} args - Arguments to create many FinanceExpenses.
     * @example
     * // Create many FinanceExpenses
     * const financeExpense = await prisma.financeExpense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinanceExpenses and only return the `id`
     * const financeExpenseWithIdOnly = await prisma.financeExpense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinanceExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, FinanceExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinanceExpense.
     * @param {FinanceExpenseDeleteArgs} args - Arguments to delete one FinanceExpense.
     * @example
     * // Delete one FinanceExpense
     * const FinanceExpense = await prisma.financeExpense.delete({
     *   where: {
     *     // ... filter to delete one FinanceExpense
     *   }
     * })
     * 
     */
    delete<T extends FinanceExpenseDeleteArgs>(args: SelectSubset<T, FinanceExpenseDeleteArgs<ExtArgs>>): Prisma__FinanceExpenseClient<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinanceExpense.
     * @param {FinanceExpenseUpdateArgs} args - Arguments to update one FinanceExpense.
     * @example
     * // Update one FinanceExpense
     * const financeExpense = await prisma.financeExpense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceExpenseUpdateArgs>(args: SelectSubset<T, FinanceExpenseUpdateArgs<ExtArgs>>): Prisma__FinanceExpenseClient<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinanceExpenses.
     * @param {FinanceExpenseDeleteManyArgs} args - Arguments to filter FinanceExpenses to delete.
     * @example
     * // Delete a few FinanceExpenses
     * const { count } = await prisma.financeExpense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceExpenseDeleteManyArgs>(args?: SelectSubset<T, FinanceExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinanceExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinanceExpenses
     * const financeExpense = await prisma.financeExpense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceExpenseUpdateManyArgs>(args: SelectSubset<T, FinanceExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinanceExpenses and returns the data updated in the database.
     * @param {FinanceExpenseUpdateManyAndReturnArgs} args - Arguments to update many FinanceExpenses.
     * @example
     * // Update many FinanceExpenses
     * const financeExpense = await prisma.financeExpense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinanceExpenses and only return the `id`
     * const financeExpenseWithIdOnly = await prisma.financeExpense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinanceExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, FinanceExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinanceExpense.
     * @param {FinanceExpenseUpsertArgs} args - Arguments to update or create a FinanceExpense.
     * @example
     * // Update or create a FinanceExpense
     * const financeExpense = await prisma.financeExpense.upsert({
     *   create: {
     *     // ... data to create a FinanceExpense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinanceExpense we want to update
     *   }
     * })
     */
    upsert<T extends FinanceExpenseUpsertArgs>(args: SelectSubset<T, FinanceExpenseUpsertArgs<ExtArgs>>): Prisma__FinanceExpenseClient<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinanceExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceExpenseCountArgs} args - Arguments to filter FinanceExpenses to count.
     * @example
     * // Count the number of FinanceExpenses
     * const count = await prisma.financeExpense.count({
     *   where: {
     *     // ... the filter for the FinanceExpenses we want to count
     *   }
     * })
    **/
    count<T extends FinanceExpenseCountArgs>(
      args?: Subset<T, FinanceExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinanceExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinanceExpenseAggregateArgs>(args: Subset<T, FinanceExpenseAggregateArgs>): Prisma.PrismaPromise<GetFinanceExpenseAggregateType<T>>

    /**
     * Group by FinanceExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinanceExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceExpenseGroupByArgs['orderBy'] }
        : { orderBy?: FinanceExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinanceExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinanceExpense model
   */
  readonly fields: FinanceExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinanceExpense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Product<T extends FinanceExpense$ProductArgs<ExtArgs> = {}>(args?: Subset<T, FinanceExpense$ProductArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Variant<T extends FinanceExpense$VariantArgs<ExtArgs> = {}>(args?: Subset<T, FinanceExpense$VariantArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinanceExpense model
   */
  interface FinanceExpenseFieldRefs {
    readonly id: FieldRef<"FinanceExpense", 'String'>
    readonly createdAt: FieldRef<"FinanceExpense", 'DateTime'>
    readonly createdById: FieldRef<"FinanceExpense", 'String'>
    readonly type: FieldRef<"FinanceExpense", 'FinanceExpenseType'>
    readonly description: FieldRef<"FinanceExpense", 'String'>
    readonly value: FieldRef<"FinanceExpense", 'Decimal'>
    readonly productId: FieldRef<"FinanceExpense", 'String'>
    readonly variantId: FieldRef<"FinanceExpense", 'String'>
    readonly quantity: FieldRef<"FinanceExpense", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FinanceExpense findUnique
   */
  export type FinanceExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
    /**
     * Filter, which FinanceExpense to fetch.
     */
    where: FinanceExpenseWhereUniqueInput
  }

  /**
   * FinanceExpense findUniqueOrThrow
   */
  export type FinanceExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
    /**
     * Filter, which FinanceExpense to fetch.
     */
    where: FinanceExpenseWhereUniqueInput
  }

  /**
   * FinanceExpense findFirst
   */
  export type FinanceExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
    /**
     * Filter, which FinanceExpense to fetch.
     */
    where?: FinanceExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceExpenses to fetch.
     */
    orderBy?: FinanceExpenseOrderByWithRelationInput | FinanceExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceExpenses.
     */
    cursor?: FinanceExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceExpenses.
     */
    distinct?: FinanceExpenseScalarFieldEnum | FinanceExpenseScalarFieldEnum[]
  }

  /**
   * FinanceExpense findFirstOrThrow
   */
  export type FinanceExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
    /**
     * Filter, which FinanceExpense to fetch.
     */
    where?: FinanceExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceExpenses to fetch.
     */
    orderBy?: FinanceExpenseOrderByWithRelationInput | FinanceExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceExpenses.
     */
    cursor?: FinanceExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceExpenses.
     */
    distinct?: FinanceExpenseScalarFieldEnum | FinanceExpenseScalarFieldEnum[]
  }

  /**
   * FinanceExpense findMany
   */
  export type FinanceExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
    /**
     * Filter, which FinanceExpenses to fetch.
     */
    where?: FinanceExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceExpenses to fetch.
     */
    orderBy?: FinanceExpenseOrderByWithRelationInput | FinanceExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinanceExpenses.
     */
    cursor?: FinanceExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceExpenses.
     */
    skip?: number
    distinct?: FinanceExpenseScalarFieldEnum | FinanceExpenseScalarFieldEnum[]
  }

  /**
   * FinanceExpense create
   */
  export type FinanceExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a FinanceExpense.
     */
    data: XOR<FinanceExpenseCreateInput, FinanceExpenseUncheckedCreateInput>
  }

  /**
   * FinanceExpense createMany
   */
  export type FinanceExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinanceExpenses.
     */
    data: FinanceExpenseCreateManyInput | FinanceExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinanceExpense createManyAndReturn
   */
  export type FinanceExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many FinanceExpenses.
     */
    data: FinanceExpenseCreateManyInput | FinanceExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinanceExpense update
   */
  export type FinanceExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a FinanceExpense.
     */
    data: XOR<FinanceExpenseUpdateInput, FinanceExpenseUncheckedUpdateInput>
    /**
     * Choose, which FinanceExpense to update.
     */
    where: FinanceExpenseWhereUniqueInput
  }

  /**
   * FinanceExpense updateMany
   */
  export type FinanceExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinanceExpenses.
     */
    data: XOR<FinanceExpenseUpdateManyMutationInput, FinanceExpenseUncheckedUpdateManyInput>
    /**
     * Filter which FinanceExpenses to update
     */
    where?: FinanceExpenseWhereInput
    /**
     * Limit how many FinanceExpenses to update.
     */
    limit?: number
  }

  /**
   * FinanceExpense updateManyAndReturn
   */
  export type FinanceExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * The data used to update FinanceExpenses.
     */
    data: XOR<FinanceExpenseUpdateManyMutationInput, FinanceExpenseUncheckedUpdateManyInput>
    /**
     * Filter which FinanceExpenses to update
     */
    where?: FinanceExpenseWhereInput
    /**
     * Limit how many FinanceExpenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinanceExpense upsert
   */
  export type FinanceExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the FinanceExpense to update in case it exists.
     */
    where: FinanceExpenseWhereUniqueInput
    /**
     * In case the FinanceExpense found by the `where` argument doesn't exist, create a new FinanceExpense with this data.
     */
    create: XOR<FinanceExpenseCreateInput, FinanceExpenseUncheckedCreateInput>
    /**
     * In case the FinanceExpense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceExpenseUpdateInput, FinanceExpenseUncheckedUpdateInput>
  }

  /**
   * FinanceExpense delete
   */
  export type FinanceExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
    /**
     * Filter which FinanceExpense to delete.
     */
    where: FinanceExpenseWhereUniqueInput
  }

  /**
   * FinanceExpense deleteMany
   */
  export type FinanceExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceExpenses to delete
     */
    where?: FinanceExpenseWhereInput
    /**
     * Limit how many FinanceExpenses to delete.
     */
    limit?: number
  }

  /**
   * FinanceExpense.Product
   */
  export type FinanceExpense$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * FinanceExpense.Variant
   */
  export type FinanceExpense$VariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
  }

  /**
   * FinanceExpense without action
   */
  export type FinanceExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    quantityAdded: number | null
    costPerUnit: Decimal | null
  }

  export type InventorySumAggregateOutputType = {
    quantityAdded: number | null
    costPerUnit: Decimal | null
  }

  export type InventoryMinAggregateOutputType = {
    id: string | null
    productId: string | null
    variantId: string | null
    quantityAdded: number | null
    costPerUnit: Decimal | null
    dealer: string | null
    dateReceived: Date | null
    createdById: string | null
    createdAt: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    variantId: string | null
    quantityAdded: number | null
    costPerUnit: Decimal | null
    dealer: string | null
    dateReceived: Date | null
    createdById: string | null
    createdAt: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    productId: number
    variantId: number
    quantityAdded: number
    costPerUnit: number
    dealer: number
    dateReceived: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    quantityAdded?: true
    costPerUnit?: true
  }

  export type InventorySumAggregateInputType = {
    quantityAdded?: true
    costPerUnit?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    productId?: true
    variantId?: true
    quantityAdded?: true
    costPerUnit?: true
    dealer?: true
    dateReceived?: true
    createdById?: true
    createdAt?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    productId?: true
    variantId?: true
    quantityAdded?: true
    costPerUnit?: true
    dealer?: true
    dateReceived?: true
    createdById?: true
    createdAt?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    productId?: true
    variantId?: true
    quantityAdded?: true
    costPerUnit?: true
    dealer?: true
    dateReceived?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: string
    productId: string
    variantId: string | null
    quantityAdded: number
    costPerUnit: Decimal
    dealer: string
    dateReceived: Date
    createdById: string
    createdAt: Date
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    variantId?: boolean
    quantityAdded?: boolean
    costPerUnit?: boolean
    dealer?: boolean
    dateReceived?: boolean
    createdById?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Variant?: boolean | Inventory$VariantArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    variantId?: boolean
    quantityAdded?: boolean
    costPerUnit?: boolean
    dealer?: boolean
    dateReceived?: boolean
    createdById?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Variant?: boolean | Inventory$VariantArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    variantId?: boolean
    quantityAdded?: boolean
    costPerUnit?: boolean
    dealer?: boolean
    dateReceived?: boolean
    createdById?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Variant?: boolean | Inventory$VariantArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    productId?: boolean
    variantId?: boolean
    quantityAdded?: boolean
    costPerUnit?: boolean
    dealer?: boolean
    dateReceived?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "variantId" | "quantityAdded" | "costPerUnit" | "dealer" | "dateReceived" | "createdById" | "createdAt", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Variant?: boolean | Inventory$VariantArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Variant?: boolean | Inventory$VariantArgs<ExtArgs>
  }
  export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Variant?: boolean | Inventory$VariantArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs>
      Variant: Prisma.$VariantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      variantId: string | null
      quantityAdded: number
      costPerUnit: Prisma.Decimal
      dealer: string
      dateReceived: Date
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Variant<T extends Inventory$VariantArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$VariantArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'String'>
    readonly productId: FieldRef<"Inventory", 'String'>
    readonly variantId: FieldRef<"Inventory", 'String'>
    readonly quantityAdded: FieldRef<"Inventory", 'Int'>
    readonly costPerUnit: FieldRef<"Inventory", 'Decimal'>
    readonly dealer: FieldRef<"Inventory", 'String'>
    readonly dateReceived: FieldRef<"Inventory", 'DateTime'>
    readonly createdById: FieldRef<"Inventory", 'String'>
    readonly createdAt: FieldRef<"Inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory.Variant
   */
  export type Inventory$VariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalAmount: Decimal | null
    totalPaid: Decimal | null
    totalDiscount: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    totalAmount: Decimal | null
    totalPaid: Decimal | null
    totalDiscount: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userName: string | null
    phone: string | null
    alternatePhone: string | null
    roll: string | null
    hall: $Enums.Hall | null
    deliveryDate: Date | null
    totalAmount: Decimal | null
    totalPaid: Decimal | null
    totalDiscount: Decimal | null
    additionalInfo: string | null
    deliveryStatus: $Enums.DeliveryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    referalId: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    phone: string | null
    alternatePhone: string | null
    roll: string | null
    hall: $Enums.Hall | null
    deliveryDate: Date | null
    totalAmount: Decimal | null
    totalPaid: Decimal | null
    totalDiscount: Decimal | null
    additionalInfo: string | null
    deliveryStatus: $Enums.DeliveryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    referalId: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userName: number
    phone: number
    alternatePhone: number
    roll: number
    hall: number
    deliveryDate: number
    totalAmount: number
    totalPaid: number
    totalDiscount: number
    additionalInfo: number
    deliveryStatus: number
    createdAt: number
    updatedAt: number
    referalId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalAmount?: true
    totalPaid?: true
    totalDiscount?: true
  }

  export type OrderSumAggregateInputType = {
    totalAmount?: true
    totalPaid?: true
    totalDiscount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userName?: true
    phone?: true
    alternatePhone?: true
    roll?: true
    hall?: true
    deliveryDate?: true
    totalAmount?: true
    totalPaid?: true
    totalDiscount?: true
    additionalInfo?: true
    deliveryStatus?: true
    createdAt?: true
    updatedAt?: true
    referalId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userName?: true
    phone?: true
    alternatePhone?: true
    roll?: true
    hall?: true
    deliveryDate?: true
    totalAmount?: true
    totalPaid?: true
    totalDiscount?: true
    additionalInfo?: true
    deliveryStatus?: true
    createdAt?: true
    updatedAt?: true
    referalId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userName?: true
    phone?: true
    alternatePhone?: true
    roll?: true
    hall?: true
    deliveryDate?: true
    totalAmount?: true
    totalPaid?: true
    totalDiscount?: true
    additionalInfo?: true
    deliveryStatus?: true
    createdAt?: true
    updatedAt?: true
    referalId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userName: string
    phone: string
    alternatePhone: string | null
    roll: string | null
    hall: $Enums.Hall
    deliveryDate: Date
    totalAmount: Decimal
    totalPaid: Decimal
    totalDiscount: Decimal
    additionalInfo: string | null
    deliveryStatus: $Enums.DeliveryStatus
    createdAt: Date
    updatedAt: Date
    referalId: string
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    phone?: boolean
    alternatePhone?: boolean
    roll?: boolean
    hall?: boolean
    deliveryDate?: boolean
    totalAmount?: boolean
    totalPaid?: boolean
    totalDiscount?: boolean
    additionalInfo?: boolean
    deliveryStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referalId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    OrderItem?: boolean | Order$OrderItemArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    phone?: boolean
    alternatePhone?: boolean
    roll?: boolean
    hall?: boolean
    deliveryDate?: boolean
    totalAmount?: boolean
    totalPaid?: boolean
    totalDiscount?: boolean
    additionalInfo?: boolean
    deliveryStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referalId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    phone?: boolean
    alternatePhone?: boolean
    roll?: boolean
    hall?: boolean
    deliveryDate?: boolean
    totalAmount?: boolean
    totalPaid?: boolean
    totalDiscount?: boolean
    additionalInfo?: boolean
    deliveryStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referalId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userName?: boolean
    phone?: boolean
    alternatePhone?: boolean
    roll?: boolean
    hall?: boolean
    deliveryDate?: boolean
    totalAmount?: boolean
    totalPaid?: boolean
    totalDiscount?: boolean
    additionalInfo?: boolean
    deliveryStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referalId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "phone" | "alternatePhone" | "roll" | "hall" | "deliveryDate" | "totalAmount" | "totalPaid" | "totalDiscount" | "additionalInfo" | "deliveryStatus" | "createdAt" | "updatedAt" | "referalId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    OrderItem?: boolean | Order$OrderItemArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      OrderItem: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      phone: string
      alternatePhone: string | null
      roll: string | null
      hall: $Enums.Hall
      deliveryDate: Date
      totalAmount: Prisma.Decimal
      totalPaid: Prisma.Decimal
      totalDiscount: Prisma.Decimal
      additionalInfo: string | null
      deliveryStatus: $Enums.DeliveryStatus
      createdAt: Date
      updatedAt: Date
      referalId: string
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    OrderItem<T extends Order$OrderItemArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userName: FieldRef<"Order", 'String'>
    readonly phone: FieldRef<"Order", 'String'>
    readonly alternatePhone: FieldRef<"Order", 'String'>
    readonly roll: FieldRef<"Order", 'String'>
    readonly hall: FieldRef<"Order", 'Hall'>
    readonly deliveryDate: FieldRef<"Order", 'DateTime'>
    readonly totalAmount: FieldRef<"Order", 'Decimal'>
    readonly totalPaid: FieldRef<"Order", 'Decimal'>
    readonly totalDiscount: FieldRef<"Order", 'Decimal'>
    readonly additionalInfo: FieldRef<"Order", 'String'>
    readonly deliveryStatus: FieldRef<"Order", 'DeliveryStatus'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly referalId: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.OrderItem
   */
  export type Order$OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    amountPaid: Decimal | null
    discount: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    amountPaid: Decimal | null
    discount: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    variantId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    amountPaid: Decimal | null
    discount: Decimal | null
    deliveryStatus: $Enums.DeliveryStatus | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    variantId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    amountPaid: Decimal | null
    discount: Decimal | null
    deliveryStatus: $Enums.DeliveryStatus | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    variantId: number
    quantity: number
    unitPrice: number
    totalPrice: number
    amountPaid: number
    discount: number
    deliveryStatus: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    amountPaid?: true
    discount?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    amountPaid?: true
    discount?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    amountPaid?: true
    discount?: true
    deliveryStatus?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    amountPaid?: true
    discount?: true
    deliveryStatus?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    amountPaid?: true
    discount?: true
    deliveryStatus?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    variantId: string | null
    quantity: number
    unitPrice: Decimal
    totalPrice: Decimal
    amountPaid: Decimal
    discount: Decimal
    deliveryStatus: $Enums.DeliveryStatus
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    amountPaid?: boolean
    discount?: boolean
    deliveryStatus?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Variant?: boolean | OrderItem$VariantArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    amountPaid?: boolean
    discount?: boolean
    deliveryStatus?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Variant?: boolean | OrderItem$VariantArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    amountPaid?: boolean
    discount?: boolean
    deliveryStatus?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Variant?: boolean | OrderItem$VariantArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    amountPaid?: boolean
    discount?: boolean
    deliveryStatus?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "variantId" | "quantity" | "unitPrice" | "totalPrice" | "amountPaid" | "discount" | "deliveryStatus", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Variant?: boolean | OrderItem$VariantArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Variant?: boolean | OrderItem$VariantArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Variant?: boolean | OrderItem$VariantArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs>
      Variant: Prisma.$VariantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string
      variantId: string | null
      quantity: number
      unitPrice: Prisma.Decimal
      totalPrice: Prisma.Decimal
      amountPaid: Prisma.Decimal
      discount: Prisma.Decimal
      deliveryStatus: $Enums.DeliveryStatus
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Variant<T extends OrderItem$VariantArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$VariantArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
    readonly variantId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly totalPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly amountPaid: FieldRef<"OrderItem", 'Decimal'>
    readonly discount: FieldRef<"OrderItem", 'Decimal'>
    readonly deliveryStatus: FieldRef<"OrderItem", 'DeliveryStatus'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem.Variant
   */
  export type OrderItem$VariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    price: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FinanceExpense?: boolean | Product$FinanceExpenseArgs<ExtArgs>
    Inventory?: boolean | Product$InventoryArgs<ExtArgs>
    OrderItem?: boolean | Product$OrderItemArgs<ExtArgs>
    Variant?: boolean | Product$VariantArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinanceExpense?: boolean | Product$FinanceExpenseArgs<ExtArgs>
    Inventory?: boolean | Product$InventoryArgs<ExtArgs>
    OrderItem?: boolean | Product$OrderItemArgs<ExtArgs>
    Variant?: boolean | Product$VariantArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      FinanceExpense: Prisma.$FinanceExpensePayload<ExtArgs>[]
      Inventory: Prisma.$InventoryPayload<ExtArgs>[]
      OrderItem: Prisma.$OrderItemPayload<ExtArgs>[]
      Variant: Prisma.$VariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FinanceExpense<T extends Product$FinanceExpenseArgs<ExtArgs> = {}>(args?: Subset<T, Product$FinanceExpenseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Inventory<T extends Product$InventoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$InventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OrderItem<T extends Product$OrderItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$OrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Variant<T extends Product$VariantArgs<ExtArgs> = {}>(args?: Subset<T, Product$VariantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.FinanceExpense
   */
  export type Product$FinanceExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
    where?: FinanceExpenseWhereInput
    orderBy?: FinanceExpenseOrderByWithRelationInput | FinanceExpenseOrderByWithRelationInput[]
    cursor?: FinanceExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceExpenseScalarFieldEnum | FinanceExpenseScalarFieldEnum[]
  }

  /**
   * Product.Inventory
   */
  export type Product$InventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Product.OrderItem
   */
  export type Product$OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Product.Variant
   */
  export type Product$VariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    cursor?: VariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Variant
   */

  export type AggregateVariant = {
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  export type VariantAvgAggregateOutputType = {
    variantPrice: Decimal | null
  }

  export type VariantSumAggregateOutputType = {
    variantPrice: Decimal | null
  }

  export type VariantMinAggregateOutputType = {
    id: string | null
    name: string | null
    variantPrice: Decimal | null
    productId: string | null
  }

  export type VariantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    variantPrice: Decimal | null
    productId: string | null
  }

  export type VariantCountAggregateOutputType = {
    id: number
    name: number
    variantPrice: number
    productId: number
    _all: number
  }


  export type VariantAvgAggregateInputType = {
    variantPrice?: true
  }

  export type VariantSumAggregateInputType = {
    variantPrice?: true
  }

  export type VariantMinAggregateInputType = {
    id?: true
    name?: true
    variantPrice?: true
    productId?: true
  }

  export type VariantMaxAggregateInputType = {
    id?: true
    name?: true
    variantPrice?: true
    productId?: true
  }

  export type VariantCountAggregateInputType = {
    id?: true
    name?: true
    variantPrice?: true
    productId?: true
    _all?: true
  }

  export type VariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variant to aggregate.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variants
    **/
    _count?: true | VariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantMaxAggregateInputType
  }

  export type GetVariantAggregateType<T extends VariantAggregateArgs> = {
        [P in keyof T & keyof AggregateVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariant[P]>
      : GetScalarType<T[P], AggregateVariant[P]>
  }




  export type VariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithAggregationInput | VariantOrderByWithAggregationInput[]
    by: VariantScalarFieldEnum[] | VariantScalarFieldEnum
    having?: VariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantCountAggregateInputType | true
    _avg?: VariantAvgAggregateInputType
    _sum?: VariantSumAggregateInputType
    _min?: VariantMinAggregateInputType
    _max?: VariantMaxAggregateInputType
  }

  export type VariantGroupByOutputType = {
    id: string
    name: string
    variantPrice: Decimal
    productId: string
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  type GetVariantGroupByPayload<T extends VariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantGroupByOutputType[P]>
            : GetScalarType<T[P], VariantGroupByOutputType[P]>
        }
      >
    >


  export type VariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    variantPrice?: boolean
    productId?: boolean
    FinanceExpense?: boolean | Variant$FinanceExpenseArgs<ExtArgs>
    Inventory?: boolean | Variant$InventoryArgs<ExtArgs>
    OrderItem?: boolean | Variant$OrderItemArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    _count?: boolean | VariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    variantPrice?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    variantPrice?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectScalar = {
    id?: boolean
    name?: boolean
    variantPrice?: boolean
    productId?: boolean
  }

  export type VariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "variantPrice" | "productId", ExtArgs["result"]["variant"]>
  export type VariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinanceExpense?: boolean | Variant$FinanceExpenseArgs<ExtArgs>
    Inventory?: boolean | Variant$InventoryArgs<ExtArgs>
    OrderItem?: boolean | Variant$OrderItemArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    _count?: boolean | VariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type VariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $VariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variant"
    objects: {
      FinanceExpense: Prisma.$FinanceExpensePayload<ExtArgs>[]
      Inventory: Prisma.$InventoryPayload<ExtArgs>[]
      OrderItem: Prisma.$OrderItemPayload<ExtArgs>[]
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      variantPrice: Prisma.Decimal
      productId: string
    }, ExtArgs["result"]["variant"]>
    composites: {}
  }

  type VariantGetPayload<S extends boolean | null | undefined | VariantDefaultArgs> = $Result.GetResult<Prisma.$VariantPayload, S>

  type VariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantCountAggregateInputType | true
    }

  export interface VariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variant'], meta: { name: 'Variant' } }
    /**
     * Find zero or one Variant that matches the filter.
     * @param {VariantFindUniqueArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantFindUniqueArgs>(args: SelectSubset<T, VariantFindUniqueArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariantFindUniqueOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantFindFirstArgs>(args?: SelectSubset<T, VariantFindFirstArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variant.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantWithIdOnly = await prisma.variant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariantFindManyArgs>(args?: SelectSubset<T, VariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variant.
     * @param {VariantCreateArgs} args - Arguments to create a Variant.
     * @example
     * // Create one Variant
     * const Variant = await prisma.variant.create({
     *   data: {
     *     // ... data to create a Variant
     *   }
     * })
     * 
     */
    create<T extends VariantCreateArgs>(args: SelectSubset<T, VariantCreateArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variants.
     * @param {VariantCreateManyArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantCreateManyArgs>(args?: SelectSubset<T, VariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variants and returns the data saved in the database.
     * @param {VariantCreateManyAndReturnArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variants and only return the `id`
     * const variantWithIdOnly = await prisma.variant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariantCreateManyAndReturnArgs>(args?: SelectSubset<T, VariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variant.
     * @param {VariantDeleteArgs} args - Arguments to delete one Variant.
     * @example
     * // Delete one Variant
     * const Variant = await prisma.variant.delete({
     *   where: {
     *     // ... filter to delete one Variant
     *   }
     * })
     * 
     */
    delete<T extends VariantDeleteArgs>(args: SelectSubset<T, VariantDeleteArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variant.
     * @param {VariantUpdateArgs} args - Arguments to update one Variant.
     * @example
     * // Update one Variant
     * const variant = await prisma.variant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantUpdateArgs>(args: SelectSubset<T, VariantUpdateArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variants.
     * @param {VariantDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantDeleteManyArgs>(args?: SelectSubset<T, VariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantUpdateManyArgs>(args: SelectSubset<T, VariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants and returns the data updated in the database.
     * @param {VariantUpdateManyAndReturnArgs} args - Arguments to update many Variants.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variants and only return the `id`
     * const variantWithIdOnly = await prisma.variant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VariantUpdateManyAndReturnArgs>(args: SelectSubset<T, VariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variant.
     * @param {VariantUpsertArgs} args - Arguments to update or create a Variant.
     * @example
     * // Update or create a Variant
     * const variant = await prisma.variant.upsert({
     *   create: {
     *     // ... data to create a Variant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variant we want to update
     *   }
     * })
     */
    upsert<T extends VariantUpsertArgs>(args: SelectSubset<T, VariantUpsertArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variant.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends VariantCountArgs>(
      args?: Subset<T, VariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantAggregateArgs>(args: Subset<T, VariantAggregateArgs>): Prisma.PrismaPromise<GetVariantAggregateType<T>>

    /**
     * Group by Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantGroupByArgs['orderBy'] }
        : { orderBy?: VariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variant model
   */
  readonly fields: VariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FinanceExpense<T extends Variant$FinanceExpenseArgs<ExtArgs> = {}>(args?: Subset<T, Variant$FinanceExpenseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Inventory<T extends Variant$InventoryArgs<ExtArgs> = {}>(args?: Subset<T, Variant$InventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OrderItem<T extends Variant$OrderItemArgs<ExtArgs> = {}>(args?: Subset<T, Variant$OrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Variant model
   */
  interface VariantFieldRefs {
    readonly id: FieldRef<"Variant", 'String'>
    readonly name: FieldRef<"Variant", 'String'>
    readonly variantPrice: FieldRef<"Variant", 'Decimal'>
    readonly productId: FieldRef<"Variant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Variant findUnique
   */
  export type VariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findUniqueOrThrow
   */
  export type VariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findFirst
   */
  export type VariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant findFirstOrThrow
   */
  export type VariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant findMany
   */
  export type VariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant create
   */
  export type VariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to create a Variant.
     */
    data: XOR<VariantCreateInput, VariantUncheckedCreateInput>
  }

  /**
   * Variant createMany
   */
  export type VariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variant createManyAndReturn
   */
  export type VariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variant update
   */
  export type VariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to update a Variant.
     */
    data: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
    /**
     * Choose, which Variant to update.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant updateMany
   */
  export type VariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to update.
     */
    limit?: number
  }

  /**
   * Variant updateManyAndReturn
   */
  export type VariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variant upsert
   */
  export type VariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The filter to search for the Variant to update in case it exists.
     */
    where: VariantWhereUniqueInput
    /**
     * In case the Variant found by the `where` argument doesn't exist, create a new Variant with this data.
     */
    create: XOR<VariantCreateInput, VariantUncheckedCreateInput>
    /**
     * In case the Variant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
  }

  /**
   * Variant delete
   */
  export type VariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter which Variant to delete.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant deleteMany
   */
  export type VariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variants to delete
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to delete.
     */
    limit?: number
  }

  /**
   * Variant.FinanceExpense
   */
  export type Variant$FinanceExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceExpense
     */
    select?: FinanceExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceExpense
     */
    omit?: FinanceExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceExpenseInclude<ExtArgs> | null
    where?: FinanceExpenseWhereInput
    orderBy?: FinanceExpenseOrderByWithRelationInput | FinanceExpenseOrderByWithRelationInput[]
    cursor?: FinanceExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceExpenseScalarFieldEnum | FinanceExpenseScalarFieldEnum[]
  }

  /**
   * Variant.Inventory
   */
  export type Variant$InventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Variant.OrderItem
   */
  export type Variant$OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Variant without action
   */
  export type VariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    name: 'name',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FinanceExpenseScalarFieldEnum: {
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

  export type FinanceExpenseScalarFieldEnum = (typeof FinanceExpenseScalarFieldEnum)[keyof typeof FinanceExpenseScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
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

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const OrderScalarFieldEnum: {
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

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
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

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const VariantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    variantPrice: 'variantPrice',
    productId: 'productId'
  };

  export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'FinanceExpenseType'
   */
  export type EnumFinanceExpenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FinanceExpenseType'>
    


  /**
   * Reference to a field of type 'FinanceExpenseType[]'
   */
  export type ListEnumFinanceExpenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FinanceExpenseType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Hall'
   */
  export type EnumHallFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Hall'>
    


  /**
   * Reference to a field of type 'Hall[]'
   */
  export type ListEnumHallFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Hall[]'>
    


  /**
   * Reference to a field of type 'DeliveryStatus'
   */
  export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>
    


  /**
   * Reference to a field of type 'DeliveryStatus[]'
   */
  export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    FinanceExpense?: FinanceExpenseListRelationFilter
    Inventory?: InventoryListRelationFilter
    Order?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    FinanceExpense?: FinanceExpenseOrderByRelationAggregateInput
    Inventory?: InventoryOrderByRelationAggregateInput
    Order?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    FinanceExpense?: FinanceExpenseListRelationFilter
    Inventory?: InventoryListRelationFilter
    Order?: OrderListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FinanceExpenseWhereInput = {
    AND?: FinanceExpenseWhereInput | FinanceExpenseWhereInput[]
    OR?: FinanceExpenseWhereInput[]
    NOT?: FinanceExpenseWhereInput | FinanceExpenseWhereInput[]
    id?: StringFilter<"FinanceExpense"> | string
    createdAt?: DateTimeFilter<"FinanceExpense"> | Date | string
    createdById?: StringFilter<"FinanceExpense"> | string
    type?: EnumFinanceExpenseTypeFilter<"FinanceExpense"> | $Enums.FinanceExpenseType
    description?: StringFilter<"FinanceExpense"> | string
    value?: DecimalFilter<"FinanceExpense"> | Decimal | DecimalJsLike | number | string
    productId?: StringNullableFilter<"FinanceExpense"> | string | null
    variantId?: StringNullableFilter<"FinanceExpense"> | string | null
    quantity?: IntNullableFilter<"FinanceExpense"> | number | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    Variant?: XOR<VariantNullableScalarRelationFilter, VariantWhereInput> | null
  }

  export type FinanceExpenseOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    description?: SortOrder
    value?: SortOrder
    productId?: SortOrderInput | SortOrder
    variantId?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    Product?: ProductOrderByWithRelationInput
    Variant?: VariantOrderByWithRelationInput
  }

  export type FinanceExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinanceExpenseWhereInput | FinanceExpenseWhereInput[]
    OR?: FinanceExpenseWhereInput[]
    NOT?: FinanceExpenseWhereInput | FinanceExpenseWhereInput[]
    createdAt?: DateTimeFilter<"FinanceExpense"> | Date | string
    createdById?: StringFilter<"FinanceExpense"> | string
    type?: EnumFinanceExpenseTypeFilter<"FinanceExpense"> | $Enums.FinanceExpenseType
    description?: StringFilter<"FinanceExpense"> | string
    value?: DecimalFilter<"FinanceExpense"> | Decimal | DecimalJsLike | number | string
    productId?: StringNullableFilter<"FinanceExpense"> | string | null
    variantId?: StringNullableFilter<"FinanceExpense"> | string | null
    quantity?: IntNullableFilter<"FinanceExpense"> | number | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    Variant?: XOR<VariantNullableScalarRelationFilter, VariantWhereInput> | null
  }, "id">

  export type FinanceExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    description?: SortOrder
    value?: SortOrder
    productId?: SortOrderInput | SortOrder
    variantId?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    _count?: FinanceExpenseCountOrderByAggregateInput
    _avg?: FinanceExpenseAvgOrderByAggregateInput
    _max?: FinanceExpenseMaxOrderByAggregateInput
    _min?: FinanceExpenseMinOrderByAggregateInput
    _sum?: FinanceExpenseSumOrderByAggregateInput
  }

  export type FinanceExpenseScalarWhereWithAggregatesInput = {
    AND?: FinanceExpenseScalarWhereWithAggregatesInput | FinanceExpenseScalarWhereWithAggregatesInput[]
    OR?: FinanceExpenseScalarWhereWithAggregatesInput[]
    NOT?: FinanceExpenseScalarWhereWithAggregatesInput | FinanceExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinanceExpense"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FinanceExpense"> | Date | string
    createdById?: StringWithAggregatesFilter<"FinanceExpense"> | string
    type?: EnumFinanceExpenseTypeWithAggregatesFilter<"FinanceExpense"> | $Enums.FinanceExpenseType
    description?: StringWithAggregatesFilter<"FinanceExpense"> | string
    value?: DecimalWithAggregatesFilter<"FinanceExpense"> | Decimal | DecimalJsLike | number | string
    productId?: StringNullableWithAggregatesFilter<"FinanceExpense"> | string | null
    variantId?: StringNullableWithAggregatesFilter<"FinanceExpense"> | string | null
    quantity?: IntNullableWithAggregatesFilter<"FinanceExpense"> | number | null
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: StringFilter<"Inventory"> | string
    productId?: StringFilter<"Inventory"> | string
    variantId?: StringNullableFilter<"Inventory"> | string | null
    quantityAdded?: IntFilter<"Inventory"> | number
    costPerUnit?: DecimalFilter<"Inventory"> | Decimal | DecimalJsLike | number | string
    dealer?: StringFilter<"Inventory"> | string
    dateReceived?: DateTimeFilter<"Inventory"> | Date | string
    createdById?: StringFilter<"Inventory"> | string
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Variant?: XOR<VariantNullableScalarRelationFilter, VariantWhereInput> | null
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    variantId?: SortOrderInput | SortOrder
    quantityAdded?: SortOrder
    costPerUnit?: SortOrder
    dealer?: SortOrder
    dateReceived?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Product?: ProductOrderByWithRelationInput
    Variant?: VariantOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    productId?: StringFilter<"Inventory"> | string
    variantId?: StringNullableFilter<"Inventory"> | string | null
    quantityAdded?: IntFilter<"Inventory"> | number
    costPerUnit?: DecimalFilter<"Inventory"> | Decimal | DecimalJsLike | number | string
    dealer?: StringFilter<"Inventory"> | string
    dateReceived?: DateTimeFilter<"Inventory"> | Date | string
    createdById?: StringFilter<"Inventory"> | string
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Variant?: XOR<VariantNullableScalarRelationFilter, VariantWhereInput> | null
  }, "id">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    variantId?: SortOrderInput | SortOrder
    quantityAdded?: SortOrder
    costPerUnit?: SortOrder
    dealer?: SortOrder
    dateReceived?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inventory"> | string
    productId?: StringWithAggregatesFilter<"Inventory"> | string
    variantId?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    quantityAdded?: IntWithAggregatesFilter<"Inventory"> | number
    costPerUnit?: DecimalWithAggregatesFilter<"Inventory"> | Decimal | DecimalJsLike | number | string
    dealer?: StringWithAggregatesFilter<"Inventory"> | string
    dateReceived?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
    createdById?: StringWithAggregatesFilter<"Inventory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userName?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    alternatePhone?: StringNullableFilter<"Order"> | string | null
    roll?: StringNullableFilter<"Order"> | string | null
    hall?: EnumHallFilter<"Order"> | $Enums.Hall
    deliveryDate?: DateTimeFilter<"Order"> | Date | string
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    additionalInfo?: StringNullableFilter<"Order"> | string | null
    deliveryStatus?: EnumDeliveryStatusFilter<"Order"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    referalId?: StringFilter<"Order"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    OrderItem?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    phone?: SortOrder
    alternatePhone?: SortOrderInput | SortOrder
    roll?: SortOrderInput | SortOrder
    hall?: SortOrder
    deliveryDate?: SortOrder
    totalAmount?: SortOrder
    totalPaid?: SortOrder
    totalDiscount?: SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    deliveryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referalId?: SortOrder
    User?: UserOrderByWithRelationInput
    OrderItem?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userName?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    alternatePhone?: StringNullableFilter<"Order"> | string | null
    roll?: StringNullableFilter<"Order"> | string | null
    hall?: EnumHallFilter<"Order"> | $Enums.Hall
    deliveryDate?: DateTimeFilter<"Order"> | Date | string
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    additionalInfo?: StringNullableFilter<"Order"> | string | null
    deliveryStatus?: EnumDeliveryStatusFilter<"Order"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    referalId?: StringFilter<"Order"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    OrderItem?: OrderItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    phone?: SortOrder
    alternatePhone?: SortOrderInput | SortOrder
    roll?: SortOrderInput | SortOrder
    hall?: SortOrder
    deliveryDate?: SortOrder
    totalAmount?: SortOrder
    totalPaid?: SortOrder
    totalDiscount?: SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    deliveryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referalId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userName?: StringWithAggregatesFilter<"Order"> | string
    phone?: StringWithAggregatesFilter<"Order"> | string
    alternatePhone?: StringNullableWithAggregatesFilter<"Order"> | string | null
    roll?: StringNullableWithAggregatesFilter<"Order"> | string | null
    hall?: EnumHallWithAggregatesFilter<"Order"> | $Enums.Hall
    deliveryDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    totalAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    additionalInfo?: StringNullableWithAggregatesFilter<"Order"> | string | null
    deliveryStatus?: EnumDeliveryStatusWithAggregatesFilter<"Order"> | $Enums.DeliveryStatus
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    referalId?: StringWithAggregatesFilter<"Order"> | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    variantId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFilter<"OrderItem"> | $Enums.DeliveryStatus
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Variant?: XOR<VariantNullableScalarRelationFilter, VariantWhereInput> | null
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
    discount?: SortOrder
    deliveryStatus?: SortOrder
    Order?: OrderOrderByWithRelationInput
    Product?: ProductOrderByWithRelationInput
    Variant?: VariantOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    variantId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFilter<"OrderItem"> | $Enums.DeliveryStatus
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Variant?: XOR<VariantNullableScalarRelationFilter, VariantWhereInput> | null
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
    discount?: SortOrder
    deliveryStatus?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productId?: StringWithAggregatesFilter<"OrderItem"> | string
    variantId?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusWithAggregatesFilter<"OrderItem"> | $Enums.DeliveryStatus
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    FinanceExpense?: FinanceExpenseListRelationFilter
    Inventory?: InventoryListRelationFilter
    OrderItem?: OrderItemListRelationFilter
    Variant?: VariantListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    FinanceExpense?: FinanceExpenseOrderByRelationAggregateInput
    Inventory?: InventoryOrderByRelationAggregateInput
    OrderItem?: OrderItemOrderByRelationAggregateInput
    Variant?: VariantOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    FinanceExpense?: FinanceExpenseListRelationFilter
    Inventory?: InventoryListRelationFilter
    OrderItem?: OrderItemListRelationFilter
    Variant?: VariantListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    price?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type VariantWhereInput = {
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    id?: StringFilter<"Variant"> | string
    name?: StringFilter<"Variant"> | string
    variantPrice?: DecimalFilter<"Variant"> | Decimal | DecimalJsLike | number | string
    productId?: StringFilter<"Variant"> | string
    FinanceExpense?: FinanceExpenseListRelationFilter
    Inventory?: InventoryListRelationFilter
    OrderItem?: OrderItemListRelationFilter
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type VariantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    variantPrice?: SortOrder
    productId?: SortOrder
    FinanceExpense?: FinanceExpenseOrderByRelationAggregateInput
    Inventory?: InventoryOrderByRelationAggregateInput
    OrderItem?: OrderItemOrderByRelationAggregateInput
    Product?: ProductOrderByWithRelationInput
  }

  export type VariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    name?: StringFilter<"Variant"> | string
    variantPrice?: DecimalFilter<"Variant"> | Decimal | DecimalJsLike | number | string
    productId?: StringFilter<"Variant"> | string
    FinanceExpense?: FinanceExpenseListRelationFilter
    Inventory?: InventoryListRelationFilter
    OrderItem?: OrderItemListRelationFilter
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type VariantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    variantPrice?: SortOrder
    productId?: SortOrder
    _count?: VariantCountOrderByAggregateInput
    _avg?: VariantAvgOrderByAggregateInput
    _max?: VariantMaxOrderByAggregateInput
    _min?: VariantMinOrderByAggregateInput
    _sum?: VariantSumOrderByAggregateInput
  }

  export type VariantScalarWhereWithAggregatesInput = {
    AND?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    OR?: VariantScalarWhereWithAggregatesInput[]
    NOT?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Variant"> | string
    name?: StringWithAggregatesFilter<"Variant"> | string
    variantPrice?: DecimalWithAggregatesFilter<"Variant"> | Decimal | DecimalJsLike | number | string
    productId?: StringWithAggregatesFilter<"Variant"> | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
    Order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceExpenseCreateInput = {
    id?: string
    createdAt?: Date | string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal | DecimalJsLike | number | string
    quantity?: number | null
    User: UserCreateNestedOneWithoutFinanceExpenseInput
    Product?: ProductCreateNestedOneWithoutFinanceExpenseInput
    Variant?: VariantCreateNestedOneWithoutFinanceExpenseInput
  }

  export type FinanceExpenseUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal | DecimalJsLike | number | string
    productId?: string | null
    variantId?: string | null
    quantity?: number | null
  }

  export type FinanceExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUpdateOneRequiredWithoutFinanceExpenseNestedInput
    Product?: ProductUpdateOneWithoutFinanceExpenseNestedInput
    Variant?: VariantUpdateOneWithoutFinanceExpenseNestedInput
  }

  export type FinanceExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FinanceExpenseCreateManyInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal | DecimalJsLike | number | string
    productId?: string | null
    variantId?: string | null
    quantity?: number | null
  }

  export type FinanceExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FinanceExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryCreateInput = {
    id?: string
    quantityAdded: number
    costPerUnit: Decimal | DecimalJsLike | number | string
    dealer: string
    dateReceived: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutInventoryInput
    Product: ProductCreateNestedOneWithoutInventoryInput
    Variant?: VariantCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: string
    productId: string
    variantId?: string | null
    quantityAdded: number
    costPerUnit: Decimal | DecimalJsLike | number | string
    dealer: string
    dateReceived: Date | string
    createdById: string
    createdAt?: Date | string
  }

  export type InventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutInventoryNestedInput
    Product?: ProductUpdateOneRequiredWithoutInventoryNestedInput
    Variant?: VariantUpdateOneWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyInput = {
    id?: string
    productId: string
    variantId?: string | null
    quantityAdded: number
    costPerUnit: Decimal | DecimalJsLike | number | string
    dealer: string
    dateReceived: Date | string
    createdById: string
    createdAt?: Date | string
  }

  export type InventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    userName: string
    phone: string
    alternatePhone?: string | null
    roll?: string | null
    hall: $Enums.Hall
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    totalPaid: Decimal | DecimalJsLike | number | string
    totalDiscount?: Decimal | DecimalJsLike | number | string
    additionalInfo?: string | null
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutOrderInput
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userName: string
    phone: string
    alternatePhone?: string | null
    roll?: string | null
    hall: $Enums.Hall
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    totalPaid: Decimal | DecimalJsLike | number | string
    totalDiscount?: Decimal | DecimalJsLike | number | string
    additionalInfo?: string | null
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    referalId: string
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alternatePhone?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    hall?: EnumHallFieldUpdateOperationsInput | $Enums.Hall
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutOrderNestedInput
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alternatePhone?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    hall?: EnumHallFieldUpdateOperationsInput | $Enums.Hall
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referalId?: StringFieldUpdateOperationsInput | string
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    userName: string
    phone: string
    alternatePhone?: string | null
    roll?: string | null
    hall: $Enums.Hall
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    totalPaid: Decimal | DecimalJsLike | number | string
    totalDiscount?: Decimal | DecimalJsLike | number | string
    additionalInfo?: string | null
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    referalId: string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alternatePhone?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    hall?: EnumHallFieldUpdateOperationsInput | $Enums.Hall
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alternatePhone?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    hall?: EnumHallFieldUpdateOperationsInput | $Enums.Hall
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referalId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    amountPaid: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    deliveryStatus?: $Enums.DeliveryStatus
    Order: OrderCreateNestedOneWithoutOrderItemInput
    Product: ProductCreateNestedOneWithoutOrderItemInput
    Variant?: VariantCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
    variantId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    amountPaid: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    deliveryStatus?: $Enums.DeliveryStatus
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    Order?: OrderUpdateOneRequiredWithoutOrderItemNestedInput
    Product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput
    Variant?: VariantUpdateOneWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: string
    variantId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    amountPaid: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    deliveryStatus?: $Enums.DeliveryStatus
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseCreateNestedManyWithoutProductInput
    Inventory?: InventoryCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput
    Variant?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseUncheckedCreateNestedManyWithoutProductInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    Variant?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUpdateManyWithoutProductNestedInput
    Inventory?: InventoryUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUpdateManyWithoutProductNestedInput
    Variant?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUncheckedUpdateManyWithoutProductNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantCreateInput = {
    id?: string
    name: string
    variantPrice: Decimal | DecimalJsLike | number | string
    FinanceExpense?: FinanceExpenseCreateNestedManyWithoutVariantInput
    Inventory?: InventoryCreateNestedManyWithoutVariantInput
    OrderItem?: OrderItemCreateNestedManyWithoutVariantInput
    Product: ProductCreateNestedOneWithoutVariantInput
  }

  export type VariantUncheckedCreateInput = {
    id?: string
    name: string
    variantPrice: Decimal | DecimalJsLike | number | string
    productId: string
    FinanceExpense?: FinanceExpenseUncheckedCreateNestedManyWithoutVariantInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutVariantInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    FinanceExpense?: FinanceExpenseUpdateManyWithoutVariantNestedInput
    Inventory?: InventoryUpdateManyWithoutVariantNestedInput
    OrderItem?: OrderItemUpdateManyWithoutVariantNestedInput
    Product?: ProductUpdateOneRequiredWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productId?: StringFieldUpdateOperationsInput | string
    FinanceExpense?: FinanceExpenseUncheckedUpdateManyWithoutVariantNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutVariantNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type VariantCreateManyInput = {
    id?: string
    name: string
    variantPrice: Decimal | DecimalJsLike | number | string
    productId: string
  }

  export type VariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FinanceExpenseListRelationFilter = {
    every?: FinanceExpenseWhereInput
    some?: FinanceExpenseWhereInput
    none?: FinanceExpenseWhereInput
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type FinanceExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumFinanceExpenseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FinanceExpenseType | EnumFinanceExpenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FinanceExpenseType[] | ListEnumFinanceExpenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FinanceExpenseType[] | ListEnumFinanceExpenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFinanceExpenseTypeFilter<$PrismaModel> | $Enums.FinanceExpenseType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type VariantNullableScalarRelationFilter = {
    is?: VariantWhereInput | null
    isNot?: VariantWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FinanceExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    description?: SortOrder
    value?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
  }

  export type FinanceExpenseAvgOrderByAggregateInput = {
    value?: SortOrder
    quantity?: SortOrder
  }

  export type FinanceExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    description?: SortOrder
    value?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
  }

  export type FinanceExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    type?: SortOrder
    description?: SortOrder
    value?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
  }

  export type FinanceExpenseSumOrderByAggregateInput = {
    value?: SortOrder
    quantity?: SortOrder
  }

  export type EnumFinanceExpenseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FinanceExpenseType | EnumFinanceExpenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FinanceExpenseType[] | ListEnumFinanceExpenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FinanceExpenseType[] | ListEnumFinanceExpenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFinanceExpenseTypeWithAggregatesFilter<$PrismaModel> | $Enums.FinanceExpenseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFinanceExpenseTypeFilter<$PrismaModel>
    _max?: NestedEnumFinanceExpenseTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantityAdded?: SortOrder
    costPerUnit?: SortOrder
    dealer?: SortOrder
    dateReceived?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    quantityAdded?: SortOrder
    costPerUnit?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantityAdded?: SortOrder
    costPerUnit?: SortOrder
    dealer?: SortOrder
    dateReceived?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantityAdded?: SortOrder
    costPerUnit?: SortOrder
    dealer?: SortOrder
    dateReceived?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    quantityAdded?: SortOrder
    costPerUnit?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumHallFilter<$PrismaModel = never> = {
    equals?: $Enums.Hall | EnumHallFieldRefInput<$PrismaModel>
    in?: $Enums.Hall[] | ListEnumHallFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hall[] | ListEnumHallFieldRefInput<$PrismaModel>
    not?: NestedEnumHallFilter<$PrismaModel> | $Enums.Hall
  }

  export type EnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    phone?: SortOrder
    alternatePhone?: SortOrder
    roll?: SortOrder
    hall?: SortOrder
    deliveryDate?: SortOrder
    totalAmount?: SortOrder
    totalPaid?: SortOrder
    totalDiscount?: SortOrder
    additionalInfo?: SortOrder
    deliveryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referalId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    totalPaid?: SortOrder
    totalDiscount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    phone?: SortOrder
    alternatePhone?: SortOrder
    roll?: SortOrder
    hall?: SortOrder
    deliveryDate?: SortOrder
    totalAmount?: SortOrder
    totalPaid?: SortOrder
    totalDiscount?: SortOrder
    additionalInfo?: SortOrder
    deliveryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referalId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    phone?: SortOrder
    alternatePhone?: SortOrder
    roll?: SortOrder
    hall?: SortOrder
    deliveryDate?: SortOrder
    totalAmount?: SortOrder
    totalPaid?: SortOrder
    totalDiscount?: SortOrder
    additionalInfo?: SortOrder
    deliveryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referalId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    totalPaid?: SortOrder
    totalDiscount?: SortOrder
  }

  export type EnumHallWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Hall | EnumHallFieldRefInput<$PrismaModel>
    in?: $Enums.Hall[] | ListEnumHallFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hall[] | ListEnumHallFieldRefInput<$PrismaModel>
    not?: NestedEnumHallWithAggregatesFilter<$PrismaModel> | $Enums.Hall
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHallFilter<$PrismaModel>
    _max?: NestedEnumHallFilter<$PrismaModel>
  }

  export type EnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
    discount?: SortOrder
    deliveryStatus?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
    discount?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
    discount?: SortOrder
    deliveryStatus?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
    discount?: SortOrder
    deliveryStatus?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
    discount?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type VariantListRelationFilter = {
    every?: VariantWhereInput
    some?: VariantWhereInput
    none?: VariantWhereInput
  }

  export type VariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type VariantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    variantPrice?: SortOrder
    productId?: SortOrder
  }

  export type VariantAvgOrderByAggregateInput = {
    variantPrice?: SortOrder
  }

  export type VariantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    variantPrice?: SortOrder
    productId?: SortOrder
  }

  export type VariantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    variantPrice?: SortOrder
    productId?: SortOrder
  }

  export type VariantSumOrderByAggregateInput = {
    variantPrice?: SortOrder
  }

  export type FinanceExpenseCreateNestedManyWithoutUserInput = {
    create?: XOR<FinanceExpenseCreateWithoutUserInput, FinanceExpenseUncheckedCreateWithoutUserInput> | FinanceExpenseCreateWithoutUserInput[] | FinanceExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceExpenseCreateOrConnectWithoutUserInput | FinanceExpenseCreateOrConnectWithoutUserInput[]
    createMany?: FinanceExpenseCreateManyUserInputEnvelope
    connect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
  }

  export type InventoryCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput> | InventoryCreateWithoutUserInput[] | InventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutUserInput | InventoryCreateOrConnectWithoutUserInput[]
    createMany?: InventoryCreateManyUserInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type FinanceExpenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FinanceExpenseCreateWithoutUserInput, FinanceExpenseUncheckedCreateWithoutUserInput> | FinanceExpenseCreateWithoutUserInput[] | FinanceExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceExpenseCreateOrConnectWithoutUserInput | FinanceExpenseCreateOrConnectWithoutUserInput[]
    createMany?: FinanceExpenseCreateManyUserInputEnvelope
    connect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput> | InventoryCreateWithoutUserInput[] | InventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutUserInput | InventoryCreateOrConnectWithoutUserInput[]
    createMany?: InventoryCreateManyUserInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FinanceExpenseUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinanceExpenseCreateWithoutUserInput, FinanceExpenseUncheckedCreateWithoutUserInput> | FinanceExpenseCreateWithoutUserInput[] | FinanceExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceExpenseCreateOrConnectWithoutUserInput | FinanceExpenseCreateOrConnectWithoutUserInput[]
    upsert?: FinanceExpenseUpsertWithWhereUniqueWithoutUserInput | FinanceExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinanceExpenseCreateManyUserInputEnvelope
    set?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    disconnect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    delete?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    connect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    update?: FinanceExpenseUpdateWithWhereUniqueWithoutUserInput | FinanceExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinanceExpenseUpdateManyWithWhereWithoutUserInput | FinanceExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinanceExpenseScalarWhereInput | FinanceExpenseScalarWhereInput[]
  }

  export type InventoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput> | InventoryCreateWithoutUserInput[] | InventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutUserInput | InventoryCreateOrConnectWithoutUserInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutUserInput | InventoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryCreateManyUserInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutUserInput | InventoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutUserInput | InventoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type FinanceExpenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinanceExpenseCreateWithoutUserInput, FinanceExpenseUncheckedCreateWithoutUserInput> | FinanceExpenseCreateWithoutUserInput[] | FinanceExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceExpenseCreateOrConnectWithoutUserInput | FinanceExpenseCreateOrConnectWithoutUserInput[]
    upsert?: FinanceExpenseUpsertWithWhereUniqueWithoutUserInput | FinanceExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinanceExpenseCreateManyUserInputEnvelope
    set?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    disconnect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    delete?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    connect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    update?: FinanceExpenseUpdateWithWhereUniqueWithoutUserInput | FinanceExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinanceExpenseUpdateManyWithWhereWithoutUserInput | FinanceExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinanceExpenseScalarWhereInput | FinanceExpenseScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput> | InventoryCreateWithoutUserInput[] | InventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutUserInput | InventoryCreateOrConnectWithoutUserInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutUserInput | InventoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryCreateManyUserInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutUserInput | InventoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutUserInput | InventoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFinanceExpenseInput = {
    create?: XOR<UserCreateWithoutFinanceExpenseInput, UserUncheckedCreateWithoutFinanceExpenseInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinanceExpenseInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutFinanceExpenseInput = {
    create?: XOR<ProductCreateWithoutFinanceExpenseInput, ProductUncheckedCreateWithoutFinanceExpenseInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFinanceExpenseInput
    connect?: ProductWhereUniqueInput
  }

  export type VariantCreateNestedOneWithoutFinanceExpenseInput = {
    create?: XOR<VariantCreateWithoutFinanceExpenseInput, VariantUncheckedCreateWithoutFinanceExpenseInput>
    connectOrCreate?: VariantCreateOrConnectWithoutFinanceExpenseInput
    connect?: VariantWhereUniqueInput
  }

  export type EnumFinanceExpenseTypeFieldUpdateOperationsInput = {
    set?: $Enums.FinanceExpenseType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutFinanceExpenseNestedInput = {
    create?: XOR<UserCreateWithoutFinanceExpenseInput, UserUncheckedCreateWithoutFinanceExpenseInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinanceExpenseInput
    upsert?: UserUpsertWithoutFinanceExpenseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinanceExpenseInput, UserUpdateWithoutFinanceExpenseInput>, UserUncheckedUpdateWithoutFinanceExpenseInput>
  }

  export type ProductUpdateOneWithoutFinanceExpenseNestedInput = {
    create?: XOR<ProductCreateWithoutFinanceExpenseInput, ProductUncheckedCreateWithoutFinanceExpenseInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFinanceExpenseInput
    upsert?: ProductUpsertWithoutFinanceExpenseInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutFinanceExpenseInput, ProductUpdateWithoutFinanceExpenseInput>, ProductUncheckedUpdateWithoutFinanceExpenseInput>
  }

  export type VariantUpdateOneWithoutFinanceExpenseNestedInput = {
    create?: XOR<VariantCreateWithoutFinanceExpenseInput, VariantUncheckedCreateWithoutFinanceExpenseInput>
    connectOrCreate?: VariantCreateOrConnectWithoutFinanceExpenseInput
    upsert?: VariantUpsertWithoutFinanceExpenseInput
    disconnect?: VariantWhereInput | boolean
    delete?: VariantWhereInput | boolean
    connect?: VariantWhereUniqueInput
    update?: XOR<XOR<VariantUpdateToOneWithWhereWithoutFinanceExpenseInput, VariantUpdateWithoutFinanceExpenseInput>, VariantUncheckedUpdateWithoutFinanceExpenseInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserCreateNestedOneWithoutInventoryInput = {
    create?: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutInventoryInput = {
    create?: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryInput
    connect?: ProductWhereUniqueInput
  }

  export type VariantCreateNestedOneWithoutInventoryInput = {
    create?: XOR<VariantCreateWithoutInventoryInput, VariantUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: VariantCreateOrConnectWithoutInventoryInput
    connect?: VariantWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput
    upsert?: UserUpsertWithoutInventoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInventoryInput, UserUpdateWithoutInventoryInput>, UserUncheckedUpdateWithoutInventoryInput>
  }

  export type ProductUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryInput
    upsert?: ProductUpsertWithoutInventoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInventoryInput, ProductUpdateWithoutInventoryInput>, ProductUncheckedUpdateWithoutInventoryInput>
  }

  export type VariantUpdateOneWithoutInventoryNestedInput = {
    create?: XOR<VariantCreateWithoutInventoryInput, VariantUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: VariantCreateOrConnectWithoutInventoryInput
    upsert?: VariantUpsertWithoutInventoryInput
    disconnect?: VariantWhereInput | boolean
    delete?: VariantWhereInput | boolean
    connect?: VariantWhereUniqueInput
    update?: XOR<XOR<VariantUpdateToOneWithWhereWithoutInventoryInput, VariantUpdateWithoutInventoryInput>, VariantUncheckedUpdateWithoutInventoryInput>
  }

  export type UserCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumHallFieldUpdateOperationsInput = {
    set?: $Enums.Hall
  }

  export type EnumDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryStatus
  }

  export type UserUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    upsert?: UserUpsertWithoutOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderInput, UserUpdateWithoutOrderInput>, UserUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput
    connect?: ProductWhereUniqueInput
  }

  export type VariantCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<VariantCreateWithoutOrderItemInput, VariantUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: VariantCreateOrConnectWithoutOrderItemInput
    connect?: VariantWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemInput
    upsert?: OrderUpsertWithoutOrderItemInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemInput, OrderUpdateWithoutOrderItemInput>, OrderUncheckedUpdateWithoutOrderItemInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput
    upsert?: ProductUpsertWithoutOrderItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemInput, ProductUpdateWithoutOrderItemInput>, ProductUncheckedUpdateWithoutOrderItemInput>
  }

  export type VariantUpdateOneWithoutOrderItemNestedInput = {
    create?: XOR<VariantCreateWithoutOrderItemInput, VariantUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: VariantCreateOrConnectWithoutOrderItemInput
    upsert?: VariantUpsertWithoutOrderItemInput
    disconnect?: VariantWhereInput | boolean
    delete?: VariantWhereInput | boolean
    connect?: VariantWhereUniqueInput
    update?: XOR<XOR<VariantUpdateToOneWithWhereWithoutOrderItemInput, VariantUpdateWithoutOrderItemInput>, VariantUncheckedUpdateWithoutOrderItemInput>
  }

  export type FinanceExpenseCreateNestedManyWithoutProductInput = {
    create?: XOR<FinanceExpenseCreateWithoutProductInput, FinanceExpenseUncheckedCreateWithoutProductInput> | FinanceExpenseCreateWithoutProductInput[] | FinanceExpenseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FinanceExpenseCreateOrConnectWithoutProductInput | FinanceExpenseCreateOrConnectWithoutProductInput[]
    createMany?: FinanceExpenseCreateManyProductInputEnvelope
    connect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
  }

  export type InventoryCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type VariantCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type FinanceExpenseUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FinanceExpenseCreateWithoutProductInput, FinanceExpenseUncheckedCreateWithoutProductInput> | FinanceExpenseCreateWithoutProductInput[] | FinanceExpenseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FinanceExpenseCreateOrConnectWithoutProductInput | FinanceExpenseCreateOrConnectWithoutProductInput[]
    createMany?: FinanceExpenseCreateManyProductInputEnvelope
    connect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type VariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FinanceExpenseUpdateManyWithoutProductNestedInput = {
    create?: XOR<FinanceExpenseCreateWithoutProductInput, FinanceExpenseUncheckedCreateWithoutProductInput> | FinanceExpenseCreateWithoutProductInput[] | FinanceExpenseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FinanceExpenseCreateOrConnectWithoutProductInput | FinanceExpenseCreateOrConnectWithoutProductInput[]
    upsert?: FinanceExpenseUpsertWithWhereUniqueWithoutProductInput | FinanceExpenseUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FinanceExpenseCreateManyProductInputEnvelope
    set?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    disconnect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    delete?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    connect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    update?: FinanceExpenseUpdateWithWhereUniqueWithoutProductInput | FinanceExpenseUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FinanceExpenseUpdateManyWithWhereWithoutProductInput | FinanceExpenseUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FinanceExpenseScalarWhereInput | FinanceExpenseScalarWhereInput[]
  }

  export type InventoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutProductInput | InventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutProductInput | InventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutProductInput | InventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type VariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutProductInput | VariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutProductInput | VariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutProductInput | VariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type FinanceExpenseUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FinanceExpenseCreateWithoutProductInput, FinanceExpenseUncheckedCreateWithoutProductInput> | FinanceExpenseCreateWithoutProductInput[] | FinanceExpenseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FinanceExpenseCreateOrConnectWithoutProductInput | FinanceExpenseCreateOrConnectWithoutProductInput[]
    upsert?: FinanceExpenseUpsertWithWhereUniqueWithoutProductInput | FinanceExpenseUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FinanceExpenseCreateManyProductInputEnvelope
    set?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    disconnect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    delete?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    connect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    update?: FinanceExpenseUpdateWithWhereUniqueWithoutProductInput | FinanceExpenseUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FinanceExpenseUpdateManyWithWhereWithoutProductInput | FinanceExpenseUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FinanceExpenseScalarWhereInput | FinanceExpenseScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutProductInput | InventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutProductInput | InventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutProductInput | InventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type VariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutProductInput | VariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutProductInput | VariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutProductInput | VariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type FinanceExpenseCreateNestedManyWithoutVariantInput = {
    create?: XOR<FinanceExpenseCreateWithoutVariantInput, FinanceExpenseUncheckedCreateWithoutVariantInput> | FinanceExpenseCreateWithoutVariantInput[] | FinanceExpenseUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: FinanceExpenseCreateOrConnectWithoutVariantInput | FinanceExpenseCreateOrConnectWithoutVariantInput[]
    createMany?: FinanceExpenseCreateManyVariantInputEnvelope
    connect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
  }

  export type InventoryCreateNestedManyWithoutVariantInput = {
    create?: XOR<InventoryCreateWithoutVariantInput, InventoryUncheckedCreateWithoutVariantInput> | InventoryCreateWithoutVariantInput[] | InventoryUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutVariantInput | InventoryCreateOrConnectWithoutVariantInput[]
    createMany?: InventoryCreateManyVariantInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutVariantInput = {
    create?: XOR<OrderItemCreateWithoutVariantInput, OrderItemUncheckedCreateWithoutVariantInput> | OrderItemCreateWithoutVariantInput[] | OrderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutVariantInput | OrderItemCreateOrConnectWithoutVariantInput[]
    createMany?: OrderItemCreateManyVariantInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ProductCreateNestedOneWithoutVariantInput = {
    create?: XOR<ProductCreateWithoutVariantInput, ProductUncheckedCreateWithoutVariantInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantInput
    connect?: ProductWhereUniqueInput
  }

  export type FinanceExpenseUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<FinanceExpenseCreateWithoutVariantInput, FinanceExpenseUncheckedCreateWithoutVariantInput> | FinanceExpenseCreateWithoutVariantInput[] | FinanceExpenseUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: FinanceExpenseCreateOrConnectWithoutVariantInput | FinanceExpenseCreateOrConnectWithoutVariantInput[]
    createMany?: FinanceExpenseCreateManyVariantInputEnvelope
    connect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<InventoryCreateWithoutVariantInput, InventoryUncheckedCreateWithoutVariantInput> | InventoryCreateWithoutVariantInput[] | InventoryUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutVariantInput | InventoryCreateOrConnectWithoutVariantInput[]
    createMany?: InventoryCreateManyVariantInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<OrderItemCreateWithoutVariantInput, OrderItemUncheckedCreateWithoutVariantInput> | OrderItemCreateWithoutVariantInput[] | OrderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutVariantInput | OrderItemCreateOrConnectWithoutVariantInput[]
    createMany?: OrderItemCreateManyVariantInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type FinanceExpenseUpdateManyWithoutVariantNestedInput = {
    create?: XOR<FinanceExpenseCreateWithoutVariantInput, FinanceExpenseUncheckedCreateWithoutVariantInput> | FinanceExpenseCreateWithoutVariantInput[] | FinanceExpenseUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: FinanceExpenseCreateOrConnectWithoutVariantInput | FinanceExpenseCreateOrConnectWithoutVariantInput[]
    upsert?: FinanceExpenseUpsertWithWhereUniqueWithoutVariantInput | FinanceExpenseUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: FinanceExpenseCreateManyVariantInputEnvelope
    set?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    disconnect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    delete?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    connect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    update?: FinanceExpenseUpdateWithWhereUniqueWithoutVariantInput | FinanceExpenseUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: FinanceExpenseUpdateManyWithWhereWithoutVariantInput | FinanceExpenseUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: FinanceExpenseScalarWhereInput | FinanceExpenseScalarWhereInput[]
  }

  export type InventoryUpdateManyWithoutVariantNestedInput = {
    create?: XOR<InventoryCreateWithoutVariantInput, InventoryUncheckedCreateWithoutVariantInput> | InventoryCreateWithoutVariantInput[] | InventoryUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutVariantInput | InventoryCreateOrConnectWithoutVariantInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutVariantInput | InventoryUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: InventoryCreateManyVariantInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutVariantInput | InventoryUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutVariantInput | InventoryUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutVariantNestedInput = {
    create?: XOR<OrderItemCreateWithoutVariantInput, OrderItemUncheckedCreateWithoutVariantInput> | OrderItemCreateWithoutVariantInput[] | OrderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutVariantInput | OrderItemCreateOrConnectWithoutVariantInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutVariantInput | OrderItemUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: OrderItemCreateManyVariantInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutVariantInput | OrderItemUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutVariantInput | OrderItemUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductUpdateOneRequiredWithoutVariantNestedInput = {
    create?: XOR<ProductCreateWithoutVariantInput, ProductUncheckedCreateWithoutVariantInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantInput
    upsert?: ProductUpsertWithoutVariantInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantInput, ProductUpdateWithoutVariantInput>, ProductUncheckedUpdateWithoutVariantInput>
  }

  export type FinanceExpenseUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<FinanceExpenseCreateWithoutVariantInput, FinanceExpenseUncheckedCreateWithoutVariantInput> | FinanceExpenseCreateWithoutVariantInput[] | FinanceExpenseUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: FinanceExpenseCreateOrConnectWithoutVariantInput | FinanceExpenseCreateOrConnectWithoutVariantInput[]
    upsert?: FinanceExpenseUpsertWithWhereUniqueWithoutVariantInput | FinanceExpenseUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: FinanceExpenseCreateManyVariantInputEnvelope
    set?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    disconnect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    delete?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    connect?: FinanceExpenseWhereUniqueInput | FinanceExpenseWhereUniqueInput[]
    update?: FinanceExpenseUpdateWithWhereUniqueWithoutVariantInput | FinanceExpenseUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: FinanceExpenseUpdateManyWithWhereWithoutVariantInput | FinanceExpenseUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: FinanceExpenseScalarWhereInput | FinanceExpenseScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<InventoryCreateWithoutVariantInput, InventoryUncheckedCreateWithoutVariantInput> | InventoryCreateWithoutVariantInput[] | InventoryUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutVariantInput | InventoryCreateOrConnectWithoutVariantInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutVariantInput | InventoryUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: InventoryCreateManyVariantInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutVariantInput | InventoryUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutVariantInput | InventoryUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<OrderItemCreateWithoutVariantInput, OrderItemUncheckedCreateWithoutVariantInput> | OrderItemCreateWithoutVariantInput[] | OrderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutVariantInput | OrderItemCreateOrConnectWithoutVariantInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutVariantInput | OrderItemUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: OrderItemCreateManyVariantInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutVariantInput | OrderItemUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutVariantInput | OrderItemUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFinanceExpenseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FinanceExpenseType | EnumFinanceExpenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FinanceExpenseType[] | ListEnumFinanceExpenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FinanceExpenseType[] | ListEnumFinanceExpenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFinanceExpenseTypeFilter<$PrismaModel> | $Enums.FinanceExpenseType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFinanceExpenseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FinanceExpenseType | EnumFinanceExpenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FinanceExpenseType[] | ListEnumFinanceExpenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FinanceExpenseType[] | ListEnumFinanceExpenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFinanceExpenseTypeWithAggregatesFilter<$PrismaModel> | $Enums.FinanceExpenseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFinanceExpenseTypeFilter<$PrismaModel>
    _max?: NestedEnumFinanceExpenseTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumHallFilter<$PrismaModel = never> = {
    equals?: $Enums.Hall | EnumHallFieldRefInput<$PrismaModel>
    in?: $Enums.Hall[] | ListEnumHallFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hall[] | ListEnumHallFieldRefInput<$PrismaModel>
    not?: NestedEnumHallFilter<$PrismaModel> | $Enums.Hall
  }

  export type NestedEnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type NestedEnumHallWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Hall | EnumHallFieldRefInput<$PrismaModel>
    in?: $Enums.Hall[] | ListEnumHallFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hall[] | ListEnumHallFieldRefInput<$PrismaModel>
    not?: NestedEnumHallWithAggregatesFilter<$PrismaModel> | $Enums.Hall
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHallFilter<$PrismaModel>
    _max?: NestedEnumHallFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FinanceExpenseCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal | DecimalJsLike | number | string
    quantity?: number | null
    Product?: ProductCreateNestedOneWithoutFinanceExpenseInput
    Variant?: VariantCreateNestedOneWithoutFinanceExpenseInput
  }

  export type FinanceExpenseUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal | DecimalJsLike | number | string
    productId?: string | null
    variantId?: string | null
    quantity?: number | null
  }

  export type FinanceExpenseCreateOrConnectWithoutUserInput = {
    where: FinanceExpenseWhereUniqueInput
    create: XOR<FinanceExpenseCreateWithoutUserInput, FinanceExpenseUncheckedCreateWithoutUserInput>
  }

  export type FinanceExpenseCreateManyUserInputEnvelope = {
    data: FinanceExpenseCreateManyUserInput | FinanceExpenseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCreateWithoutUserInput = {
    id?: string
    quantityAdded: number
    costPerUnit: Decimal | DecimalJsLike | number | string
    dealer: string
    dateReceived: Date | string
    createdAt?: Date | string
    Product: ProductCreateNestedOneWithoutInventoryInput
    Variant?: VariantCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    variantId?: string | null
    quantityAdded: number
    costPerUnit: Decimal | DecimalJsLike | number | string
    dealer: string
    dateReceived: Date | string
    createdAt?: Date | string
  }

  export type InventoryCreateOrConnectWithoutUserInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput>
  }

  export type InventoryCreateManyUserInputEnvelope = {
    data: InventoryCreateManyUserInput | InventoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    userName: string
    phone: string
    alternatePhone?: string | null
    roll?: string | null
    hall: $Enums.Hall
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    totalPaid: Decimal | DecimalJsLike | number | string
    totalDiscount?: Decimal | DecimalJsLike | number | string
    additionalInfo?: string | null
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    userName: string
    phone: string
    alternatePhone?: string | null
    roll?: string | null
    hall: $Enums.Hall
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    totalPaid: Decimal | DecimalJsLike | number | string
    totalDiscount?: Decimal | DecimalJsLike | number | string
    additionalInfo?: string | null
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FinanceExpenseUpsertWithWhereUniqueWithoutUserInput = {
    where: FinanceExpenseWhereUniqueInput
    update: XOR<FinanceExpenseUpdateWithoutUserInput, FinanceExpenseUncheckedUpdateWithoutUserInput>
    create: XOR<FinanceExpenseCreateWithoutUserInput, FinanceExpenseUncheckedCreateWithoutUserInput>
  }

  export type FinanceExpenseUpdateWithWhereUniqueWithoutUserInput = {
    where: FinanceExpenseWhereUniqueInput
    data: XOR<FinanceExpenseUpdateWithoutUserInput, FinanceExpenseUncheckedUpdateWithoutUserInput>
  }

  export type FinanceExpenseUpdateManyWithWhereWithoutUserInput = {
    where: FinanceExpenseScalarWhereInput
    data: XOR<FinanceExpenseUpdateManyMutationInput, FinanceExpenseUncheckedUpdateManyWithoutUserInput>
  }

  export type FinanceExpenseScalarWhereInput = {
    AND?: FinanceExpenseScalarWhereInput | FinanceExpenseScalarWhereInput[]
    OR?: FinanceExpenseScalarWhereInput[]
    NOT?: FinanceExpenseScalarWhereInput | FinanceExpenseScalarWhereInput[]
    id?: StringFilter<"FinanceExpense"> | string
    createdAt?: DateTimeFilter<"FinanceExpense"> | Date | string
    createdById?: StringFilter<"FinanceExpense"> | string
    type?: EnumFinanceExpenseTypeFilter<"FinanceExpense"> | $Enums.FinanceExpenseType
    description?: StringFilter<"FinanceExpense"> | string
    value?: DecimalFilter<"FinanceExpense"> | Decimal | DecimalJsLike | number | string
    productId?: StringNullableFilter<"FinanceExpense"> | string | null
    variantId?: StringNullableFilter<"FinanceExpense"> | string | null
    quantity?: IntNullableFilter<"FinanceExpense"> | number | null
  }

  export type InventoryUpsertWithWhereUniqueWithoutUserInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutUserInput, InventoryUncheckedUpdateWithoutUserInput>
    create: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutUserInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutUserInput, InventoryUncheckedUpdateWithoutUserInput>
  }

  export type InventoryUpdateManyWithWhereWithoutUserInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutUserInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    id?: StringFilter<"Inventory"> | string
    productId?: StringFilter<"Inventory"> | string
    variantId?: StringNullableFilter<"Inventory"> | string | null
    quantityAdded?: IntFilter<"Inventory"> | number
    costPerUnit?: DecimalFilter<"Inventory"> | Decimal | DecimalJsLike | number | string
    dealer?: StringFilter<"Inventory"> | string
    dateReceived?: DateTimeFilter<"Inventory"> | Date | string
    createdById?: StringFilter<"Inventory"> | string
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userName?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    alternatePhone?: StringNullableFilter<"Order"> | string | null
    roll?: StringNullableFilter<"Order"> | string | null
    hall?: EnumHallFilter<"Order"> | $Enums.Hall
    deliveryDate?: DateTimeFilter<"Order"> | Date | string
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    additionalInfo?: StringNullableFilter<"Order"> | string | null
    deliveryStatus?: EnumDeliveryStatusFilter<"Order"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    referalId?: StringFilter<"Order"> | string
  }

  export type UserCreateWithoutFinanceExpenseInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    Inventory?: InventoryCreateNestedManyWithoutUserInput
    Order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFinanceExpenseInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFinanceExpenseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinanceExpenseInput, UserUncheckedCreateWithoutFinanceExpenseInput>
  }

  export type ProductCreateWithoutFinanceExpenseInput = {
    id?: string
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Inventory?: InventoryCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput
    Variant?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFinanceExpenseInput = {
    id?: string
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Inventory?: InventoryUncheckedCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    Variant?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFinanceExpenseInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFinanceExpenseInput, ProductUncheckedCreateWithoutFinanceExpenseInput>
  }

  export type VariantCreateWithoutFinanceExpenseInput = {
    id?: string
    name: string
    variantPrice: Decimal | DecimalJsLike | number | string
    Inventory?: InventoryCreateNestedManyWithoutVariantInput
    OrderItem?: OrderItemCreateNestedManyWithoutVariantInput
    Product: ProductCreateNestedOneWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutFinanceExpenseInput = {
    id?: string
    name: string
    variantPrice: Decimal | DecimalJsLike | number | string
    productId: string
    Inventory?: InventoryUncheckedCreateNestedManyWithoutVariantInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutFinanceExpenseInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutFinanceExpenseInput, VariantUncheckedCreateWithoutFinanceExpenseInput>
  }

  export type UserUpsertWithoutFinanceExpenseInput = {
    update: XOR<UserUpdateWithoutFinanceExpenseInput, UserUncheckedUpdateWithoutFinanceExpenseInput>
    create: XOR<UserCreateWithoutFinanceExpenseInput, UserUncheckedCreateWithoutFinanceExpenseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinanceExpenseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinanceExpenseInput, UserUncheckedUpdateWithoutFinanceExpenseInput>
  }

  export type UserUpdateWithoutFinanceExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFinanceExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutFinanceExpenseInput = {
    update: XOR<ProductUpdateWithoutFinanceExpenseInput, ProductUncheckedUpdateWithoutFinanceExpenseInput>
    create: XOR<ProductCreateWithoutFinanceExpenseInput, ProductUncheckedCreateWithoutFinanceExpenseInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutFinanceExpenseInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutFinanceExpenseInput, ProductUncheckedUpdateWithoutFinanceExpenseInput>
  }

  export type ProductUpdateWithoutFinanceExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Inventory?: InventoryUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUpdateManyWithoutProductNestedInput
    Variant?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFinanceExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Inventory?: InventoryUncheckedUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type VariantUpsertWithoutFinanceExpenseInput = {
    update: XOR<VariantUpdateWithoutFinanceExpenseInput, VariantUncheckedUpdateWithoutFinanceExpenseInput>
    create: XOR<VariantCreateWithoutFinanceExpenseInput, VariantUncheckedCreateWithoutFinanceExpenseInput>
    where?: VariantWhereInput
  }

  export type VariantUpdateToOneWithWhereWithoutFinanceExpenseInput = {
    where?: VariantWhereInput
    data: XOR<VariantUpdateWithoutFinanceExpenseInput, VariantUncheckedUpdateWithoutFinanceExpenseInput>
  }

  export type VariantUpdateWithoutFinanceExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Inventory?: InventoryUpdateManyWithoutVariantNestedInput
    OrderItem?: OrderItemUpdateManyWithoutVariantNestedInput
    Product?: ProductUpdateOneRequiredWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutFinanceExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productId?: StringFieldUpdateOperationsInput | string
    Inventory?: InventoryUncheckedUpdateManyWithoutVariantNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type UserCreateWithoutInventoryInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseCreateNestedManyWithoutUserInput
    Order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInventoryInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseUncheckedCreateNestedManyWithoutUserInput
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInventoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
  }

  export type ProductCreateWithoutInventoryInput = {
    id?: string
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput
    Variant?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseUncheckedCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    Variant?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInventoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
  }

  export type VariantCreateWithoutInventoryInput = {
    id?: string
    name: string
    variantPrice: Decimal | DecimalJsLike | number | string
    FinanceExpense?: FinanceExpenseCreateNestedManyWithoutVariantInput
    OrderItem?: OrderItemCreateNestedManyWithoutVariantInput
    Product: ProductCreateNestedOneWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    variantPrice: Decimal | DecimalJsLike | number | string
    productId: string
    FinanceExpense?: FinanceExpenseUncheckedCreateNestedManyWithoutVariantInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutInventoryInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutInventoryInput, VariantUncheckedCreateWithoutInventoryInput>
  }

  export type UserUpsertWithoutInventoryInput = {
    update: XOR<UserUpdateWithoutInventoryInput, UserUncheckedUpdateWithoutInventoryInput>
    create: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInventoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInventoryInput, UserUncheckedUpdateWithoutInventoryInput>
  }

  export type UserUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUpdateManyWithoutUserNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUncheckedUpdateManyWithoutUserNestedInput
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutInventoryInput = {
    update: XOR<ProductUpdateWithoutInventoryInput, ProductUncheckedUpdateWithoutInventoryInput>
    create: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInventoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInventoryInput, ProductUncheckedUpdateWithoutInventoryInput>
  }

  export type ProductUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUpdateManyWithoutProductNestedInput
    Variant?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUncheckedUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type VariantUpsertWithoutInventoryInput = {
    update: XOR<VariantUpdateWithoutInventoryInput, VariantUncheckedUpdateWithoutInventoryInput>
    create: XOR<VariantCreateWithoutInventoryInput, VariantUncheckedCreateWithoutInventoryInput>
    where?: VariantWhereInput
  }

  export type VariantUpdateToOneWithWhereWithoutInventoryInput = {
    where?: VariantWhereInput
    data: XOR<VariantUpdateWithoutInventoryInput, VariantUncheckedUpdateWithoutInventoryInput>
  }

  export type VariantUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    FinanceExpense?: FinanceExpenseUpdateManyWithoutVariantNestedInput
    OrderItem?: OrderItemUpdateManyWithoutVariantNestedInput
    Product?: ProductUpdateOneRequiredWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productId?: StringFieldUpdateOperationsInput | string
    FinanceExpense?: FinanceExpenseUncheckedUpdateManyWithoutVariantNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type UserCreateWithoutOrderInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    amountPaid: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    deliveryStatus?: $Enums.DeliveryStatus
    Product: ProductCreateNestedOneWithoutOrderItemInput
    Variant?: VariantCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    variantId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    amountPaid: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    deliveryStatus?: $Enums.DeliveryStatus
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrderInput = {
    update: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    variantId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFilter<"OrderItem"> | $Enums.DeliveryStatus
  }

  export type OrderCreateWithoutOrderItemInput = {
    id?: string
    userName: string
    phone: string
    alternatePhone?: string | null
    roll?: string | null
    hall: $Enums.Hall
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    totalPaid: Decimal | DecimalJsLike | number | string
    totalDiscount?: Decimal | DecimalJsLike | number | string
    additionalInfo?: string | null
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderItemInput = {
    id?: string
    userName: string
    phone: string
    alternatePhone?: string | null
    roll?: string | null
    hall: $Enums.Hall
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    totalPaid: Decimal | DecimalJsLike | number | string
    totalDiscount?: Decimal | DecimalJsLike | number | string
    additionalInfo?: string | null
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    referalId: string
  }

  export type OrderCreateOrConnectWithoutOrderItemInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
  }

  export type ProductCreateWithoutOrderItemInput = {
    id?: string
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseCreateNestedManyWithoutProductInput
    Inventory?: InventoryCreateNestedManyWithoutProductInput
    Variant?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemInput = {
    id?: string
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseUncheckedCreateNestedManyWithoutProductInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutProductInput
    Variant?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
  }

  export type VariantCreateWithoutOrderItemInput = {
    id?: string
    name: string
    variantPrice: Decimal | DecimalJsLike | number | string
    FinanceExpense?: FinanceExpenseCreateNestedManyWithoutVariantInput
    Inventory?: InventoryCreateNestedManyWithoutVariantInput
    Product: ProductCreateNestedOneWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutOrderItemInput = {
    id?: string
    name: string
    variantPrice: Decimal | DecimalJsLike | number | string
    productId: string
    FinanceExpense?: FinanceExpenseUncheckedCreateNestedManyWithoutVariantInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutOrderItemInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutOrderItemInput, VariantUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderUpsertWithoutOrderItemInput = {
    update: XOR<OrderUpdateWithoutOrderItemInput, OrderUncheckedUpdateWithoutOrderItemInput>
    create: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemInput, OrderUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alternatePhone?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    hall?: EnumHallFieldUpdateOperationsInput | $Enums.Hall
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alternatePhone?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    hall?: EnumHallFieldUpdateOperationsInput | $Enums.Hall
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referalId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpsertWithoutOrderItemInput = {
    update: XOR<ProductUpdateWithoutOrderItemInput, ProductUncheckedUpdateWithoutOrderItemInput>
    create: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemInput, ProductUncheckedUpdateWithoutOrderItemInput>
  }

  export type ProductUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUpdateManyWithoutProductNestedInput
    Inventory?: InventoryUpdateManyWithoutProductNestedInput
    Variant?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUncheckedUpdateManyWithoutProductNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutProductNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type VariantUpsertWithoutOrderItemInput = {
    update: XOR<VariantUpdateWithoutOrderItemInput, VariantUncheckedUpdateWithoutOrderItemInput>
    create: XOR<VariantCreateWithoutOrderItemInput, VariantUncheckedCreateWithoutOrderItemInput>
    where?: VariantWhereInput
  }

  export type VariantUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: VariantWhereInput
    data: XOR<VariantUpdateWithoutOrderItemInput, VariantUncheckedUpdateWithoutOrderItemInput>
  }

  export type VariantUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    FinanceExpense?: FinanceExpenseUpdateManyWithoutVariantNestedInput
    Inventory?: InventoryUpdateManyWithoutVariantNestedInput
    Product?: ProductUpdateOneRequiredWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productId?: StringFieldUpdateOperationsInput | string
    FinanceExpense?: FinanceExpenseUncheckedUpdateManyWithoutVariantNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type FinanceExpenseCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal | DecimalJsLike | number | string
    quantity?: number | null
    User: UserCreateNestedOneWithoutFinanceExpenseInput
    Variant?: VariantCreateNestedOneWithoutFinanceExpenseInput
  }

  export type FinanceExpenseUncheckedCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal | DecimalJsLike | number | string
    variantId?: string | null
    quantity?: number | null
  }

  export type FinanceExpenseCreateOrConnectWithoutProductInput = {
    where: FinanceExpenseWhereUniqueInput
    create: XOR<FinanceExpenseCreateWithoutProductInput, FinanceExpenseUncheckedCreateWithoutProductInput>
  }

  export type FinanceExpenseCreateManyProductInputEnvelope = {
    data: FinanceExpenseCreateManyProductInput | FinanceExpenseCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCreateWithoutProductInput = {
    id?: string
    quantityAdded: number
    costPerUnit: Decimal | DecimalJsLike | number | string
    dealer: string
    dateReceived: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutInventoryInput
    Variant?: VariantCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutProductInput = {
    id?: string
    variantId?: string | null
    quantityAdded: number
    costPerUnit: Decimal | DecimalJsLike | number | string
    dealer: string
    dateReceived: Date | string
    createdById: string
    createdAt?: Date | string
  }

  export type InventoryCreateOrConnectWithoutProductInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
  }

  export type InventoryCreateManyProductInputEnvelope = {
    data: InventoryCreateManyProductInput | InventoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    amountPaid: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    deliveryStatus?: $Enums.DeliveryStatus
    Order: OrderCreateNestedOneWithoutOrderItemInput
    Variant?: VariantCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: string
    variantId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    amountPaid: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    deliveryStatus?: $Enums.DeliveryStatus
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type VariantCreateWithoutProductInput = {
    id?: string
    name: string
    variantPrice: Decimal | DecimalJsLike | number | string
    FinanceExpense?: FinanceExpenseCreateNestedManyWithoutVariantInput
    Inventory?: InventoryCreateNestedManyWithoutVariantInput
    OrderItem?: OrderItemCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    variantPrice: Decimal | DecimalJsLike | number | string
    FinanceExpense?: FinanceExpenseUncheckedCreateNestedManyWithoutVariantInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutVariantInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutProductInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantCreateManyProductInputEnvelope = {
    data: VariantCreateManyProductInput | VariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type FinanceExpenseUpsertWithWhereUniqueWithoutProductInput = {
    where: FinanceExpenseWhereUniqueInput
    update: XOR<FinanceExpenseUpdateWithoutProductInput, FinanceExpenseUncheckedUpdateWithoutProductInput>
    create: XOR<FinanceExpenseCreateWithoutProductInput, FinanceExpenseUncheckedCreateWithoutProductInput>
  }

  export type FinanceExpenseUpdateWithWhereUniqueWithoutProductInput = {
    where: FinanceExpenseWhereUniqueInput
    data: XOR<FinanceExpenseUpdateWithoutProductInput, FinanceExpenseUncheckedUpdateWithoutProductInput>
  }

  export type FinanceExpenseUpdateManyWithWhereWithoutProductInput = {
    where: FinanceExpenseScalarWhereInput
    data: XOR<FinanceExpenseUpdateManyMutationInput, FinanceExpenseUncheckedUpdateManyWithoutProductInput>
  }

  export type InventoryUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutProductInput, InventoryUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutProductInput, InventoryUncheckedUpdateWithoutProductInput>
  }

  export type InventoryUpdateManyWithWhereWithoutProductInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type VariantUpsertWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    update: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantUpdateWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    data: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
  }

  export type VariantUpdateManyWithWhereWithoutProductInput = {
    where: VariantScalarWhereInput
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyWithoutProductInput>
  }

  export type VariantScalarWhereInput = {
    AND?: VariantScalarWhereInput | VariantScalarWhereInput[]
    OR?: VariantScalarWhereInput[]
    NOT?: VariantScalarWhereInput | VariantScalarWhereInput[]
    id?: StringFilter<"Variant"> | string
    name?: StringFilter<"Variant"> | string
    variantPrice?: DecimalFilter<"Variant"> | Decimal | DecimalJsLike | number | string
    productId?: StringFilter<"Variant"> | string
  }

  export type FinanceExpenseCreateWithoutVariantInput = {
    id?: string
    createdAt?: Date | string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal | DecimalJsLike | number | string
    quantity?: number | null
    User: UserCreateNestedOneWithoutFinanceExpenseInput
    Product?: ProductCreateNestedOneWithoutFinanceExpenseInput
  }

  export type FinanceExpenseUncheckedCreateWithoutVariantInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal | DecimalJsLike | number | string
    productId?: string | null
    quantity?: number | null
  }

  export type FinanceExpenseCreateOrConnectWithoutVariantInput = {
    where: FinanceExpenseWhereUniqueInput
    create: XOR<FinanceExpenseCreateWithoutVariantInput, FinanceExpenseUncheckedCreateWithoutVariantInput>
  }

  export type FinanceExpenseCreateManyVariantInputEnvelope = {
    data: FinanceExpenseCreateManyVariantInput | FinanceExpenseCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCreateWithoutVariantInput = {
    id?: string
    quantityAdded: number
    costPerUnit: Decimal | DecimalJsLike | number | string
    dealer: string
    dateReceived: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutInventoryInput
    Product: ProductCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutVariantInput = {
    id?: string
    productId: string
    quantityAdded: number
    costPerUnit: Decimal | DecimalJsLike | number | string
    dealer: string
    dateReceived: Date | string
    createdById: string
    createdAt?: Date | string
  }

  export type InventoryCreateOrConnectWithoutVariantInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutVariantInput, InventoryUncheckedCreateWithoutVariantInput>
  }

  export type InventoryCreateManyVariantInputEnvelope = {
    data: InventoryCreateManyVariantInput | InventoryCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutVariantInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    amountPaid: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    deliveryStatus?: $Enums.DeliveryStatus
    Order: OrderCreateNestedOneWithoutOrderItemInput
    Product: ProductCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutVariantInput = {
    id?: string
    orderId: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    amountPaid: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    deliveryStatus?: $Enums.DeliveryStatus
  }

  export type OrderItemCreateOrConnectWithoutVariantInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutVariantInput, OrderItemUncheckedCreateWithoutVariantInput>
  }

  export type OrderItemCreateManyVariantInputEnvelope = {
    data: OrderItemCreateManyVariantInput | OrderItemCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutVariantInput = {
    id?: string
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseCreateNestedManyWithoutProductInput
    Inventory?: InventoryCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVariantInput = {
    id?: string
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FinanceExpense?: FinanceExpenseUncheckedCreateNestedManyWithoutProductInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVariantInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantInput, ProductUncheckedCreateWithoutVariantInput>
  }

  export type FinanceExpenseUpsertWithWhereUniqueWithoutVariantInput = {
    where: FinanceExpenseWhereUniqueInput
    update: XOR<FinanceExpenseUpdateWithoutVariantInput, FinanceExpenseUncheckedUpdateWithoutVariantInput>
    create: XOR<FinanceExpenseCreateWithoutVariantInput, FinanceExpenseUncheckedCreateWithoutVariantInput>
  }

  export type FinanceExpenseUpdateWithWhereUniqueWithoutVariantInput = {
    where: FinanceExpenseWhereUniqueInput
    data: XOR<FinanceExpenseUpdateWithoutVariantInput, FinanceExpenseUncheckedUpdateWithoutVariantInput>
  }

  export type FinanceExpenseUpdateManyWithWhereWithoutVariantInput = {
    where: FinanceExpenseScalarWhereInput
    data: XOR<FinanceExpenseUpdateManyMutationInput, FinanceExpenseUncheckedUpdateManyWithoutVariantInput>
  }

  export type InventoryUpsertWithWhereUniqueWithoutVariantInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutVariantInput, InventoryUncheckedUpdateWithoutVariantInput>
    create: XOR<InventoryCreateWithoutVariantInput, InventoryUncheckedCreateWithoutVariantInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutVariantInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutVariantInput, InventoryUncheckedUpdateWithoutVariantInput>
  }

  export type InventoryUpdateManyWithWhereWithoutVariantInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutVariantInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutVariantInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutVariantInput, OrderItemUncheckedUpdateWithoutVariantInput>
    create: XOR<OrderItemCreateWithoutVariantInput, OrderItemUncheckedCreateWithoutVariantInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutVariantInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutVariantInput, OrderItemUncheckedUpdateWithoutVariantInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutVariantInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutVariantInput>
  }

  export type ProductUpsertWithoutVariantInput = {
    update: XOR<ProductUpdateWithoutVariantInput, ProductUncheckedUpdateWithoutVariantInput>
    create: XOR<ProductCreateWithoutVariantInput, ProductUncheckedCreateWithoutVariantInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantInput, ProductUncheckedUpdateWithoutVariantInput>
  }

  export type ProductUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUpdateManyWithoutProductNestedInput
    Inventory?: InventoryUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinanceExpense?: FinanceExpenseUncheckedUpdateManyWithoutProductNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type FinanceExpenseCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal | DecimalJsLike | number | string
    productId?: string | null
    variantId?: string | null
    quantity?: number | null
  }

  export type InventoryCreateManyUserInput = {
    id?: string
    productId: string
    variantId?: string | null
    quantityAdded: number
    costPerUnit: Decimal | DecimalJsLike | number | string
    dealer: string
    dateReceived: Date | string
    createdAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    userName: string
    phone: string
    alternatePhone?: string | null
    roll?: string | null
    hall: $Enums.Hall
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    totalPaid: Decimal | DecimalJsLike | number | string
    totalDiscount?: Decimal | DecimalJsLike | number | string
    additionalInfo?: string | null
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceExpenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Product?: ProductUpdateOneWithoutFinanceExpenseNestedInput
    Variant?: VariantUpdateOneWithoutFinanceExpenseNestedInput
  }

  export type FinanceExpenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FinanceExpenseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutInventoryNestedInput
    Variant?: VariantUpdateOneWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alternatePhone?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    hall?: EnumHallFieldUpdateOperationsInput | $Enums.Hall
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alternatePhone?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    hall?: EnumHallFieldUpdateOperationsInput | $Enums.Hall
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    alternatePhone?: NullableStringFieldUpdateOperationsInput | string | null
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    hall?: EnumHallFieldUpdateOperationsInput | $Enums.Hall
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productId: string
    variantId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    amountPaid: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    deliveryStatus?: $Enums.DeliveryStatus
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    Product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput
    Variant?: VariantUpdateOneWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
  }

  export type FinanceExpenseCreateManyProductInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal | DecimalJsLike | number | string
    variantId?: string | null
    quantity?: number | null
  }

  export type InventoryCreateManyProductInput = {
    id?: string
    variantId?: string | null
    quantityAdded: number
    costPerUnit: Decimal | DecimalJsLike | number | string
    dealer: string
    dateReceived: Date | string
    createdById: string
    createdAt?: Date | string
  }

  export type OrderItemCreateManyProductInput = {
    id?: string
    orderId: string
    variantId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    amountPaid: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    deliveryStatus?: $Enums.DeliveryStatus
  }

  export type VariantCreateManyProductInput = {
    id?: string
    name: string
    variantPrice: Decimal | DecimalJsLike | number | string
  }

  export type FinanceExpenseUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUpdateOneRequiredWithoutFinanceExpenseNestedInput
    Variant?: VariantUpdateOneWithoutFinanceExpenseNestedInput
  }

  export type FinanceExpenseUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FinanceExpenseUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutInventoryNestedInput
    Variant?: VariantUpdateOneWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    Order?: OrderUpdateOneRequiredWithoutOrderItemNestedInput
    Variant?: VariantUpdateOneWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
  }

  export type VariantUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    FinanceExpense?: FinanceExpenseUpdateManyWithoutVariantNestedInput
    Inventory?: InventoryUpdateManyWithoutVariantNestedInput
    OrderItem?: OrderItemUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    FinanceExpense?: FinanceExpenseUncheckedUpdateManyWithoutVariantNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutVariantNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variantPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FinanceExpenseCreateManyVariantInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    type: $Enums.FinanceExpenseType
    description: string
    value: Decimal | DecimalJsLike | number | string
    productId?: string | null
    quantity?: number | null
  }

  export type InventoryCreateManyVariantInput = {
    id?: string
    productId: string
    quantityAdded: number
    costPerUnit: Decimal | DecimalJsLike | number | string
    dealer: string
    dateReceived: Date | string
    createdById: string
    createdAt?: Date | string
  }

  export type OrderItemCreateManyVariantInput = {
    id?: string
    orderId: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    amountPaid: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    deliveryStatus?: $Enums.DeliveryStatus
  }

  export type FinanceExpenseUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUpdateOneRequiredWithoutFinanceExpenseNestedInput
    Product?: ProductUpdateOneWithoutFinanceExpenseNestedInput
  }

  export type FinanceExpenseUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FinanceExpenseUncheckedUpdateManyWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    type?: EnumFinanceExpenseTypeFieldUpdateOperationsInput | $Enums.FinanceExpenseType
    description?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutInventoryNestedInput
    Product?: ProductUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantityAdded?: IntFieldUpdateOperationsInput | number
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealer?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    Order?: OrderUpdateOneRequiredWithoutOrderItemNestedInput
    Product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
  }

  export type OrderItemUncheckedUpdateManyWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}