
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
 * Model ArtistProfile
 * 
 */
export type ArtistProfile = $Result.DefaultSelection<Prisma.$ArtistProfilePayload>
/**
 * Model Audios
 * 
 */
export type Audios = $Result.DefaultSelection<Prisma.$AudiosPayload>
/**
 * Model VoiceMeta
 * 
 */
export type VoiceMeta = $Result.DefaultSelection<Prisma.$VoiceMetaPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  TRANSGENDER: 'TRANSGENDER',
  NON_BINARY: 'NON_BINARY'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

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
   * `prisma.artistProfile`: Exposes CRUD operations for the **ArtistProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistProfiles
    * const artistProfiles = await prisma.artistProfile.findMany()
    * ```
    */
  get artistProfile(): Prisma.ArtistProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audios`: Exposes CRUD operations for the **Audios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audios
    * const audios = await prisma.audios.findMany()
    * ```
    */
  get audios(): Prisma.AudiosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voiceMeta`: Exposes CRUD operations for the **VoiceMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VoiceMetas
    * const voiceMetas = await prisma.voiceMeta.findMany()
    * ```
    */
  get voiceMeta(): Prisma.VoiceMetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    ArtistProfile: 'ArtistProfile',
    Audios: 'Audios',
    VoiceMeta: 'VoiceMeta',
    Subscription: 'Subscription'
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
      modelProps: "user" | "artistProfile" | "audios" | "voiceMeta" | "subscription"
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
      ArtistProfile: {
        payload: Prisma.$ArtistProfilePayload<ExtArgs>
        fields: Prisma.ArtistProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistProfilePayload>
          }
          findFirst: {
            args: Prisma.ArtistProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistProfilePayload>
          }
          findMany: {
            args: Prisma.ArtistProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistProfilePayload>[]
          }
          create: {
            args: Prisma.ArtistProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistProfilePayload>
          }
          createMany: {
            args: Prisma.ArtistProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistProfilePayload>[]
          }
          delete: {
            args: Prisma.ArtistProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistProfilePayload>
          }
          update: {
            args: Prisma.ArtistProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistProfilePayload>
          }
          deleteMany: {
            args: Prisma.ArtistProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistProfilePayload>[]
          }
          upsert: {
            args: Prisma.ArtistProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistProfilePayload>
          }
          aggregate: {
            args: Prisma.ArtistProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtistProfile>
          }
          groupBy: {
            args: Prisma.ArtistProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistProfileCountAggregateOutputType> | number
          }
        }
      }
      Audios: {
        payload: Prisma.$AudiosPayload<ExtArgs>
        fields: Prisma.AudiosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudiosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudiosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiosPayload>
          }
          findFirst: {
            args: Prisma.AudiosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudiosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiosPayload>
          }
          findMany: {
            args: Prisma.AudiosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiosPayload>[]
          }
          create: {
            args: Prisma.AudiosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiosPayload>
          }
          createMany: {
            args: Prisma.AudiosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudiosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiosPayload>[]
          }
          delete: {
            args: Prisma.AudiosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiosPayload>
          }
          update: {
            args: Prisma.AudiosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiosPayload>
          }
          deleteMany: {
            args: Prisma.AudiosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudiosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AudiosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiosPayload>[]
          }
          upsert: {
            args: Prisma.AudiosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiosPayload>
          }
          aggregate: {
            args: Prisma.AudiosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudios>
          }
          groupBy: {
            args: Prisma.AudiosGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudiosGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudiosCountArgs<ExtArgs>
            result: $Utils.Optional<AudiosCountAggregateOutputType> | number
          }
        }
      }
      VoiceMeta: {
        payload: Prisma.$VoiceMetaPayload<ExtArgs>
        fields: Prisma.VoiceMetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoiceMetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoiceMetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMetaPayload>
          }
          findFirst: {
            args: Prisma.VoiceMetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoiceMetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMetaPayload>
          }
          findMany: {
            args: Prisma.VoiceMetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMetaPayload>[]
          }
          create: {
            args: Prisma.VoiceMetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMetaPayload>
          }
          createMany: {
            args: Prisma.VoiceMetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoiceMetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMetaPayload>[]
          }
          delete: {
            args: Prisma.VoiceMetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMetaPayload>
          }
          update: {
            args: Prisma.VoiceMetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMetaPayload>
          }
          deleteMany: {
            args: Prisma.VoiceMetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoiceMetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoiceMetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMetaPayload>[]
          }
          upsert: {
            args: Prisma.VoiceMetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMetaPayload>
          }
          aggregate: {
            args: Prisma.VoiceMetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoiceMeta>
          }
          groupBy: {
            args: Prisma.VoiceMetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoiceMetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoiceMetaCountArgs<ExtArgs>
            result: $Utils.Optional<VoiceMetaCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
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
    artistProfile?: ArtistProfileOmit
    audios?: AudiosOmit
    voiceMeta?: VoiceMetaOmit
    subscription?: SubscriptionOmit
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
    subscription: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | UserCountOutputTypeCountSubscriptionArgs
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
  export type UserCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type ArtistProfileCountOutputType
   */

  export type ArtistProfileCountOutputType = {
    Audios: number
    subscription: number
  }

  export type ArtistProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Audios?: boolean | ArtistProfileCountOutputTypeCountAudiosArgs
    subscription?: boolean | ArtistProfileCountOutputTypeCountSubscriptionArgs
  }

  // Custom InputTypes
  /**
   * ArtistProfileCountOutputType without action
   */
  export type ArtistProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfileCountOutputType
     */
    select?: ArtistProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistProfileCountOutputType without action
   */
  export type ArtistProfileCountOutputTypeCountAudiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudiosWhereInput
  }

  /**
   * ArtistProfileCountOutputType without action
   */
  export type ArtistProfileCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    username: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artistProfile?: boolean | User$artistProfileArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "username" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistProfile?: boolean | User$artistProfileArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      artistProfile: Prisma.$ArtistProfilePayload<ExtArgs> | null
      subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      username: string
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
    artistProfile<T extends User$artistProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$artistProfileArgs<ExtArgs>>): Prisma__ArtistProfileClient<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
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
   * User.artistProfile
   */
  export type User$artistProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileInclude<ExtArgs> | null
    where?: ArtistProfileWhereInput
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
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
   * Model ArtistProfile
   */

  export type AggregateArtistProfile = {
    _count: ArtistProfileCountAggregateOutputType | null
    _avg: ArtistProfileAvgAggregateOutputType | null
    _sum: ArtistProfileSumAggregateOutputType | null
    _min: ArtistProfileMinAggregateOutputType | null
    _max: ArtistProfileMaxAggregateOutputType | null
  }

  export type ArtistProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ArtistProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ArtistProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bio: string | null
    displayName: string | null
    gender: $Enums.Gender | null
    avtarUrl: string | null
    bannerUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bio: string | null
    displayName: string | null
    gender: $Enums.Gender | null
    avtarUrl: string | null
    bannerUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistProfileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    displayName: number
    gender: number
    avtarUrl: number
    bannerUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArtistProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ArtistProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ArtistProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    displayName?: true
    gender?: true
    avtarUrl?: true
    bannerUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    displayName?: true
    gender?: true
    avtarUrl?: true
    bannerUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    displayName?: true
    gender?: true
    avtarUrl?: true
    bannerUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArtistProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistProfile to aggregate.
     */
    where?: ArtistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistProfiles to fetch.
     */
    orderBy?: ArtistProfileOrderByWithRelationInput | ArtistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistProfiles
    **/
    _count?: true | ArtistProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistProfileMaxAggregateInputType
  }

  export type GetArtistProfileAggregateType<T extends ArtistProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistProfile[P]>
      : GetScalarType<T[P], AggregateArtistProfile[P]>
  }




  export type ArtistProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistProfileWhereInput
    orderBy?: ArtistProfileOrderByWithAggregationInput | ArtistProfileOrderByWithAggregationInput[]
    by: ArtistProfileScalarFieldEnum[] | ArtistProfileScalarFieldEnum
    having?: ArtistProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistProfileCountAggregateInputType | true
    _avg?: ArtistProfileAvgAggregateInputType
    _sum?: ArtistProfileSumAggregateInputType
    _min?: ArtistProfileMinAggregateInputType
    _max?: ArtistProfileMaxAggregateInputType
  }

  export type ArtistProfileGroupByOutputType = {
    id: number
    userId: number
    bio: string
    displayName: string
    gender: $Enums.Gender
    avtarUrl: string
    bannerUrl: string
    createdAt: Date
    updatedAt: Date
    _count: ArtistProfileCountAggregateOutputType | null
    _avg: ArtistProfileAvgAggregateOutputType | null
    _sum: ArtistProfileSumAggregateOutputType | null
    _min: ArtistProfileMinAggregateOutputType | null
    _max: ArtistProfileMaxAggregateOutputType | null
  }

  type GetArtistProfileGroupByPayload<T extends ArtistProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistProfileGroupByOutputType[P]>
        }
      >
    >


  export type ArtistProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    displayName?: boolean
    gender?: boolean
    avtarUrl?: boolean
    bannerUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Audios?: boolean | ArtistProfile$AudiosArgs<ExtArgs>
    subscription?: boolean | ArtistProfile$subscriptionArgs<ExtArgs>
    _count?: boolean | ArtistProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistProfile"]>

  export type ArtistProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    displayName?: boolean
    gender?: boolean
    avtarUrl?: boolean
    bannerUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistProfile"]>

  export type ArtistProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    displayName?: boolean
    gender?: boolean
    avtarUrl?: boolean
    bannerUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistProfile"]>

  export type ArtistProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
    displayName?: boolean
    gender?: boolean
    avtarUrl?: boolean
    bannerUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArtistProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bio" | "displayName" | "gender" | "avtarUrl" | "bannerUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["artistProfile"]>
  export type ArtistProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Audios?: boolean | ArtistProfile$AudiosArgs<ExtArgs>
    subscription?: boolean | ArtistProfile$subscriptionArgs<ExtArgs>
    _count?: boolean | ArtistProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArtistProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArtistProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtistProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Audios: Prisma.$AudiosPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      bio: string
      displayName: string
      gender: $Enums.Gender
      avtarUrl: string
      bannerUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["artistProfile"]>
    composites: {}
  }

  type ArtistProfileGetPayload<S extends boolean | null | undefined | ArtistProfileDefaultArgs> = $Result.GetResult<Prisma.$ArtistProfilePayload, S>

  type ArtistProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistProfileCountAggregateInputType | true
    }

  export interface ArtistProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtistProfile'], meta: { name: 'ArtistProfile' } }
    /**
     * Find zero or one ArtistProfile that matches the filter.
     * @param {ArtistProfileFindUniqueArgs} args - Arguments to find a ArtistProfile
     * @example
     * // Get one ArtistProfile
     * const artistProfile = await prisma.artistProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistProfileFindUniqueArgs>(args: SelectSubset<T, ArtistProfileFindUniqueArgs<ExtArgs>>): Prisma__ArtistProfileClient<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtistProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistProfileFindUniqueOrThrowArgs} args - Arguments to find a ArtistProfile
     * @example
     * // Get one ArtistProfile
     * const artistProfile = await prisma.artistProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistProfileClient<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistProfileFindFirstArgs} args - Arguments to find a ArtistProfile
     * @example
     * // Get one ArtistProfile
     * const artistProfile = await prisma.artistProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistProfileFindFirstArgs>(args?: SelectSubset<T, ArtistProfileFindFirstArgs<ExtArgs>>): Prisma__ArtistProfileClient<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistProfileFindFirstOrThrowArgs} args - Arguments to find a ArtistProfile
     * @example
     * // Get one ArtistProfile
     * const artistProfile = await prisma.artistProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistProfileClient<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtistProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistProfiles
     * const artistProfiles = await prisma.artistProfile.findMany()
     * 
     * // Get first 10 ArtistProfiles
     * const artistProfiles = await prisma.artistProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistProfileWithIdOnly = await prisma.artistProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistProfileFindManyArgs>(args?: SelectSubset<T, ArtistProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtistProfile.
     * @param {ArtistProfileCreateArgs} args - Arguments to create a ArtistProfile.
     * @example
     * // Create one ArtistProfile
     * const ArtistProfile = await prisma.artistProfile.create({
     *   data: {
     *     // ... data to create a ArtistProfile
     *   }
     * })
     * 
     */
    create<T extends ArtistProfileCreateArgs>(args: SelectSubset<T, ArtistProfileCreateArgs<ExtArgs>>): Prisma__ArtistProfileClient<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtistProfiles.
     * @param {ArtistProfileCreateManyArgs} args - Arguments to create many ArtistProfiles.
     * @example
     * // Create many ArtistProfiles
     * const artistProfile = await prisma.artistProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistProfileCreateManyArgs>(args?: SelectSubset<T, ArtistProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtistProfiles and returns the data saved in the database.
     * @param {ArtistProfileCreateManyAndReturnArgs} args - Arguments to create many ArtistProfiles.
     * @example
     * // Create many ArtistProfiles
     * const artistProfile = await prisma.artistProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtistProfiles and only return the `id`
     * const artistProfileWithIdOnly = await prisma.artistProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtistProfile.
     * @param {ArtistProfileDeleteArgs} args - Arguments to delete one ArtistProfile.
     * @example
     * // Delete one ArtistProfile
     * const ArtistProfile = await prisma.artistProfile.delete({
     *   where: {
     *     // ... filter to delete one ArtistProfile
     *   }
     * })
     * 
     */
    delete<T extends ArtistProfileDeleteArgs>(args: SelectSubset<T, ArtistProfileDeleteArgs<ExtArgs>>): Prisma__ArtistProfileClient<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtistProfile.
     * @param {ArtistProfileUpdateArgs} args - Arguments to update one ArtistProfile.
     * @example
     * // Update one ArtistProfile
     * const artistProfile = await prisma.artistProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistProfileUpdateArgs>(args: SelectSubset<T, ArtistProfileUpdateArgs<ExtArgs>>): Prisma__ArtistProfileClient<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtistProfiles.
     * @param {ArtistProfileDeleteManyArgs} args - Arguments to filter ArtistProfiles to delete.
     * @example
     * // Delete a few ArtistProfiles
     * const { count } = await prisma.artistProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistProfileDeleteManyArgs>(args?: SelectSubset<T, ArtistProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistProfiles
     * const artistProfile = await prisma.artistProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistProfileUpdateManyArgs>(args: SelectSubset<T, ArtistProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistProfiles and returns the data updated in the database.
     * @param {ArtistProfileUpdateManyAndReturnArgs} args - Arguments to update many ArtistProfiles.
     * @example
     * // Update many ArtistProfiles
     * const artistProfile = await prisma.artistProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtistProfiles and only return the `id`
     * const artistProfileWithIdOnly = await prisma.artistProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtistProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtistProfile.
     * @param {ArtistProfileUpsertArgs} args - Arguments to update or create a ArtistProfile.
     * @example
     * // Update or create a ArtistProfile
     * const artistProfile = await prisma.artistProfile.upsert({
     *   create: {
     *     // ... data to create a ArtistProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistProfile we want to update
     *   }
     * })
     */
    upsert<T extends ArtistProfileUpsertArgs>(args: SelectSubset<T, ArtistProfileUpsertArgs<ExtArgs>>): Prisma__ArtistProfileClient<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtistProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistProfileCountArgs} args - Arguments to filter ArtistProfiles to count.
     * @example
     * // Count the number of ArtistProfiles
     * const count = await prisma.artistProfile.count({
     *   where: {
     *     // ... the filter for the ArtistProfiles we want to count
     *   }
     * })
    **/
    count<T extends ArtistProfileCountArgs>(
      args?: Subset<T, ArtistProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistProfileAggregateArgs>(args: Subset<T, ArtistProfileAggregateArgs>): Prisma.PrismaPromise<GetArtistProfileAggregateType<T>>

    /**
     * Group by ArtistProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistProfileGroupByArgs} args - Group by arguments.
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
      T extends ArtistProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistProfileGroupByArgs['orderBy'] }
        : { orderBy?: ArtistProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtistProfile model
   */
  readonly fields: ArtistProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Audios<T extends ArtistProfile$AudiosArgs<ExtArgs> = {}>(args?: Subset<T, ArtistProfile$AudiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends ArtistProfile$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, ArtistProfile$subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ArtistProfile model
   */
  interface ArtistProfileFieldRefs {
    readonly id: FieldRef<"ArtistProfile", 'Int'>
    readonly userId: FieldRef<"ArtistProfile", 'Int'>
    readonly bio: FieldRef<"ArtistProfile", 'String'>
    readonly displayName: FieldRef<"ArtistProfile", 'String'>
    readonly gender: FieldRef<"ArtistProfile", 'Gender'>
    readonly avtarUrl: FieldRef<"ArtistProfile", 'String'>
    readonly bannerUrl: FieldRef<"ArtistProfile", 'String'>
    readonly createdAt: FieldRef<"ArtistProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"ArtistProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArtistProfile findUnique
   */
  export type ArtistProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileInclude<ExtArgs> | null
    /**
     * Filter, which ArtistProfile to fetch.
     */
    where: ArtistProfileWhereUniqueInput
  }

  /**
   * ArtistProfile findUniqueOrThrow
   */
  export type ArtistProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileInclude<ExtArgs> | null
    /**
     * Filter, which ArtistProfile to fetch.
     */
    where: ArtistProfileWhereUniqueInput
  }

  /**
   * ArtistProfile findFirst
   */
  export type ArtistProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileInclude<ExtArgs> | null
    /**
     * Filter, which ArtistProfile to fetch.
     */
    where?: ArtistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistProfiles to fetch.
     */
    orderBy?: ArtistProfileOrderByWithRelationInput | ArtistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistProfiles.
     */
    cursor?: ArtistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistProfiles.
     */
    distinct?: ArtistProfileScalarFieldEnum | ArtistProfileScalarFieldEnum[]
  }

  /**
   * ArtistProfile findFirstOrThrow
   */
  export type ArtistProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileInclude<ExtArgs> | null
    /**
     * Filter, which ArtistProfile to fetch.
     */
    where?: ArtistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistProfiles to fetch.
     */
    orderBy?: ArtistProfileOrderByWithRelationInput | ArtistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistProfiles.
     */
    cursor?: ArtistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistProfiles.
     */
    distinct?: ArtistProfileScalarFieldEnum | ArtistProfileScalarFieldEnum[]
  }

  /**
   * ArtistProfile findMany
   */
  export type ArtistProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileInclude<ExtArgs> | null
    /**
     * Filter, which ArtistProfiles to fetch.
     */
    where?: ArtistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistProfiles to fetch.
     */
    orderBy?: ArtistProfileOrderByWithRelationInput | ArtistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistProfiles.
     */
    cursor?: ArtistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistProfiles.
     */
    skip?: number
    distinct?: ArtistProfileScalarFieldEnum | ArtistProfileScalarFieldEnum[]
  }

  /**
   * ArtistProfile create
   */
  export type ArtistProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtistProfile.
     */
    data: XOR<ArtistProfileCreateInput, ArtistProfileUncheckedCreateInput>
  }

  /**
   * ArtistProfile createMany
   */
  export type ArtistProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtistProfiles.
     */
    data: ArtistProfileCreateManyInput | ArtistProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtistProfile createManyAndReturn
   */
  export type ArtistProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * The data used to create many ArtistProfiles.
     */
    data: ArtistProfileCreateManyInput | ArtistProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistProfile update
   */
  export type ArtistProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtistProfile.
     */
    data: XOR<ArtistProfileUpdateInput, ArtistProfileUncheckedUpdateInput>
    /**
     * Choose, which ArtistProfile to update.
     */
    where: ArtistProfileWhereUniqueInput
  }

  /**
   * ArtistProfile updateMany
   */
  export type ArtistProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtistProfiles.
     */
    data: XOR<ArtistProfileUpdateManyMutationInput, ArtistProfileUncheckedUpdateManyInput>
    /**
     * Filter which ArtistProfiles to update
     */
    where?: ArtistProfileWhereInput
    /**
     * Limit how many ArtistProfiles to update.
     */
    limit?: number
  }

  /**
   * ArtistProfile updateManyAndReturn
   */
  export type ArtistProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * The data used to update ArtistProfiles.
     */
    data: XOR<ArtistProfileUpdateManyMutationInput, ArtistProfileUncheckedUpdateManyInput>
    /**
     * Filter which ArtistProfiles to update
     */
    where?: ArtistProfileWhereInput
    /**
     * Limit how many ArtistProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistProfile upsert
   */
  export type ArtistProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtistProfile to update in case it exists.
     */
    where: ArtistProfileWhereUniqueInput
    /**
     * In case the ArtistProfile found by the `where` argument doesn't exist, create a new ArtistProfile with this data.
     */
    create: XOR<ArtistProfileCreateInput, ArtistProfileUncheckedCreateInput>
    /**
     * In case the ArtistProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistProfileUpdateInput, ArtistProfileUncheckedUpdateInput>
  }

  /**
   * ArtistProfile delete
   */
  export type ArtistProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileInclude<ExtArgs> | null
    /**
     * Filter which ArtistProfile to delete.
     */
    where: ArtistProfileWhereUniqueInput
  }

  /**
   * ArtistProfile deleteMany
   */
  export type ArtistProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistProfiles to delete
     */
    where?: ArtistProfileWhereInput
    /**
     * Limit how many ArtistProfiles to delete.
     */
    limit?: number
  }

  /**
   * ArtistProfile.Audios
   */
  export type ArtistProfile$AudiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosInclude<ExtArgs> | null
    where?: AudiosWhereInput
    orderBy?: AudiosOrderByWithRelationInput | AudiosOrderByWithRelationInput[]
    cursor?: AudiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudiosScalarFieldEnum | AudiosScalarFieldEnum[]
  }

  /**
   * ArtistProfile.subscription
   */
  export type ArtistProfile$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * ArtistProfile without action
   */
  export type ArtistProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistProfile
     */
    select?: ArtistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistProfile
     */
    omit?: ArtistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistProfileInclude<ExtArgs> | null
  }


  /**
   * Model Audios
   */

  export type AggregateAudios = {
    _count: AudiosCountAggregateOutputType | null
    _avg: AudiosAvgAggregateOutputType | null
    _sum: AudiosSumAggregateOutputType | null
    _min: AudiosMinAggregateOutputType | null
    _max: AudiosMaxAggregateOutputType | null
  }

  export type AudiosAvgAggregateOutputType = {
    id: number | null
    artistId: number | null
    duration: number | null
    voicedataId: number | null
  }

  export type AudiosSumAggregateOutputType = {
    id: number | null
    artistId: number | null
    duration: number | null
    voicedataId: number | null
  }

  export type AudiosMinAggregateOutputType = {
    id: number | null
    artistId: number | null
    audioUrl: string | null
    title: string | null
    desc: string | null
    duration: number | null
    voicedataId: number | null
    createdAt: Date | null
    public: boolean | null
  }

  export type AudiosMaxAggregateOutputType = {
    id: number | null
    artistId: number | null
    audioUrl: string | null
    title: string | null
    desc: string | null
    duration: number | null
    voicedataId: number | null
    createdAt: Date | null
    public: boolean | null
  }

  export type AudiosCountAggregateOutputType = {
    id: number
    artistId: number
    audioUrl: number
    title: number
    desc: number
    duration: number
    voicedataId: number
    createdAt: number
    public: number
    _all: number
  }


  export type AudiosAvgAggregateInputType = {
    id?: true
    artistId?: true
    duration?: true
    voicedataId?: true
  }

  export type AudiosSumAggregateInputType = {
    id?: true
    artistId?: true
    duration?: true
    voicedataId?: true
  }

  export type AudiosMinAggregateInputType = {
    id?: true
    artistId?: true
    audioUrl?: true
    title?: true
    desc?: true
    duration?: true
    voicedataId?: true
    createdAt?: true
    public?: true
  }

  export type AudiosMaxAggregateInputType = {
    id?: true
    artistId?: true
    audioUrl?: true
    title?: true
    desc?: true
    duration?: true
    voicedataId?: true
    createdAt?: true
    public?: true
  }

  export type AudiosCountAggregateInputType = {
    id?: true
    artistId?: true
    audioUrl?: true
    title?: true
    desc?: true
    duration?: true
    voicedataId?: true
    createdAt?: true
    public?: true
    _all?: true
  }

  export type AudiosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audios to aggregate.
     */
    where?: AudiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audios to fetch.
     */
    orderBy?: AudiosOrderByWithRelationInput | AudiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audios
    **/
    _count?: true | AudiosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudiosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudiosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudiosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudiosMaxAggregateInputType
  }

  export type GetAudiosAggregateType<T extends AudiosAggregateArgs> = {
        [P in keyof T & keyof AggregateAudios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudios[P]>
      : GetScalarType<T[P], AggregateAudios[P]>
  }




  export type AudiosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudiosWhereInput
    orderBy?: AudiosOrderByWithAggregationInput | AudiosOrderByWithAggregationInput[]
    by: AudiosScalarFieldEnum[] | AudiosScalarFieldEnum
    having?: AudiosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudiosCountAggregateInputType | true
    _avg?: AudiosAvgAggregateInputType
    _sum?: AudiosSumAggregateInputType
    _min?: AudiosMinAggregateInputType
    _max?: AudiosMaxAggregateInputType
  }

  export type AudiosGroupByOutputType = {
    id: number
    artistId: number
    audioUrl: string
    title: string
    desc: string
    duration: number
    voicedataId: number
    createdAt: Date
    public: boolean
    _count: AudiosCountAggregateOutputType | null
    _avg: AudiosAvgAggregateOutputType | null
    _sum: AudiosSumAggregateOutputType | null
    _min: AudiosMinAggregateOutputType | null
    _max: AudiosMaxAggregateOutputType | null
  }

  type GetAudiosGroupByPayload<T extends AudiosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudiosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudiosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudiosGroupByOutputType[P]>
            : GetScalarType<T[P], AudiosGroupByOutputType[P]>
        }
      >
    >


  export type AudiosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistId?: boolean
    audioUrl?: boolean
    title?: boolean
    desc?: boolean
    duration?: boolean
    voicedataId?: boolean
    createdAt?: boolean
    public?: boolean
    artist?: boolean | ArtistProfileDefaultArgs<ExtArgs>
    voiceData?: boolean | VoiceMetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audios"]>

  export type AudiosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistId?: boolean
    audioUrl?: boolean
    title?: boolean
    desc?: boolean
    duration?: boolean
    voicedataId?: boolean
    createdAt?: boolean
    public?: boolean
    artist?: boolean | ArtistProfileDefaultArgs<ExtArgs>
    voiceData?: boolean | VoiceMetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audios"]>

  export type AudiosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistId?: boolean
    audioUrl?: boolean
    title?: boolean
    desc?: boolean
    duration?: boolean
    voicedataId?: boolean
    createdAt?: boolean
    public?: boolean
    artist?: boolean | ArtistProfileDefaultArgs<ExtArgs>
    voiceData?: boolean | VoiceMetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audios"]>

  export type AudiosSelectScalar = {
    id?: boolean
    artistId?: boolean
    audioUrl?: boolean
    title?: boolean
    desc?: boolean
    duration?: boolean
    voicedataId?: boolean
    createdAt?: boolean
    public?: boolean
  }

  export type AudiosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "artistId" | "audioUrl" | "title" | "desc" | "duration" | "voicedataId" | "createdAt" | "public", ExtArgs["result"]["audios"]>
  export type AudiosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistProfileDefaultArgs<ExtArgs>
    voiceData?: boolean | VoiceMetaDefaultArgs<ExtArgs>
  }
  export type AudiosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistProfileDefaultArgs<ExtArgs>
    voiceData?: boolean | VoiceMetaDefaultArgs<ExtArgs>
  }
  export type AudiosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistProfileDefaultArgs<ExtArgs>
    voiceData?: boolean | VoiceMetaDefaultArgs<ExtArgs>
  }

  export type $AudiosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Audios"
    objects: {
      artist: Prisma.$ArtistProfilePayload<ExtArgs>
      voiceData: Prisma.$VoiceMetaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      artistId: number
      audioUrl: string
      title: string
      desc: string
      duration: number
      voicedataId: number
      createdAt: Date
      public: boolean
    }, ExtArgs["result"]["audios"]>
    composites: {}
  }

  type AudiosGetPayload<S extends boolean | null | undefined | AudiosDefaultArgs> = $Result.GetResult<Prisma.$AudiosPayload, S>

  type AudiosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudiosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudiosCountAggregateInputType | true
    }

  export interface AudiosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Audios'], meta: { name: 'Audios' } }
    /**
     * Find zero or one Audios that matches the filter.
     * @param {AudiosFindUniqueArgs} args - Arguments to find a Audios
     * @example
     * // Get one Audios
     * const audios = await prisma.audios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudiosFindUniqueArgs>(args: SelectSubset<T, AudiosFindUniqueArgs<ExtArgs>>): Prisma__AudiosClient<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudiosFindUniqueOrThrowArgs} args - Arguments to find a Audios
     * @example
     * // Get one Audios
     * const audios = await prisma.audios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudiosFindUniqueOrThrowArgs>(args: SelectSubset<T, AudiosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudiosClient<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiosFindFirstArgs} args - Arguments to find a Audios
     * @example
     * // Get one Audios
     * const audios = await prisma.audios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudiosFindFirstArgs>(args?: SelectSubset<T, AudiosFindFirstArgs<ExtArgs>>): Prisma__AudiosClient<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiosFindFirstOrThrowArgs} args - Arguments to find a Audios
     * @example
     * // Get one Audios
     * const audios = await prisma.audios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudiosFindFirstOrThrowArgs>(args?: SelectSubset<T, AudiosFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudiosClient<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audios
     * const audios = await prisma.audios.findMany()
     * 
     * // Get first 10 Audios
     * const audios = await prisma.audios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audiosWithIdOnly = await prisma.audios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudiosFindManyArgs>(args?: SelectSubset<T, AudiosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audios.
     * @param {AudiosCreateArgs} args - Arguments to create a Audios.
     * @example
     * // Create one Audios
     * const Audios = await prisma.audios.create({
     *   data: {
     *     // ... data to create a Audios
     *   }
     * })
     * 
     */
    create<T extends AudiosCreateArgs>(args: SelectSubset<T, AudiosCreateArgs<ExtArgs>>): Prisma__AudiosClient<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audios.
     * @param {AudiosCreateManyArgs} args - Arguments to create many Audios.
     * @example
     * // Create many Audios
     * const audios = await prisma.audios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudiosCreateManyArgs>(args?: SelectSubset<T, AudiosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audios and returns the data saved in the database.
     * @param {AudiosCreateManyAndReturnArgs} args - Arguments to create many Audios.
     * @example
     * // Create many Audios
     * const audios = await prisma.audios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audios and only return the `id`
     * const audiosWithIdOnly = await prisma.audios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudiosCreateManyAndReturnArgs>(args?: SelectSubset<T, AudiosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audios.
     * @param {AudiosDeleteArgs} args - Arguments to delete one Audios.
     * @example
     * // Delete one Audios
     * const Audios = await prisma.audios.delete({
     *   where: {
     *     // ... filter to delete one Audios
     *   }
     * })
     * 
     */
    delete<T extends AudiosDeleteArgs>(args: SelectSubset<T, AudiosDeleteArgs<ExtArgs>>): Prisma__AudiosClient<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audios.
     * @param {AudiosUpdateArgs} args - Arguments to update one Audios.
     * @example
     * // Update one Audios
     * const audios = await prisma.audios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudiosUpdateArgs>(args: SelectSubset<T, AudiosUpdateArgs<ExtArgs>>): Prisma__AudiosClient<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audios.
     * @param {AudiosDeleteManyArgs} args - Arguments to filter Audios to delete.
     * @example
     * // Delete a few Audios
     * const { count } = await prisma.audios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudiosDeleteManyArgs>(args?: SelectSubset<T, AudiosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audios
     * const audios = await prisma.audios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudiosUpdateManyArgs>(args: SelectSubset<T, AudiosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audios and returns the data updated in the database.
     * @param {AudiosUpdateManyAndReturnArgs} args - Arguments to update many Audios.
     * @example
     * // Update many Audios
     * const audios = await prisma.audios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audios and only return the `id`
     * const audiosWithIdOnly = await prisma.audios.updateManyAndReturn({
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
    updateManyAndReturn<T extends AudiosUpdateManyAndReturnArgs>(args: SelectSubset<T, AudiosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audios.
     * @param {AudiosUpsertArgs} args - Arguments to update or create a Audios.
     * @example
     * // Update or create a Audios
     * const audios = await prisma.audios.upsert({
     *   create: {
     *     // ... data to create a Audios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audios we want to update
     *   }
     * })
     */
    upsert<T extends AudiosUpsertArgs>(args: SelectSubset<T, AudiosUpsertArgs<ExtArgs>>): Prisma__AudiosClient<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiosCountArgs} args - Arguments to filter Audios to count.
     * @example
     * // Count the number of Audios
     * const count = await prisma.audios.count({
     *   where: {
     *     // ... the filter for the Audios we want to count
     *   }
     * })
    **/
    count<T extends AudiosCountArgs>(
      args?: Subset<T, AudiosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudiosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudiosAggregateArgs>(args: Subset<T, AudiosAggregateArgs>): Prisma.PrismaPromise<GetAudiosAggregateType<T>>

    /**
     * Group by Audios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiosGroupByArgs} args - Group by arguments.
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
      T extends AudiosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudiosGroupByArgs['orderBy'] }
        : { orderBy?: AudiosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudiosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudiosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Audios model
   */
  readonly fields: AudiosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Audios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudiosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artist<T extends ArtistProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistProfileDefaultArgs<ExtArgs>>): Prisma__ArtistProfileClient<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voiceData<T extends VoiceMetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoiceMetaDefaultArgs<ExtArgs>>): Prisma__VoiceMetaClient<$Result.GetResult<Prisma.$VoiceMetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Audios model
   */
  interface AudiosFieldRefs {
    readonly id: FieldRef<"Audios", 'Int'>
    readonly artistId: FieldRef<"Audios", 'Int'>
    readonly audioUrl: FieldRef<"Audios", 'String'>
    readonly title: FieldRef<"Audios", 'String'>
    readonly desc: FieldRef<"Audios", 'String'>
    readonly duration: FieldRef<"Audios", 'Int'>
    readonly voicedataId: FieldRef<"Audios", 'Int'>
    readonly createdAt: FieldRef<"Audios", 'DateTime'>
    readonly public: FieldRef<"Audios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Audios findUnique
   */
  export type AudiosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosInclude<ExtArgs> | null
    /**
     * Filter, which Audios to fetch.
     */
    where: AudiosWhereUniqueInput
  }

  /**
   * Audios findUniqueOrThrow
   */
  export type AudiosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosInclude<ExtArgs> | null
    /**
     * Filter, which Audios to fetch.
     */
    where: AudiosWhereUniqueInput
  }

  /**
   * Audios findFirst
   */
  export type AudiosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosInclude<ExtArgs> | null
    /**
     * Filter, which Audios to fetch.
     */
    where?: AudiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audios to fetch.
     */
    orderBy?: AudiosOrderByWithRelationInput | AudiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audios.
     */
    cursor?: AudiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audios.
     */
    distinct?: AudiosScalarFieldEnum | AudiosScalarFieldEnum[]
  }

  /**
   * Audios findFirstOrThrow
   */
  export type AudiosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosInclude<ExtArgs> | null
    /**
     * Filter, which Audios to fetch.
     */
    where?: AudiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audios to fetch.
     */
    orderBy?: AudiosOrderByWithRelationInput | AudiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audios.
     */
    cursor?: AudiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audios.
     */
    distinct?: AudiosScalarFieldEnum | AudiosScalarFieldEnum[]
  }

  /**
   * Audios findMany
   */
  export type AudiosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosInclude<ExtArgs> | null
    /**
     * Filter, which Audios to fetch.
     */
    where?: AudiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audios to fetch.
     */
    orderBy?: AudiosOrderByWithRelationInput | AudiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audios.
     */
    cursor?: AudiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audios.
     */
    skip?: number
    distinct?: AudiosScalarFieldEnum | AudiosScalarFieldEnum[]
  }

  /**
   * Audios create
   */
  export type AudiosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosInclude<ExtArgs> | null
    /**
     * The data needed to create a Audios.
     */
    data: XOR<AudiosCreateInput, AudiosUncheckedCreateInput>
  }

  /**
   * Audios createMany
   */
  export type AudiosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Audios.
     */
    data: AudiosCreateManyInput | AudiosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Audios createManyAndReturn
   */
  export type AudiosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * The data used to create many Audios.
     */
    data: AudiosCreateManyInput | AudiosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audios update
   */
  export type AudiosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosInclude<ExtArgs> | null
    /**
     * The data needed to update a Audios.
     */
    data: XOR<AudiosUpdateInput, AudiosUncheckedUpdateInput>
    /**
     * Choose, which Audios to update.
     */
    where: AudiosWhereUniqueInput
  }

  /**
   * Audios updateMany
   */
  export type AudiosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Audios.
     */
    data: XOR<AudiosUpdateManyMutationInput, AudiosUncheckedUpdateManyInput>
    /**
     * Filter which Audios to update
     */
    where?: AudiosWhereInput
    /**
     * Limit how many Audios to update.
     */
    limit?: number
  }

  /**
   * Audios updateManyAndReturn
   */
  export type AudiosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * The data used to update Audios.
     */
    data: XOR<AudiosUpdateManyMutationInput, AudiosUncheckedUpdateManyInput>
    /**
     * Filter which Audios to update
     */
    where?: AudiosWhereInput
    /**
     * Limit how many Audios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audios upsert
   */
  export type AudiosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosInclude<ExtArgs> | null
    /**
     * The filter to search for the Audios to update in case it exists.
     */
    where: AudiosWhereUniqueInput
    /**
     * In case the Audios found by the `where` argument doesn't exist, create a new Audios with this data.
     */
    create: XOR<AudiosCreateInput, AudiosUncheckedCreateInput>
    /**
     * In case the Audios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudiosUpdateInput, AudiosUncheckedUpdateInput>
  }

  /**
   * Audios delete
   */
  export type AudiosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosInclude<ExtArgs> | null
    /**
     * Filter which Audios to delete.
     */
    where: AudiosWhereUniqueInput
  }

  /**
   * Audios deleteMany
   */
  export type AudiosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audios to delete
     */
    where?: AudiosWhereInput
    /**
     * Limit how many Audios to delete.
     */
    limit?: number
  }

  /**
   * Audios without action
   */
  export type AudiosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosInclude<ExtArgs> | null
  }


  /**
   * Model VoiceMeta
   */

  export type AggregateVoiceMeta = {
    _count: VoiceMetaCountAggregateOutputType | null
    _avg: VoiceMetaAvgAggregateOutputType | null
    _sum: VoiceMetaSumAggregateOutputType | null
    _min: VoiceMetaMinAggregateOutputType | null
    _max: VoiceMetaMaxAggregateOutputType | null
  }

  export type VoiceMetaAvgAggregateOutputType = {
    id: number | null
    femaleCount: number | null
    maleCount: number | null
    nonBinaryCount: number | null
    transCount: number | null
  }

  export type VoiceMetaSumAggregateOutputType = {
    id: number | null
    femaleCount: number | null
    maleCount: number | null
    nonBinaryCount: number | null
    transCount: number | null
  }

  export type VoiceMetaMinAggregateOutputType = {
    id: number | null
    domVoice: $Enums.Gender | null
    femaleCount: number | null
    maleCount: number | null
    nonBinaryCount: number | null
    transCount: number | null
  }

  export type VoiceMetaMaxAggregateOutputType = {
    id: number | null
    domVoice: $Enums.Gender | null
    femaleCount: number | null
    maleCount: number | null
    nonBinaryCount: number | null
    transCount: number | null
  }

  export type VoiceMetaCountAggregateOutputType = {
    id: number
    domVoice: number
    femaleCount: number
    maleCount: number
    nonBinaryCount: number
    transCount: number
    _all: number
  }


  export type VoiceMetaAvgAggregateInputType = {
    id?: true
    femaleCount?: true
    maleCount?: true
    nonBinaryCount?: true
    transCount?: true
  }

  export type VoiceMetaSumAggregateInputType = {
    id?: true
    femaleCount?: true
    maleCount?: true
    nonBinaryCount?: true
    transCount?: true
  }

  export type VoiceMetaMinAggregateInputType = {
    id?: true
    domVoice?: true
    femaleCount?: true
    maleCount?: true
    nonBinaryCount?: true
    transCount?: true
  }

  export type VoiceMetaMaxAggregateInputType = {
    id?: true
    domVoice?: true
    femaleCount?: true
    maleCount?: true
    nonBinaryCount?: true
    transCount?: true
  }

  export type VoiceMetaCountAggregateInputType = {
    id?: true
    domVoice?: true
    femaleCount?: true
    maleCount?: true
    nonBinaryCount?: true
    transCount?: true
    _all?: true
  }

  export type VoiceMetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoiceMeta to aggregate.
     */
    where?: VoiceMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceMetas to fetch.
     */
    orderBy?: VoiceMetaOrderByWithRelationInput | VoiceMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoiceMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VoiceMetas
    **/
    _count?: true | VoiceMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoiceMetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoiceMetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoiceMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoiceMetaMaxAggregateInputType
  }

  export type GetVoiceMetaAggregateType<T extends VoiceMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateVoiceMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoiceMeta[P]>
      : GetScalarType<T[P], AggregateVoiceMeta[P]>
  }




  export type VoiceMetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceMetaWhereInput
    orderBy?: VoiceMetaOrderByWithAggregationInput | VoiceMetaOrderByWithAggregationInput[]
    by: VoiceMetaScalarFieldEnum[] | VoiceMetaScalarFieldEnum
    having?: VoiceMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoiceMetaCountAggregateInputType | true
    _avg?: VoiceMetaAvgAggregateInputType
    _sum?: VoiceMetaSumAggregateInputType
    _min?: VoiceMetaMinAggregateInputType
    _max?: VoiceMetaMaxAggregateInputType
  }

  export type VoiceMetaGroupByOutputType = {
    id: number
    domVoice: $Enums.Gender
    femaleCount: number
    maleCount: number
    nonBinaryCount: number
    transCount: number
    _count: VoiceMetaCountAggregateOutputType | null
    _avg: VoiceMetaAvgAggregateOutputType | null
    _sum: VoiceMetaSumAggregateOutputType | null
    _min: VoiceMetaMinAggregateOutputType | null
    _max: VoiceMetaMaxAggregateOutputType | null
  }

  type GetVoiceMetaGroupByPayload<T extends VoiceMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoiceMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoiceMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoiceMetaGroupByOutputType[P]>
            : GetScalarType<T[P], VoiceMetaGroupByOutputType[P]>
        }
      >
    >


  export type VoiceMetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domVoice?: boolean
    femaleCount?: boolean
    maleCount?: boolean
    nonBinaryCount?: boolean
    transCount?: boolean
    Audio?: boolean | VoiceMeta$AudioArgs<ExtArgs>
  }, ExtArgs["result"]["voiceMeta"]>

  export type VoiceMetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domVoice?: boolean
    femaleCount?: boolean
    maleCount?: boolean
    nonBinaryCount?: boolean
    transCount?: boolean
  }, ExtArgs["result"]["voiceMeta"]>

  export type VoiceMetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domVoice?: boolean
    femaleCount?: boolean
    maleCount?: boolean
    nonBinaryCount?: boolean
    transCount?: boolean
  }, ExtArgs["result"]["voiceMeta"]>

  export type VoiceMetaSelectScalar = {
    id?: boolean
    domVoice?: boolean
    femaleCount?: boolean
    maleCount?: boolean
    nonBinaryCount?: boolean
    transCount?: boolean
  }

  export type VoiceMetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domVoice" | "femaleCount" | "maleCount" | "nonBinaryCount" | "transCount", ExtArgs["result"]["voiceMeta"]>
  export type VoiceMetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Audio?: boolean | VoiceMeta$AudioArgs<ExtArgs>
  }
  export type VoiceMetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VoiceMetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VoiceMetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VoiceMeta"
    objects: {
      Audio: Prisma.$AudiosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domVoice: $Enums.Gender
      femaleCount: number
      maleCount: number
      nonBinaryCount: number
      transCount: number
    }, ExtArgs["result"]["voiceMeta"]>
    composites: {}
  }

  type VoiceMetaGetPayload<S extends boolean | null | undefined | VoiceMetaDefaultArgs> = $Result.GetResult<Prisma.$VoiceMetaPayload, S>

  type VoiceMetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoiceMetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoiceMetaCountAggregateInputType | true
    }

  export interface VoiceMetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VoiceMeta'], meta: { name: 'VoiceMeta' } }
    /**
     * Find zero or one VoiceMeta that matches the filter.
     * @param {VoiceMetaFindUniqueArgs} args - Arguments to find a VoiceMeta
     * @example
     * // Get one VoiceMeta
     * const voiceMeta = await prisma.voiceMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoiceMetaFindUniqueArgs>(args: SelectSubset<T, VoiceMetaFindUniqueArgs<ExtArgs>>): Prisma__VoiceMetaClient<$Result.GetResult<Prisma.$VoiceMetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VoiceMeta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoiceMetaFindUniqueOrThrowArgs} args - Arguments to find a VoiceMeta
     * @example
     * // Get one VoiceMeta
     * const voiceMeta = await prisma.voiceMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoiceMetaFindUniqueOrThrowArgs>(args: SelectSubset<T, VoiceMetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoiceMetaClient<$Result.GetResult<Prisma.$VoiceMetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoiceMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMetaFindFirstArgs} args - Arguments to find a VoiceMeta
     * @example
     * // Get one VoiceMeta
     * const voiceMeta = await prisma.voiceMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoiceMetaFindFirstArgs>(args?: SelectSubset<T, VoiceMetaFindFirstArgs<ExtArgs>>): Prisma__VoiceMetaClient<$Result.GetResult<Prisma.$VoiceMetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoiceMeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMetaFindFirstOrThrowArgs} args - Arguments to find a VoiceMeta
     * @example
     * // Get one VoiceMeta
     * const voiceMeta = await prisma.voiceMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoiceMetaFindFirstOrThrowArgs>(args?: SelectSubset<T, VoiceMetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoiceMetaClient<$Result.GetResult<Prisma.$VoiceMetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VoiceMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VoiceMetas
     * const voiceMetas = await prisma.voiceMeta.findMany()
     * 
     * // Get first 10 VoiceMetas
     * const voiceMetas = await prisma.voiceMeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voiceMetaWithIdOnly = await prisma.voiceMeta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoiceMetaFindManyArgs>(args?: SelectSubset<T, VoiceMetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceMetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VoiceMeta.
     * @param {VoiceMetaCreateArgs} args - Arguments to create a VoiceMeta.
     * @example
     * // Create one VoiceMeta
     * const VoiceMeta = await prisma.voiceMeta.create({
     *   data: {
     *     // ... data to create a VoiceMeta
     *   }
     * })
     * 
     */
    create<T extends VoiceMetaCreateArgs>(args: SelectSubset<T, VoiceMetaCreateArgs<ExtArgs>>): Prisma__VoiceMetaClient<$Result.GetResult<Prisma.$VoiceMetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VoiceMetas.
     * @param {VoiceMetaCreateManyArgs} args - Arguments to create many VoiceMetas.
     * @example
     * // Create many VoiceMetas
     * const voiceMeta = await prisma.voiceMeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoiceMetaCreateManyArgs>(args?: SelectSubset<T, VoiceMetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VoiceMetas and returns the data saved in the database.
     * @param {VoiceMetaCreateManyAndReturnArgs} args - Arguments to create many VoiceMetas.
     * @example
     * // Create many VoiceMetas
     * const voiceMeta = await prisma.voiceMeta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VoiceMetas and only return the `id`
     * const voiceMetaWithIdOnly = await prisma.voiceMeta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoiceMetaCreateManyAndReturnArgs>(args?: SelectSubset<T, VoiceMetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceMetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VoiceMeta.
     * @param {VoiceMetaDeleteArgs} args - Arguments to delete one VoiceMeta.
     * @example
     * // Delete one VoiceMeta
     * const VoiceMeta = await prisma.voiceMeta.delete({
     *   where: {
     *     // ... filter to delete one VoiceMeta
     *   }
     * })
     * 
     */
    delete<T extends VoiceMetaDeleteArgs>(args: SelectSubset<T, VoiceMetaDeleteArgs<ExtArgs>>): Prisma__VoiceMetaClient<$Result.GetResult<Prisma.$VoiceMetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VoiceMeta.
     * @param {VoiceMetaUpdateArgs} args - Arguments to update one VoiceMeta.
     * @example
     * // Update one VoiceMeta
     * const voiceMeta = await prisma.voiceMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoiceMetaUpdateArgs>(args: SelectSubset<T, VoiceMetaUpdateArgs<ExtArgs>>): Prisma__VoiceMetaClient<$Result.GetResult<Prisma.$VoiceMetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VoiceMetas.
     * @param {VoiceMetaDeleteManyArgs} args - Arguments to filter VoiceMetas to delete.
     * @example
     * // Delete a few VoiceMetas
     * const { count } = await prisma.voiceMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoiceMetaDeleteManyArgs>(args?: SelectSubset<T, VoiceMetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoiceMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VoiceMetas
     * const voiceMeta = await prisma.voiceMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoiceMetaUpdateManyArgs>(args: SelectSubset<T, VoiceMetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoiceMetas and returns the data updated in the database.
     * @param {VoiceMetaUpdateManyAndReturnArgs} args - Arguments to update many VoiceMetas.
     * @example
     * // Update many VoiceMetas
     * const voiceMeta = await prisma.voiceMeta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VoiceMetas and only return the `id`
     * const voiceMetaWithIdOnly = await prisma.voiceMeta.updateManyAndReturn({
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
    updateManyAndReturn<T extends VoiceMetaUpdateManyAndReturnArgs>(args: SelectSubset<T, VoiceMetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceMetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VoiceMeta.
     * @param {VoiceMetaUpsertArgs} args - Arguments to update or create a VoiceMeta.
     * @example
     * // Update or create a VoiceMeta
     * const voiceMeta = await prisma.voiceMeta.upsert({
     *   create: {
     *     // ... data to create a VoiceMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VoiceMeta we want to update
     *   }
     * })
     */
    upsert<T extends VoiceMetaUpsertArgs>(args: SelectSubset<T, VoiceMetaUpsertArgs<ExtArgs>>): Prisma__VoiceMetaClient<$Result.GetResult<Prisma.$VoiceMetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VoiceMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMetaCountArgs} args - Arguments to filter VoiceMetas to count.
     * @example
     * // Count the number of VoiceMetas
     * const count = await prisma.voiceMeta.count({
     *   where: {
     *     // ... the filter for the VoiceMetas we want to count
     *   }
     * })
    **/
    count<T extends VoiceMetaCountArgs>(
      args?: Subset<T, VoiceMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoiceMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VoiceMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoiceMetaAggregateArgs>(args: Subset<T, VoiceMetaAggregateArgs>): Prisma.PrismaPromise<GetVoiceMetaAggregateType<T>>

    /**
     * Group by VoiceMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMetaGroupByArgs} args - Group by arguments.
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
      T extends VoiceMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoiceMetaGroupByArgs['orderBy'] }
        : { orderBy?: VoiceMetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoiceMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoiceMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VoiceMeta model
   */
  readonly fields: VoiceMetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VoiceMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoiceMetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Audio<T extends VoiceMeta$AudioArgs<ExtArgs> = {}>(args?: Subset<T, VoiceMeta$AudioArgs<ExtArgs>>): Prisma__AudiosClient<$Result.GetResult<Prisma.$AudiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VoiceMeta model
   */
  interface VoiceMetaFieldRefs {
    readonly id: FieldRef<"VoiceMeta", 'Int'>
    readonly domVoice: FieldRef<"VoiceMeta", 'Gender'>
    readonly femaleCount: FieldRef<"VoiceMeta", 'Int'>
    readonly maleCount: FieldRef<"VoiceMeta", 'Int'>
    readonly nonBinaryCount: FieldRef<"VoiceMeta", 'Int'>
    readonly transCount: FieldRef<"VoiceMeta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VoiceMeta findUnique
   */
  export type VoiceMetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMeta
     */
    select?: VoiceMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMeta
     */
    omit?: VoiceMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceMetaInclude<ExtArgs> | null
    /**
     * Filter, which VoiceMeta to fetch.
     */
    where: VoiceMetaWhereUniqueInput
  }

  /**
   * VoiceMeta findUniqueOrThrow
   */
  export type VoiceMetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMeta
     */
    select?: VoiceMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMeta
     */
    omit?: VoiceMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceMetaInclude<ExtArgs> | null
    /**
     * Filter, which VoiceMeta to fetch.
     */
    where: VoiceMetaWhereUniqueInput
  }

  /**
   * VoiceMeta findFirst
   */
  export type VoiceMetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMeta
     */
    select?: VoiceMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMeta
     */
    omit?: VoiceMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceMetaInclude<ExtArgs> | null
    /**
     * Filter, which VoiceMeta to fetch.
     */
    where?: VoiceMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceMetas to fetch.
     */
    orderBy?: VoiceMetaOrderByWithRelationInput | VoiceMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoiceMetas.
     */
    cursor?: VoiceMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceMetas.
     */
    distinct?: VoiceMetaScalarFieldEnum | VoiceMetaScalarFieldEnum[]
  }

  /**
   * VoiceMeta findFirstOrThrow
   */
  export type VoiceMetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMeta
     */
    select?: VoiceMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMeta
     */
    omit?: VoiceMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceMetaInclude<ExtArgs> | null
    /**
     * Filter, which VoiceMeta to fetch.
     */
    where?: VoiceMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceMetas to fetch.
     */
    orderBy?: VoiceMetaOrderByWithRelationInput | VoiceMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoiceMetas.
     */
    cursor?: VoiceMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceMetas.
     */
    distinct?: VoiceMetaScalarFieldEnum | VoiceMetaScalarFieldEnum[]
  }

  /**
   * VoiceMeta findMany
   */
  export type VoiceMetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMeta
     */
    select?: VoiceMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMeta
     */
    omit?: VoiceMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceMetaInclude<ExtArgs> | null
    /**
     * Filter, which VoiceMetas to fetch.
     */
    where?: VoiceMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceMetas to fetch.
     */
    orderBy?: VoiceMetaOrderByWithRelationInput | VoiceMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VoiceMetas.
     */
    cursor?: VoiceMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceMetas.
     */
    skip?: number
    distinct?: VoiceMetaScalarFieldEnum | VoiceMetaScalarFieldEnum[]
  }

  /**
   * VoiceMeta create
   */
  export type VoiceMetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMeta
     */
    select?: VoiceMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMeta
     */
    omit?: VoiceMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceMetaInclude<ExtArgs> | null
    /**
     * The data needed to create a VoiceMeta.
     */
    data: XOR<VoiceMetaCreateInput, VoiceMetaUncheckedCreateInput>
  }

  /**
   * VoiceMeta createMany
   */
  export type VoiceMetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VoiceMetas.
     */
    data: VoiceMetaCreateManyInput | VoiceMetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VoiceMeta createManyAndReturn
   */
  export type VoiceMetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMeta
     */
    select?: VoiceMetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMeta
     */
    omit?: VoiceMetaOmit<ExtArgs> | null
    /**
     * The data used to create many VoiceMetas.
     */
    data: VoiceMetaCreateManyInput | VoiceMetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VoiceMeta update
   */
  export type VoiceMetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMeta
     */
    select?: VoiceMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMeta
     */
    omit?: VoiceMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceMetaInclude<ExtArgs> | null
    /**
     * The data needed to update a VoiceMeta.
     */
    data: XOR<VoiceMetaUpdateInput, VoiceMetaUncheckedUpdateInput>
    /**
     * Choose, which VoiceMeta to update.
     */
    where: VoiceMetaWhereUniqueInput
  }

  /**
   * VoiceMeta updateMany
   */
  export type VoiceMetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VoiceMetas.
     */
    data: XOR<VoiceMetaUpdateManyMutationInput, VoiceMetaUncheckedUpdateManyInput>
    /**
     * Filter which VoiceMetas to update
     */
    where?: VoiceMetaWhereInput
    /**
     * Limit how many VoiceMetas to update.
     */
    limit?: number
  }

  /**
   * VoiceMeta updateManyAndReturn
   */
  export type VoiceMetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMeta
     */
    select?: VoiceMetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMeta
     */
    omit?: VoiceMetaOmit<ExtArgs> | null
    /**
     * The data used to update VoiceMetas.
     */
    data: XOR<VoiceMetaUpdateManyMutationInput, VoiceMetaUncheckedUpdateManyInput>
    /**
     * Filter which VoiceMetas to update
     */
    where?: VoiceMetaWhereInput
    /**
     * Limit how many VoiceMetas to update.
     */
    limit?: number
  }

  /**
   * VoiceMeta upsert
   */
  export type VoiceMetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMeta
     */
    select?: VoiceMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMeta
     */
    omit?: VoiceMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceMetaInclude<ExtArgs> | null
    /**
     * The filter to search for the VoiceMeta to update in case it exists.
     */
    where: VoiceMetaWhereUniqueInput
    /**
     * In case the VoiceMeta found by the `where` argument doesn't exist, create a new VoiceMeta with this data.
     */
    create: XOR<VoiceMetaCreateInput, VoiceMetaUncheckedCreateInput>
    /**
     * In case the VoiceMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoiceMetaUpdateInput, VoiceMetaUncheckedUpdateInput>
  }

  /**
   * VoiceMeta delete
   */
  export type VoiceMetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMeta
     */
    select?: VoiceMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMeta
     */
    omit?: VoiceMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceMetaInclude<ExtArgs> | null
    /**
     * Filter which VoiceMeta to delete.
     */
    where: VoiceMetaWhereUniqueInput
  }

  /**
   * VoiceMeta deleteMany
   */
  export type VoiceMetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoiceMetas to delete
     */
    where?: VoiceMetaWhereInput
    /**
     * Limit how many VoiceMetas to delete.
     */
    limit?: number
  }

  /**
   * VoiceMeta.Audio
   */
  export type VoiceMeta$AudioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audios
     */
    select?: AudiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audios
     */
    omit?: AudiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiosInclude<ExtArgs> | null
    where?: AudiosWhereInput
  }

  /**
   * VoiceMeta without action
   */
  export type VoiceMetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMeta
     */
    select?: VoiceMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMeta
     */
    omit?: VoiceMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceMetaInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    artistId: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    artistId: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    artistId: number | null
    paidday: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    artistId: number | null
    paidday: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    artistId: number
    paidday: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
    userId?: true
    artistId?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
    userId?: true
    artistId?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    artistId?: true
    paidday?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    artistId?: true
    paidday?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    artistId?: true
    paidday?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    userId: number
    artistId: number
    paidday: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    artistId?: boolean
    paidday?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    artistId?: boolean
    paidday?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    artistId?: boolean
    paidday?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    artistId?: boolean
    paidday?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "artistId" | "paidday", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistProfileDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistProfileDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistProfileDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      artist: Prisma.$ArtistProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      artistId: number
      paidday: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artist<T extends ArtistProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistProfileDefaultArgs<ExtArgs>>): Prisma__ArtistProfileClient<$Result.GetResult<Prisma.$ArtistProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'Int'>
    readonly userId: FieldRef<"Subscription", 'Int'>
    readonly artistId: FieldRef<"Subscription", 'Int'>
    readonly paidday: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    username: 'username',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArtistProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    displayName: 'displayName',
    gender: 'gender',
    avtarUrl: 'avtarUrl',
    bannerUrl: 'bannerUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArtistProfileScalarFieldEnum = (typeof ArtistProfileScalarFieldEnum)[keyof typeof ArtistProfileScalarFieldEnum]


  export const AudiosScalarFieldEnum: {
    id: 'id',
    artistId: 'artistId',
    audioUrl: 'audioUrl',
    title: 'title',
    desc: 'desc',
    duration: 'duration',
    voicedataId: 'voicedataId',
    createdAt: 'createdAt',
    public: 'public'
  };

  export type AudiosScalarFieldEnum = (typeof AudiosScalarFieldEnum)[keyof typeof AudiosScalarFieldEnum]


  export const VoiceMetaScalarFieldEnum: {
    id: 'id',
    domVoice: 'domVoice',
    femaleCount: 'femaleCount',
    maleCount: 'maleCount',
    nonBinaryCount: 'nonBinaryCount',
    transCount: 'transCount'
  };

  export type VoiceMetaScalarFieldEnum = (typeof VoiceMetaScalarFieldEnum)[keyof typeof VoiceMetaScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    artistId: 'artistId',
    paidday: 'paidday'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    artistProfile?: XOR<ArtistProfileNullableScalarRelationFilter, ArtistProfileWhereInput> | null
    subscription?: SubscriptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    artistProfile?: ArtistProfileOrderByWithRelationInput
    subscription?: SubscriptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    artistProfile?: XOR<ArtistProfileNullableScalarRelationFilter, ArtistProfileWhereInput> | null
    subscription?: SubscriptionListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ArtistProfileWhereInput = {
    AND?: ArtistProfileWhereInput | ArtistProfileWhereInput[]
    OR?: ArtistProfileWhereInput[]
    NOT?: ArtistProfileWhereInput | ArtistProfileWhereInput[]
    id?: IntFilter<"ArtistProfile"> | number
    userId?: IntFilter<"ArtistProfile"> | number
    bio?: StringFilter<"ArtistProfile"> | string
    displayName?: StringFilter<"ArtistProfile"> | string
    gender?: EnumGenderFilter<"ArtistProfile"> | $Enums.Gender
    avtarUrl?: StringFilter<"ArtistProfile"> | string
    bannerUrl?: StringFilter<"ArtistProfile"> | string
    createdAt?: DateTimeFilter<"ArtistProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ArtistProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Audios?: AudiosListRelationFilter
    subscription?: SubscriptionListRelationFilter
  }

  export type ArtistProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    displayName?: SortOrder
    gender?: SortOrder
    avtarUrl?: SortOrder
    bannerUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Audios?: AudiosOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByRelationAggregateInput
  }

  export type ArtistProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ArtistProfileWhereInput | ArtistProfileWhereInput[]
    OR?: ArtistProfileWhereInput[]
    NOT?: ArtistProfileWhereInput | ArtistProfileWhereInput[]
    bio?: StringFilter<"ArtistProfile"> | string
    displayName?: StringFilter<"ArtistProfile"> | string
    gender?: EnumGenderFilter<"ArtistProfile"> | $Enums.Gender
    avtarUrl?: StringFilter<"ArtistProfile"> | string
    bannerUrl?: StringFilter<"ArtistProfile"> | string
    createdAt?: DateTimeFilter<"ArtistProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ArtistProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Audios?: AudiosListRelationFilter
    subscription?: SubscriptionListRelationFilter
  }, "id" | "userId">

  export type ArtistProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    displayName?: SortOrder
    gender?: SortOrder
    avtarUrl?: SortOrder
    bannerUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArtistProfileCountOrderByAggregateInput
    _avg?: ArtistProfileAvgOrderByAggregateInput
    _max?: ArtistProfileMaxOrderByAggregateInput
    _min?: ArtistProfileMinOrderByAggregateInput
    _sum?: ArtistProfileSumOrderByAggregateInput
  }

  export type ArtistProfileScalarWhereWithAggregatesInput = {
    AND?: ArtistProfileScalarWhereWithAggregatesInput | ArtistProfileScalarWhereWithAggregatesInput[]
    OR?: ArtistProfileScalarWhereWithAggregatesInput[]
    NOT?: ArtistProfileScalarWhereWithAggregatesInput | ArtistProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArtistProfile"> | number
    userId?: IntWithAggregatesFilter<"ArtistProfile"> | number
    bio?: StringWithAggregatesFilter<"ArtistProfile"> | string
    displayName?: StringWithAggregatesFilter<"ArtistProfile"> | string
    gender?: EnumGenderWithAggregatesFilter<"ArtistProfile"> | $Enums.Gender
    avtarUrl?: StringWithAggregatesFilter<"ArtistProfile"> | string
    bannerUrl?: StringWithAggregatesFilter<"ArtistProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArtistProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArtistProfile"> | Date | string
  }

  export type AudiosWhereInput = {
    AND?: AudiosWhereInput | AudiosWhereInput[]
    OR?: AudiosWhereInput[]
    NOT?: AudiosWhereInput | AudiosWhereInput[]
    id?: IntFilter<"Audios"> | number
    artistId?: IntFilter<"Audios"> | number
    audioUrl?: StringFilter<"Audios"> | string
    title?: StringFilter<"Audios"> | string
    desc?: StringFilter<"Audios"> | string
    duration?: IntFilter<"Audios"> | number
    voicedataId?: IntFilter<"Audios"> | number
    createdAt?: DateTimeFilter<"Audios"> | Date | string
    public?: BoolFilter<"Audios"> | boolean
    artist?: XOR<ArtistProfileScalarRelationFilter, ArtistProfileWhereInput>
    voiceData?: XOR<VoiceMetaScalarRelationFilter, VoiceMetaWhereInput>
  }

  export type AudiosOrderByWithRelationInput = {
    id?: SortOrder
    artistId?: SortOrder
    audioUrl?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    duration?: SortOrder
    voicedataId?: SortOrder
    createdAt?: SortOrder
    public?: SortOrder
    artist?: ArtistProfileOrderByWithRelationInput
    voiceData?: VoiceMetaOrderByWithRelationInput
  }

  export type AudiosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    voicedataId?: number
    AND?: AudiosWhereInput | AudiosWhereInput[]
    OR?: AudiosWhereInput[]
    NOT?: AudiosWhereInput | AudiosWhereInput[]
    artistId?: IntFilter<"Audios"> | number
    audioUrl?: StringFilter<"Audios"> | string
    title?: StringFilter<"Audios"> | string
    desc?: StringFilter<"Audios"> | string
    duration?: IntFilter<"Audios"> | number
    createdAt?: DateTimeFilter<"Audios"> | Date | string
    public?: BoolFilter<"Audios"> | boolean
    artist?: XOR<ArtistProfileScalarRelationFilter, ArtistProfileWhereInput>
    voiceData?: XOR<VoiceMetaScalarRelationFilter, VoiceMetaWhereInput>
  }, "id" | "voicedataId">

  export type AudiosOrderByWithAggregationInput = {
    id?: SortOrder
    artistId?: SortOrder
    audioUrl?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    duration?: SortOrder
    voicedataId?: SortOrder
    createdAt?: SortOrder
    public?: SortOrder
    _count?: AudiosCountOrderByAggregateInput
    _avg?: AudiosAvgOrderByAggregateInput
    _max?: AudiosMaxOrderByAggregateInput
    _min?: AudiosMinOrderByAggregateInput
    _sum?: AudiosSumOrderByAggregateInput
  }

  export type AudiosScalarWhereWithAggregatesInput = {
    AND?: AudiosScalarWhereWithAggregatesInput | AudiosScalarWhereWithAggregatesInput[]
    OR?: AudiosScalarWhereWithAggregatesInput[]
    NOT?: AudiosScalarWhereWithAggregatesInput | AudiosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Audios"> | number
    artistId?: IntWithAggregatesFilter<"Audios"> | number
    audioUrl?: StringWithAggregatesFilter<"Audios"> | string
    title?: StringWithAggregatesFilter<"Audios"> | string
    desc?: StringWithAggregatesFilter<"Audios"> | string
    duration?: IntWithAggregatesFilter<"Audios"> | number
    voicedataId?: IntWithAggregatesFilter<"Audios"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Audios"> | Date | string
    public?: BoolWithAggregatesFilter<"Audios"> | boolean
  }

  export type VoiceMetaWhereInput = {
    AND?: VoiceMetaWhereInput | VoiceMetaWhereInput[]
    OR?: VoiceMetaWhereInput[]
    NOT?: VoiceMetaWhereInput | VoiceMetaWhereInput[]
    id?: IntFilter<"VoiceMeta"> | number
    domVoice?: EnumGenderFilter<"VoiceMeta"> | $Enums.Gender
    femaleCount?: IntFilter<"VoiceMeta"> | number
    maleCount?: IntFilter<"VoiceMeta"> | number
    nonBinaryCount?: IntFilter<"VoiceMeta"> | number
    transCount?: IntFilter<"VoiceMeta"> | number
    Audio?: XOR<AudiosNullableScalarRelationFilter, AudiosWhereInput> | null
  }

  export type VoiceMetaOrderByWithRelationInput = {
    id?: SortOrder
    domVoice?: SortOrder
    femaleCount?: SortOrder
    maleCount?: SortOrder
    nonBinaryCount?: SortOrder
    transCount?: SortOrder
    Audio?: AudiosOrderByWithRelationInput
  }

  export type VoiceMetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VoiceMetaWhereInput | VoiceMetaWhereInput[]
    OR?: VoiceMetaWhereInput[]
    NOT?: VoiceMetaWhereInput | VoiceMetaWhereInput[]
    domVoice?: EnumGenderFilter<"VoiceMeta"> | $Enums.Gender
    femaleCount?: IntFilter<"VoiceMeta"> | number
    maleCount?: IntFilter<"VoiceMeta"> | number
    nonBinaryCount?: IntFilter<"VoiceMeta"> | number
    transCount?: IntFilter<"VoiceMeta"> | number
    Audio?: XOR<AudiosNullableScalarRelationFilter, AudiosWhereInput> | null
  }, "id">

  export type VoiceMetaOrderByWithAggregationInput = {
    id?: SortOrder
    domVoice?: SortOrder
    femaleCount?: SortOrder
    maleCount?: SortOrder
    nonBinaryCount?: SortOrder
    transCount?: SortOrder
    _count?: VoiceMetaCountOrderByAggregateInput
    _avg?: VoiceMetaAvgOrderByAggregateInput
    _max?: VoiceMetaMaxOrderByAggregateInput
    _min?: VoiceMetaMinOrderByAggregateInput
    _sum?: VoiceMetaSumOrderByAggregateInput
  }

  export type VoiceMetaScalarWhereWithAggregatesInput = {
    AND?: VoiceMetaScalarWhereWithAggregatesInput | VoiceMetaScalarWhereWithAggregatesInput[]
    OR?: VoiceMetaScalarWhereWithAggregatesInput[]
    NOT?: VoiceMetaScalarWhereWithAggregatesInput | VoiceMetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VoiceMeta"> | number
    domVoice?: EnumGenderWithAggregatesFilter<"VoiceMeta"> | $Enums.Gender
    femaleCount?: IntWithAggregatesFilter<"VoiceMeta"> | number
    maleCount?: IntWithAggregatesFilter<"VoiceMeta"> | number
    nonBinaryCount?: IntWithAggregatesFilter<"VoiceMeta"> | number
    transCount?: IntWithAggregatesFilter<"VoiceMeta"> | number
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: IntFilter<"Subscription"> | number
    userId?: IntFilter<"Subscription"> | number
    artistId?: IntFilter<"Subscription"> | number
    paidday?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    artist?: XOR<ArtistProfileScalarRelationFilter, ArtistProfileWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    paidday?: SortOrder
    user?: UserOrderByWithRelationInput
    artist?: ArtistProfileOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_artistId?: SubscriptionUserIdArtistIdCompoundUniqueInput
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: IntFilter<"Subscription"> | number
    artistId?: IntFilter<"Subscription"> | number
    paidday?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    artist?: XOR<ArtistProfileScalarRelationFilter, ArtistProfileWhereInput>
  }, "id" | "userId_artistId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    paidday?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscription"> | number
    userId?: IntWithAggregatesFilter<"Subscription"> | number
    artistId?: IntWithAggregatesFilter<"Subscription"> | number
    paidday?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artistProfile?: ArtistProfileCreateNestedOneWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artistProfile?: ArtistProfileUncheckedCreateNestedOneWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artistProfile?: ArtistProfileUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artistProfile?: ArtistProfileUncheckedUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistProfileCreateInput = {
    bio: string
    displayName: string
    gender: $Enums.Gender
    avtarUrl: string
    bannerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArtistProfileInput
    Audios?: AudiosCreateNestedManyWithoutArtistInput
    subscription?: SubscriptionCreateNestedManyWithoutArtistInput
  }

  export type ArtistProfileUncheckedCreateInput = {
    id?: number
    userId: number
    bio: string
    displayName: string
    gender: $Enums.Gender
    avtarUrl: string
    bannerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Audios?: AudiosUncheckedCreateNestedManyWithoutArtistInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistProfileUpdateInput = {
    bio?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avtarUrl?: StringFieldUpdateOperationsInput | string
    bannerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArtistProfileNestedInput
    Audios?: AudiosUpdateManyWithoutArtistNestedInput
    subscription?: SubscriptionUpdateManyWithoutArtistNestedInput
  }

  export type ArtistProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avtarUrl?: StringFieldUpdateOperationsInput | string
    bannerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Audios?: AudiosUncheckedUpdateManyWithoutArtistNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistProfileCreateManyInput = {
    id?: number
    userId: number
    bio: string
    displayName: string
    gender: $Enums.Gender
    avtarUrl: string
    bannerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistProfileUpdateManyMutationInput = {
    bio?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avtarUrl?: StringFieldUpdateOperationsInput | string
    bannerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avtarUrl?: StringFieldUpdateOperationsInput | string
    bannerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudiosCreateInput = {
    audioUrl: string
    title: string
    desc: string
    duration: number
    createdAt?: Date | string
    public?: boolean
    artist: ArtistProfileCreateNestedOneWithoutAudiosInput
    voiceData: VoiceMetaCreateNestedOneWithoutAudioInput
  }

  export type AudiosUncheckedCreateInput = {
    id?: number
    artistId: number
    audioUrl: string
    title: string
    desc: string
    duration: number
    voicedataId: number
    createdAt?: Date | string
    public?: boolean
  }

  export type AudiosUpdateInput = {
    audioUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    artist?: ArtistProfileUpdateOneRequiredWithoutAudiosNestedInput
    voiceData?: VoiceMetaUpdateOneRequiredWithoutAudioNestedInput
  }

  export type AudiosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    voicedataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AudiosCreateManyInput = {
    id?: number
    artistId: number
    audioUrl: string
    title: string
    desc: string
    duration: number
    voicedataId: number
    createdAt?: Date | string
    public?: boolean
  }

  export type AudiosUpdateManyMutationInput = {
    audioUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AudiosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    voicedataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoiceMetaCreateInput = {
    domVoice: $Enums.Gender
    femaleCount?: number
    maleCount?: number
    nonBinaryCount?: number
    transCount?: number
    Audio?: AudiosCreateNestedOneWithoutVoiceDataInput
  }

  export type VoiceMetaUncheckedCreateInput = {
    id?: number
    domVoice: $Enums.Gender
    femaleCount?: number
    maleCount?: number
    nonBinaryCount?: number
    transCount?: number
    Audio?: AudiosUncheckedCreateNestedOneWithoutVoiceDataInput
  }

  export type VoiceMetaUpdateInput = {
    domVoice?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    femaleCount?: IntFieldUpdateOperationsInput | number
    maleCount?: IntFieldUpdateOperationsInput | number
    nonBinaryCount?: IntFieldUpdateOperationsInput | number
    transCount?: IntFieldUpdateOperationsInput | number
    Audio?: AudiosUpdateOneWithoutVoiceDataNestedInput
  }

  export type VoiceMetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domVoice?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    femaleCount?: IntFieldUpdateOperationsInput | number
    maleCount?: IntFieldUpdateOperationsInput | number
    nonBinaryCount?: IntFieldUpdateOperationsInput | number
    transCount?: IntFieldUpdateOperationsInput | number
    Audio?: AudiosUncheckedUpdateOneWithoutVoiceDataNestedInput
  }

  export type VoiceMetaCreateManyInput = {
    id?: number
    domVoice: $Enums.Gender
    femaleCount?: number
    maleCount?: number
    nonBinaryCount?: number
    transCount?: number
  }

  export type VoiceMetaUpdateManyMutationInput = {
    domVoice?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    femaleCount?: IntFieldUpdateOperationsInput | number
    maleCount?: IntFieldUpdateOperationsInput | number
    nonBinaryCount?: IntFieldUpdateOperationsInput | number
    transCount?: IntFieldUpdateOperationsInput | number
  }

  export type VoiceMetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domVoice?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    femaleCount?: IntFieldUpdateOperationsInput | number
    maleCount?: IntFieldUpdateOperationsInput | number
    nonBinaryCount?: IntFieldUpdateOperationsInput | number
    transCount?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionCreateInput = {
    paidday?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
    artist: ArtistProfileCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: number
    userId: number
    artistId: number
    paidday?: Date | string
  }

  export type SubscriptionUpdateInput = {
    paidday?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    artist?: ArtistProfileUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    paidday?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: number
    userId: number
    artistId: number
    paidday?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    paidday?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    paidday?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ArtistProfileNullableScalarRelationFilter = {
    is?: ArtistProfileWhereInput | null
    isNot?: ArtistProfileWhereInput | null
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AudiosListRelationFilter = {
    every?: AudiosWhereInput
    some?: AudiosWhereInput
    none?: AudiosWhereInput
  }

  export type AudiosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    displayName?: SortOrder
    gender?: SortOrder
    avtarUrl?: SortOrder
    bannerUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ArtistProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    displayName?: SortOrder
    gender?: SortOrder
    avtarUrl?: SortOrder
    bannerUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    displayName?: SortOrder
    gender?: SortOrder
    avtarUrl?: SortOrder
    bannerUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ArtistProfileScalarRelationFilter = {
    is?: ArtistProfileWhereInput
    isNot?: ArtistProfileWhereInput
  }

  export type VoiceMetaScalarRelationFilter = {
    is?: VoiceMetaWhereInput
    isNot?: VoiceMetaWhereInput
  }

  export type AudiosCountOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    audioUrl?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    duration?: SortOrder
    voicedataId?: SortOrder
    createdAt?: SortOrder
    public?: SortOrder
  }

  export type AudiosAvgOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    duration?: SortOrder
    voicedataId?: SortOrder
  }

  export type AudiosMaxOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    audioUrl?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    duration?: SortOrder
    voicedataId?: SortOrder
    createdAt?: SortOrder
    public?: SortOrder
  }

  export type AudiosMinOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    audioUrl?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    duration?: SortOrder
    voicedataId?: SortOrder
    createdAt?: SortOrder
    public?: SortOrder
  }

  export type AudiosSumOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    duration?: SortOrder
    voicedataId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AudiosNullableScalarRelationFilter = {
    is?: AudiosWhereInput | null
    isNot?: AudiosWhereInput | null
  }

  export type VoiceMetaCountOrderByAggregateInput = {
    id?: SortOrder
    domVoice?: SortOrder
    femaleCount?: SortOrder
    maleCount?: SortOrder
    nonBinaryCount?: SortOrder
    transCount?: SortOrder
  }

  export type VoiceMetaAvgOrderByAggregateInput = {
    id?: SortOrder
    femaleCount?: SortOrder
    maleCount?: SortOrder
    nonBinaryCount?: SortOrder
    transCount?: SortOrder
  }

  export type VoiceMetaMaxOrderByAggregateInput = {
    id?: SortOrder
    domVoice?: SortOrder
    femaleCount?: SortOrder
    maleCount?: SortOrder
    nonBinaryCount?: SortOrder
    transCount?: SortOrder
  }

  export type VoiceMetaMinOrderByAggregateInput = {
    id?: SortOrder
    domVoice?: SortOrder
    femaleCount?: SortOrder
    maleCount?: SortOrder
    nonBinaryCount?: SortOrder
    transCount?: SortOrder
  }

  export type VoiceMetaSumOrderByAggregateInput = {
    id?: SortOrder
    femaleCount?: SortOrder
    maleCount?: SortOrder
    nonBinaryCount?: SortOrder
    transCount?: SortOrder
  }

  export type SubscriptionUserIdArtistIdCompoundUniqueInput = {
    userId: number
    artistId: number
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    paidday?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    paidday?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    paidday?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
  }

  export type ArtistProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ArtistProfileCreateWithoutUserInput, ArtistProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtistProfileCreateOrConnectWithoutUserInput
    connect?: ArtistProfileWhereUniqueInput
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type ArtistProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ArtistProfileCreateWithoutUserInput, ArtistProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtistProfileCreateOrConnectWithoutUserInput
    connect?: ArtistProfileWhereUniqueInput
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArtistProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ArtistProfileCreateWithoutUserInput, ArtistProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtistProfileCreateOrConnectWithoutUserInput
    upsert?: ArtistProfileUpsertWithoutUserInput
    disconnect?: ArtistProfileWhereInput | boolean
    delete?: ArtistProfileWhereInput | boolean
    connect?: ArtistProfileWhereUniqueInput
    update?: XOR<XOR<ArtistProfileUpdateToOneWithWhereWithoutUserInput, ArtistProfileUpdateWithoutUserInput>, ArtistProfileUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArtistProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ArtistProfileCreateWithoutUserInput, ArtistProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtistProfileCreateOrConnectWithoutUserInput
    upsert?: ArtistProfileUpsertWithoutUserInput
    disconnect?: ArtistProfileWhereInput | boolean
    delete?: ArtistProfileWhereInput | boolean
    connect?: ArtistProfileWhereUniqueInput
    update?: XOR<XOR<ArtistProfileUpdateToOneWithWhereWithoutUserInput, ArtistProfileUpdateWithoutUserInput>, ArtistProfileUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutArtistProfileInput = {
    create?: XOR<UserCreateWithoutArtistProfileInput, UserUncheckedCreateWithoutArtistProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtistProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AudiosCreateNestedManyWithoutArtistInput = {
    create?: XOR<AudiosCreateWithoutArtistInput, AudiosUncheckedCreateWithoutArtistInput> | AudiosCreateWithoutArtistInput[] | AudiosUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AudiosCreateOrConnectWithoutArtistInput | AudiosCreateOrConnectWithoutArtistInput[]
    createMany?: AudiosCreateManyArtistInputEnvelope
    connect?: AudiosWhereUniqueInput | AudiosWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutArtistInput = {
    create?: XOR<SubscriptionCreateWithoutArtistInput, SubscriptionUncheckedCreateWithoutArtistInput> | SubscriptionCreateWithoutArtistInput[] | SubscriptionUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutArtistInput | SubscriptionCreateOrConnectWithoutArtistInput[]
    createMany?: SubscriptionCreateManyArtistInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type AudiosUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<AudiosCreateWithoutArtistInput, AudiosUncheckedCreateWithoutArtistInput> | AudiosCreateWithoutArtistInput[] | AudiosUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AudiosCreateOrConnectWithoutArtistInput | AudiosCreateOrConnectWithoutArtistInput[]
    createMany?: AudiosCreateManyArtistInputEnvelope
    connect?: AudiosWhereUniqueInput | AudiosWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<SubscriptionCreateWithoutArtistInput, SubscriptionUncheckedCreateWithoutArtistInput> | SubscriptionCreateWithoutArtistInput[] | SubscriptionUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutArtistInput | SubscriptionCreateOrConnectWithoutArtistInput[]
    createMany?: SubscriptionCreateManyArtistInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type UserUpdateOneRequiredWithoutArtistProfileNestedInput = {
    create?: XOR<UserCreateWithoutArtistProfileInput, UserUncheckedCreateWithoutArtistProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtistProfileInput
    upsert?: UserUpsertWithoutArtistProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArtistProfileInput, UserUpdateWithoutArtistProfileInput>, UserUncheckedUpdateWithoutArtistProfileInput>
  }

  export type AudiosUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AudiosCreateWithoutArtistInput, AudiosUncheckedCreateWithoutArtistInput> | AudiosCreateWithoutArtistInput[] | AudiosUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AudiosCreateOrConnectWithoutArtistInput | AudiosCreateOrConnectWithoutArtistInput[]
    upsert?: AudiosUpsertWithWhereUniqueWithoutArtistInput | AudiosUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AudiosCreateManyArtistInputEnvelope
    set?: AudiosWhereUniqueInput | AudiosWhereUniqueInput[]
    disconnect?: AudiosWhereUniqueInput | AudiosWhereUniqueInput[]
    delete?: AudiosWhereUniqueInput | AudiosWhereUniqueInput[]
    connect?: AudiosWhereUniqueInput | AudiosWhereUniqueInput[]
    update?: AudiosUpdateWithWhereUniqueWithoutArtistInput | AudiosUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AudiosUpdateManyWithWhereWithoutArtistInput | AudiosUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AudiosScalarWhereInput | AudiosScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutArtistNestedInput = {
    create?: XOR<SubscriptionCreateWithoutArtistInput, SubscriptionUncheckedCreateWithoutArtistInput> | SubscriptionCreateWithoutArtistInput[] | SubscriptionUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutArtistInput | SubscriptionCreateOrConnectWithoutArtistInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutArtistInput | SubscriptionUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: SubscriptionCreateManyArtistInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutArtistInput | SubscriptionUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutArtistInput | SubscriptionUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type AudiosUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AudiosCreateWithoutArtistInput, AudiosUncheckedCreateWithoutArtistInput> | AudiosCreateWithoutArtistInput[] | AudiosUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AudiosCreateOrConnectWithoutArtistInput | AudiosCreateOrConnectWithoutArtistInput[]
    upsert?: AudiosUpsertWithWhereUniqueWithoutArtistInput | AudiosUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AudiosCreateManyArtistInputEnvelope
    set?: AudiosWhereUniqueInput | AudiosWhereUniqueInput[]
    disconnect?: AudiosWhereUniqueInput | AudiosWhereUniqueInput[]
    delete?: AudiosWhereUniqueInput | AudiosWhereUniqueInput[]
    connect?: AudiosWhereUniqueInput | AudiosWhereUniqueInput[]
    update?: AudiosUpdateWithWhereUniqueWithoutArtistInput | AudiosUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AudiosUpdateManyWithWhereWithoutArtistInput | AudiosUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AudiosScalarWhereInput | AudiosScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<SubscriptionCreateWithoutArtistInput, SubscriptionUncheckedCreateWithoutArtistInput> | SubscriptionCreateWithoutArtistInput[] | SubscriptionUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutArtistInput | SubscriptionCreateOrConnectWithoutArtistInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutArtistInput | SubscriptionUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: SubscriptionCreateManyArtistInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutArtistInput | SubscriptionUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutArtistInput | SubscriptionUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type ArtistProfileCreateNestedOneWithoutAudiosInput = {
    create?: XOR<ArtistProfileCreateWithoutAudiosInput, ArtistProfileUncheckedCreateWithoutAudiosInput>
    connectOrCreate?: ArtistProfileCreateOrConnectWithoutAudiosInput
    connect?: ArtistProfileWhereUniqueInput
  }

  export type VoiceMetaCreateNestedOneWithoutAudioInput = {
    create?: XOR<VoiceMetaCreateWithoutAudioInput, VoiceMetaUncheckedCreateWithoutAudioInput>
    connectOrCreate?: VoiceMetaCreateOrConnectWithoutAudioInput
    connect?: VoiceMetaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ArtistProfileUpdateOneRequiredWithoutAudiosNestedInput = {
    create?: XOR<ArtistProfileCreateWithoutAudiosInput, ArtistProfileUncheckedCreateWithoutAudiosInput>
    connectOrCreate?: ArtistProfileCreateOrConnectWithoutAudiosInput
    upsert?: ArtistProfileUpsertWithoutAudiosInput
    connect?: ArtistProfileWhereUniqueInput
    update?: XOR<XOR<ArtistProfileUpdateToOneWithWhereWithoutAudiosInput, ArtistProfileUpdateWithoutAudiosInput>, ArtistProfileUncheckedUpdateWithoutAudiosInput>
  }

  export type VoiceMetaUpdateOneRequiredWithoutAudioNestedInput = {
    create?: XOR<VoiceMetaCreateWithoutAudioInput, VoiceMetaUncheckedCreateWithoutAudioInput>
    connectOrCreate?: VoiceMetaCreateOrConnectWithoutAudioInput
    upsert?: VoiceMetaUpsertWithoutAudioInput
    connect?: VoiceMetaWhereUniqueInput
    update?: XOR<XOR<VoiceMetaUpdateToOneWithWhereWithoutAudioInput, VoiceMetaUpdateWithoutAudioInput>, VoiceMetaUncheckedUpdateWithoutAudioInput>
  }

  export type AudiosCreateNestedOneWithoutVoiceDataInput = {
    create?: XOR<AudiosCreateWithoutVoiceDataInput, AudiosUncheckedCreateWithoutVoiceDataInput>
    connectOrCreate?: AudiosCreateOrConnectWithoutVoiceDataInput
    connect?: AudiosWhereUniqueInput
  }

  export type AudiosUncheckedCreateNestedOneWithoutVoiceDataInput = {
    create?: XOR<AudiosCreateWithoutVoiceDataInput, AudiosUncheckedCreateWithoutVoiceDataInput>
    connectOrCreate?: AudiosCreateOrConnectWithoutVoiceDataInput
    connect?: AudiosWhereUniqueInput
  }

  export type AudiosUpdateOneWithoutVoiceDataNestedInput = {
    create?: XOR<AudiosCreateWithoutVoiceDataInput, AudiosUncheckedCreateWithoutVoiceDataInput>
    connectOrCreate?: AudiosCreateOrConnectWithoutVoiceDataInput
    upsert?: AudiosUpsertWithoutVoiceDataInput
    disconnect?: AudiosWhereInput | boolean
    delete?: AudiosWhereInput | boolean
    connect?: AudiosWhereUniqueInput
    update?: XOR<XOR<AudiosUpdateToOneWithWhereWithoutVoiceDataInput, AudiosUpdateWithoutVoiceDataInput>, AudiosUncheckedUpdateWithoutVoiceDataInput>
  }

  export type AudiosUncheckedUpdateOneWithoutVoiceDataNestedInput = {
    create?: XOR<AudiosCreateWithoutVoiceDataInput, AudiosUncheckedCreateWithoutVoiceDataInput>
    connectOrCreate?: AudiosCreateOrConnectWithoutVoiceDataInput
    upsert?: AudiosUpsertWithoutVoiceDataInput
    disconnect?: AudiosWhereInput | boolean
    delete?: AudiosWhereInput | boolean
    connect?: AudiosWhereUniqueInput
    update?: XOR<XOR<AudiosUpdateToOneWithWhereWithoutVoiceDataInput, AudiosUpdateWithoutVoiceDataInput>, AudiosUncheckedUpdateWithoutVoiceDataInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type ArtistProfileCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<ArtistProfileCreateWithoutSubscriptionInput, ArtistProfileUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: ArtistProfileCreateOrConnectWithoutSubscriptionInput
    connect?: ArtistProfileWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type ArtistProfileUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<ArtistProfileCreateWithoutSubscriptionInput, ArtistProfileUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: ArtistProfileCreateOrConnectWithoutSubscriptionInput
    upsert?: ArtistProfileUpsertWithoutSubscriptionInput
    connect?: ArtistProfileWhereUniqueInput
    update?: XOR<XOR<ArtistProfileUpdateToOneWithWhereWithoutSubscriptionInput, ArtistProfileUpdateWithoutSubscriptionInput>, ArtistProfileUncheckedUpdateWithoutSubscriptionInput>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ArtistProfileCreateWithoutUserInput = {
    bio: string
    displayName: string
    gender: $Enums.Gender
    avtarUrl: string
    bannerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Audios?: AudiosCreateNestedManyWithoutArtistInput
    subscription?: SubscriptionCreateNestedManyWithoutArtistInput
  }

  export type ArtistProfileUncheckedCreateWithoutUserInput = {
    id?: number
    bio: string
    displayName: string
    gender: $Enums.Gender
    avtarUrl: string
    bannerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Audios?: AudiosUncheckedCreateNestedManyWithoutArtistInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistProfileCreateOrConnectWithoutUserInput = {
    where: ArtistProfileWhereUniqueInput
    create: XOR<ArtistProfileCreateWithoutUserInput, ArtistProfileUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateWithoutUserInput = {
    paidday?: Date | string
    artist: ArtistProfileCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: number
    artistId: number
    paidday?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArtistProfileUpsertWithoutUserInput = {
    update: XOR<ArtistProfileUpdateWithoutUserInput, ArtistProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ArtistProfileCreateWithoutUserInput, ArtistProfileUncheckedCreateWithoutUserInput>
    where?: ArtistProfileWhereInput
  }

  export type ArtistProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ArtistProfileWhereInput
    data: XOR<ArtistProfileUpdateWithoutUserInput, ArtistProfileUncheckedUpdateWithoutUserInput>
  }

  export type ArtistProfileUpdateWithoutUserInput = {
    bio?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avtarUrl?: StringFieldUpdateOperationsInput | string
    bannerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Audios?: AudiosUpdateManyWithoutArtistNestedInput
    subscription?: SubscriptionUpdateManyWithoutArtistNestedInput
  }

  export type ArtistProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avtarUrl?: StringFieldUpdateOperationsInput | string
    bannerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Audios?: AudiosUncheckedUpdateManyWithoutArtistNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: IntFilter<"Subscription"> | number
    userId?: IntFilter<"Subscription"> | number
    artistId?: IntFilter<"Subscription"> | number
    paidday?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type UserCreateWithoutArtistProfileInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArtistProfileInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArtistProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArtistProfileInput, UserUncheckedCreateWithoutArtistProfileInput>
  }

  export type AudiosCreateWithoutArtistInput = {
    audioUrl: string
    title: string
    desc: string
    duration: number
    createdAt?: Date | string
    public?: boolean
    voiceData: VoiceMetaCreateNestedOneWithoutAudioInput
  }

  export type AudiosUncheckedCreateWithoutArtistInput = {
    id?: number
    audioUrl: string
    title: string
    desc: string
    duration: number
    voicedataId: number
    createdAt?: Date | string
    public?: boolean
  }

  export type AudiosCreateOrConnectWithoutArtistInput = {
    where: AudiosWhereUniqueInput
    create: XOR<AudiosCreateWithoutArtistInput, AudiosUncheckedCreateWithoutArtistInput>
  }

  export type AudiosCreateManyArtistInputEnvelope = {
    data: AudiosCreateManyArtistInput | AudiosCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutArtistInput = {
    paidday?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutArtistInput = {
    id?: number
    userId: number
    paidday?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutArtistInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutArtistInput, SubscriptionUncheckedCreateWithoutArtistInput>
  }

  export type SubscriptionCreateManyArtistInputEnvelope = {
    data: SubscriptionCreateManyArtistInput | SubscriptionCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArtistProfileInput = {
    update: XOR<UserUpdateWithoutArtistProfileInput, UserUncheckedUpdateWithoutArtistProfileInput>
    create: XOR<UserCreateWithoutArtistProfileInput, UserUncheckedCreateWithoutArtistProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArtistProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArtistProfileInput, UserUncheckedUpdateWithoutArtistProfileInput>
  }

  export type UserUpdateWithoutArtistProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArtistProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AudiosUpsertWithWhereUniqueWithoutArtistInput = {
    where: AudiosWhereUniqueInput
    update: XOR<AudiosUpdateWithoutArtistInput, AudiosUncheckedUpdateWithoutArtistInput>
    create: XOR<AudiosCreateWithoutArtistInput, AudiosUncheckedCreateWithoutArtistInput>
  }

  export type AudiosUpdateWithWhereUniqueWithoutArtistInput = {
    where: AudiosWhereUniqueInput
    data: XOR<AudiosUpdateWithoutArtistInput, AudiosUncheckedUpdateWithoutArtistInput>
  }

  export type AudiosUpdateManyWithWhereWithoutArtistInput = {
    where: AudiosScalarWhereInput
    data: XOR<AudiosUpdateManyMutationInput, AudiosUncheckedUpdateManyWithoutArtistInput>
  }

  export type AudiosScalarWhereInput = {
    AND?: AudiosScalarWhereInput | AudiosScalarWhereInput[]
    OR?: AudiosScalarWhereInput[]
    NOT?: AudiosScalarWhereInput | AudiosScalarWhereInput[]
    id?: IntFilter<"Audios"> | number
    artistId?: IntFilter<"Audios"> | number
    audioUrl?: StringFilter<"Audios"> | string
    title?: StringFilter<"Audios"> | string
    desc?: StringFilter<"Audios"> | string
    duration?: IntFilter<"Audios"> | number
    voicedataId?: IntFilter<"Audios"> | number
    createdAt?: DateTimeFilter<"Audios"> | Date | string
    public?: BoolFilter<"Audios"> | boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutArtistInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutArtistInput, SubscriptionUncheckedUpdateWithoutArtistInput>
    create: XOR<SubscriptionCreateWithoutArtistInput, SubscriptionUncheckedCreateWithoutArtistInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutArtistInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutArtistInput, SubscriptionUncheckedUpdateWithoutArtistInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutArtistInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutArtistInput>
  }

  export type ArtistProfileCreateWithoutAudiosInput = {
    bio: string
    displayName: string
    gender: $Enums.Gender
    avtarUrl: string
    bannerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArtistProfileInput
    subscription?: SubscriptionCreateNestedManyWithoutArtistInput
  }

  export type ArtistProfileUncheckedCreateWithoutAudiosInput = {
    id?: number
    userId: number
    bio: string
    displayName: string
    gender: $Enums.Gender
    avtarUrl: string
    bannerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistProfileCreateOrConnectWithoutAudiosInput = {
    where: ArtistProfileWhereUniqueInput
    create: XOR<ArtistProfileCreateWithoutAudiosInput, ArtistProfileUncheckedCreateWithoutAudiosInput>
  }

  export type VoiceMetaCreateWithoutAudioInput = {
    domVoice: $Enums.Gender
    femaleCount?: number
    maleCount?: number
    nonBinaryCount?: number
    transCount?: number
  }

  export type VoiceMetaUncheckedCreateWithoutAudioInput = {
    id?: number
    domVoice: $Enums.Gender
    femaleCount?: number
    maleCount?: number
    nonBinaryCount?: number
    transCount?: number
  }

  export type VoiceMetaCreateOrConnectWithoutAudioInput = {
    where: VoiceMetaWhereUniqueInput
    create: XOR<VoiceMetaCreateWithoutAudioInput, VoiceMetaUncheckedCreateWithoutAudioInput>
  }

  export type ArtistProfileUpsertWithoutAudiosInput = {
    update: XOR<ArtistProfileUpdateWithoutAudiosInput, ArtistProfileUncheckedUpdateWithoutAudiosInput>
    create: XOR<ArtistProfileCreateWithoutAudiosInput, ArtistProfileUncheckedCreateWithoutAudiosInput>
    where?: ArtistProfileWhereInput
  }

  export type ArtistProfileUpdateToOneWithWhereWithoutAudiosInput = {
    where?: ArtistProfileWhereInput
    data: XOR<ArtistProfileUpdateWithoutAudiosInput, ArtistProfileUncheckedUpdateWithoutAudiosInput>
  }

  export type ArtistProfileUpdateWithoutAudiosInput = {
    bio?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avtarUrl?: StringFieldUpdateOperationsInput | string
    bannerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArtistProfileNestedInput
    subscription?: SubscriptionUpdateManyWithoutArtistNestedInput
  }

  export type ArtistProfileUncheckedUpdateWithoutAudiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avtarUrl?: StringFieldUpdateOperationsInput | string
    bannerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type VoiceMetaUpsertWithoutAudioInput = {
    update: XOR<VoiceMetaUpdateWithoutAudioInput, VoiceMetaUncheckedUpdateWithoutAudioInput>
    create: XOR<VoiceMetaCreateWithoutAudioInput, VoiceMetaUncheckedCreateWithoutAudioInput>
    where?: VoiceMetaWhereInput
  }

  export type VoiceMetaUpdateToOneWithWhereWithoutAudioInput = {
    where?: VoiceMetaWhereInput
    data: XOR<VoiceMetaUpdateWithoutAudioInput, VoiceMetaUncheckedUpdateWithoutAudioInput>
  }

  export type VoiceMetaUpdateWithoutAudioInput = {
    domVoice?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    femaleCount?: IntFieldUpdateOperationsInput | number
    maleCount?: IntFieldUpdateOperationsInput | number
    nonBinaryCount?: IntFieldUpdateOperationsInput | number
    transCount?: IntFieldUpdateOperationsInput | number
  }

  export type VoiceMetaUncheckedUpdateWithoutAudioInput = {
    id?: IntFieldUpdateOperationsInput | number
    domVoice?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    femaleCount?: IntFieldUpdateOperationsInput | number
    maleCount?: IntFieldUpdateOperationsInput | number
    nonBinaryCount?: IntFieldUpdateOperationsInput | number
    transCount?: IntFieldUpdateOperationsInput | number
  }

  export type AudiosCreateWithoutVoiceDataInput = {
    audioUrl: string
    title: string
    desc: string
    duration: number
    createdAt?: Date | string
    public?: boolean
    artist: ArtistProfileCreateNestedOneWithoutAudiosInput
  }

  export type AudiosUncheckedCreateWithoutVoiceDataInput = {
    id?: number
    artistId: number
    audioUrl: string
    title: string
    desc: string
    duration: number
    createdAt?: Date | string
    public?: boolean
  }

  export type AudiosCreateOrConnectWithoutVoiceDataInput = {
    where: AudiosWhereUniqueInput
    create: XOR<AudiosCreateWithoutVoiceDataInput, AudiosUncheckedCreateWithoutVoiceDataInput>
  }

  export type AudiosUpsertWithoutVoiceDataInput = {
    update: XOR<AudiosUpdateWithoutVoiceDataInput, AudiosUncheckedUpdateWithoutVoiceDataInput>
    create: XOR<AudiosCreateWithoutVoiceDataInput, AudiosUncheckedCreateWithoutVoiceDataInput>
    where?: AudiosWhereInput
  }

  export type AudiosUpdateToOneWithWhereWithoutVoiceDataInput = {
    where?: AudiosWhereInput
    data: XOR<AudiosUpdateWithoutVoiceDataInput, AudiosUncheckedUpdateWithoutVoiceDataInput>
  }

  export type AudiosUpdateWithoutVoiceDataInput = {
    audioUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    artist?: ArtistProfileUpdateOneRequiredWithoutAudiosNestedInput
  }

  export type AudiosUncheckedUpdateWithoutVoiceDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutSubscriptionInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artistProfile?: ArtistProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artistProfile?: ArtistProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type ArtistProfileCreateWithoutSubscriptionInput = {
    bio: string
    displayName: string
    gender: $Enums.Gender
    avtarUrl: string
    bannerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArtistProfileInput
    Audios?: AudiosCreateNestedManyWithoutArtistInput
  }

  export type ArtistProfileUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    userId: number
    bio: string
    displayName: string
    gender: $Enums.Gender
    avtarUrl: string
    bannerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Audios?: AudiosUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistProfileCreateOrConnectWithoutSubscriptionInput = {
    where: ArtistProfileWhereUniqueInput
    create: XOR<ArtistProfileCreateWithoutSubscriptionInput, ArtistProfileUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artistProfile?: ArtistProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artistProfile?: ArtistProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ArtistProfileUpsertWithoutSubscriptionInput = {
    update: XOR<ArtistProfileUpdateWithoutSubscriptionInput, ArtistProfileUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<ArtistProfileCreateWithoutSubscriptionInput, ArtistProfileUncheckedCreateWithoutSubscriptionInput>
    where?: ArtistProfileWhereInput
  }

  export type ArtistProfileUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: ArtistProfileWhereInput
    data: XOR<ArtistProfileUpdateWithoutSubscriptionInput, ArtistProfileUncheckedUpdateWithoutSubscriptionInput>
  }

  export type ArtistProfileUpdateWithoutSubscriptionInput = {
    bio?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avtarUrl?: StringFieldUpdateOperationsInput | string
    bannerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArtistProfileNestedInput
    Audios?: AudiosUpdateManyWithoutArtistNestedInput
  }

  export type ArtistProfileUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    avtarUrl?: StringFieldUpdateOperationsInput | string
    bannerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Audios?: AudiosUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type SubscriptionCreateManyUserInput = {
    id?: number
    artistId: number
    paidday?: Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    paidday?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistProfileUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    paidday?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    paidday?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudiosCreateManyArtistInput = {
    id?: number
    audioUrl: string
    title: string
    desc: string
    duration: number
    voicedataId: number
    createdAt?: Date | string
    public?: boolean
  }

  export type SubscriptionCreateManyArtistInput = {
    id?: number
    userId: number
    paidday?: Date | string
  }

  export type AudiosUpdateWithoutArtistInput = {
    audioUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    voiceData?: VoiceMetaUpdateOneRequiredWithoutAudioNestedInput
  }

  export type AudiosUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    voicedataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AudiosUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    voicedataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUpdateWithoutArtistInput = {
    paidday?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    paidday?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    paidday?: DateTimeFieldUpdateOperationsInput | Date | string
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