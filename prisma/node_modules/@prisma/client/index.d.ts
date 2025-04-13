
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
 * Model aluno_turma
 * 
 */
export type aluno_turma = $Result.DefaultSelection<Prisma.$aluno_turmaPayload>
/**
 * Model avisos
 * 
 */
export type avisos = $Result.DefaultSelection<Prisma.$avisosPayload>
/**
 * Model comentario
 * 
 */
export type comentario = $Result.DefaultSelection<Prisma.$comentarioPayload>
/**
 * Model treinamento
 * 
 */
export type treinamento = $Result.DefaultSelection<Prisma.$treinamentoPayload>
/**
 * Model treinamento_tabuada
 * 
 */
export type treinamento_tabuada = $Result.DefaultSelection<Prisma.$treinamento_tabuadaPayload>
/**
 * Model turma
 * 
 */
export type turma = $Result.DefaultSelection<Prisma.$turmaPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const usuario_tipo_usuario: {
  Aluno: 'Aluno',
  Professor: 'Professor',
  Administrador: 'Administrador'
};

export type usuario_tipo_usuario = (typeof usuario_tipo_usuario)[keyof typeof usuario_tipo_usuario]

}

export type usuario_tipo_usuario = $Enums.usuario_tipo_usuario

export const usuario_tipo_usuario: typeof $Enums.usuario_tipo_usuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Aluno_turmas
 * const aluno_turmas = await prisma.aluno_turma.findMany()
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
   * // Fetch zero or more Aluno_turmas
   * const aluno_turmas = await prisma.aluno_turma.findMany()
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
   * `prisma.aluno_turma`: Exposes CRUD operations for the **aluno_turma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aluno_turmas
    * const aluno_turmas = await prisma.aluno_turma.findMany()
    * ```
    */
  get aluno_turma(): Prisma.aluno_turmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avisos`: Exposes CRUD operations for the **avisos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avisos
    * const avisos = await prisma.avisos.findMany()
    * ```
    */
  get avisos(): Prisma.avisosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.comentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treinamento`: Exposes CRUD operations for the **treinamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Treinamentos
    * const treinamentos = await prisma.treinamento.findMany()
    * ```
    */
  get treinamento(): Prisma.treinamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treinamento_tabuada`: Exposes CRUD operations for the **treinamento_tabuada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Treinamento_tabuadas
    * const treinamento_tabuadas = await prisma.treinamento_tabuada.findMany()
    * ```
    */
  get treinamento_tabuada(): Prisma.treinamento_tabuadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turma`: Exposes CRUD operations for the **turma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turmas
    * const turmas = await prisma.turma.findMany()
    * ```
    */
  get turma(): Prisma.turmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;
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
    aluno_turma: 'aluno_turma',
    avisos: 'avisos',
    comentario: 'comentario',
    treinamento: 'treinamento',
    treinamento_tabuada: 'treinamento_tabuada',
    turma: 'turma',
    usuario: 'usuario'
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
      modelProps: "aluno_turma" | "avisos" | "comentario" | "treinamento" | "treinamento_tabuada" | "turma" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      aluno_turma: {
        payload: Prisma.$aluno_turmaPayload<ExtArgs>
        fields: Prisma.aluno_turmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aluno_turmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aluno_turmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aluno_turmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aluno_turmaPayload>
          }
          findFirst: {
            args: Prisma.aluno_turmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aluno_turmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aluno_turmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aluno_turmaPayload>
          }
          findMany: {
            args: Prisma.aluno_turmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aluno_turmaPayload>[]
          }
          create: {
            args: Prisma.aluno_turmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aluno_turmaPayload>
          }
          createMany: {
            args: Prisma.aluno_turmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.aluno_turmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aluno_turmaPayload>
          }
          update: {
            args: Prisma.aluno_turmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aluno_turmaPayload>
          }
          deleteMany: {
            args: Prisma.aluno_turmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.aluno_turmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.aluno_turmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aluno_turmaPayload>
          }
          aggregate: {
            args: Prisma.Aluno_turmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluno_turma>
          }
          groupBy: {
            args: Prisma.aluno_turmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Aluno_turmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.aluno_turmaCountArgs<ExtArgs>
            result: $Utils.Optional<Aluno_turmaCountAggregateOutputType> | number
          }
        }
      }
      avisos: {
        payload: Prisma.$avisosPayload<ExtArgs>
        fields: Prisma.avisosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.avisosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avisosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.avisosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avisosPayload>
          }
          findFirst: {
            args: Prisma.avisosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avisosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.avisosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avisosPayload>
          }
          findMany: {
            args: Prisma.avisosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avisosPayload>[]
          }
          create: {
            args: Prisma.avisosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avisosPayload>
          }
          createMany: {
            args: Prisma.avisosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.avisosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avisosPayload>
          }
          update: {
            args: Prisma.avisosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avisosPayload>
          }
          deleteMany: {
            args: Prisma.avisosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.avisosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.avisosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avisosPayload>
          }
          aggregate: {
            args: Prisma.AvisosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvisos>
          }
          groupBy: {
            args: Prisma.avisosGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvisosGroupByOutputType>[]
          }
          count: {
            args: Prisma.avisosCountArgs<ExtArgs>
            result: $Utils.Optional<AvisosCountAggregateOutputType> | number
          }
        }
      }
      comentario: {
        payload: Prisma.$comentarioPayload<ExtArgs>
        fields: Prisma.comentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          findFirst: {
            args: Prisma.comentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          findMany: {
            args: Prisma.comentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>[]
          }
          create: {
            args: Prisma.comentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          createMany: {
            args: Prisma.comentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.comentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          update: {
            args: Prisma.comentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          deleteMany: {
            args: Prisma.comentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.comentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.comentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.comentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      treinamento: {
        payload: Prisma.$treinamentoPayload<ExtArgs>
        fields: Prisma.treinamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.treinamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.treinamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamentoPayload>
          }
          findFirst: {
            args: Prisma.treinamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.treinamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamentoPayload>
          }
          findMany: {
            args: Prisma.treinamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamentoPayload>[]
          }
          create: {
            args: Prisma.treinamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamentoPayload>
          }
          createMany: {
            args: Prisma.treinamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.treinamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamentoPayload>
          }
          update: {
            args: Prisma.treinamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamentoPayload>
          }
          deleteMany: {
            args: Prisma.treinamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.treinamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.treinamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamentoPayload>
          }
          aggregate: {
            args: Prisma.TreinamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreinamento>
          }
          groupBy: {
            args: Prisma.treinamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreinamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.treinamentoCountArgs<ExtArgs>
            result: $Utils.Optional<TreinamentoCountAggregateOutputType> | number
          }
        }
      }
      treinamento_tabuada: {
        payload: Prisma.$treinamento_tabuadaPayload<ExtArgs>
        fields: Prisma.treinamento_tabuadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.treinamento_tabuadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamento_tabuadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.treinamento_tabuadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamento_tabuadaPayload>
          }
          findFirst: {
            args: Prisma.treinamento_tabuadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamento_tabuadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.treinamento_tabuadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamento_tabuadaPayload>
          }
          findMany: {
            args: Prisma.treinamento_tabuadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamento_tabuadaPayload>[]
          }
          create: {
            args: Prisma.treinamento_tabuadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamento_tabuadaPayload>
          }
          createMany: {
            args: Prisma.treinamento_tabuadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.treinamento_tabuadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamento_tabuadaPayload>
          }
          update: {
            args: Prisma.treinamento_tabuadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamento_tabuadaPayload>
          }
          deleteMany: {
            args: Prisma.treinamento_tabuadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.treinamento_tabuadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.treinamento_tabuadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treinamento_tabuadaPayload>
          }
          aggregate: {
            args: Prisma.Treinamento_tabuadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreinamento_tabuada>
          }
          groupBy: {
            args: Prisma.treinamento_tabuadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Treinamento_tabuadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.treinamento_tabuadaCountArgs<ExtArgs>
            result: $Utils.Optional<Treinamento_tabuadaCountAggregateOutputType> | number
          }
        }
      }
      turma: {
        payload: Prisma.$turmaPayload<ExtArgs>
        fields: Prisma.turmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.turmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.turmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>
          }
          findFirst: {
            args: Prisma.turmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.turmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>
          }
          findMany: {
            args: Prisma.turmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>[]
          }
          create: {
            args: Prisma.turmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>
          }
          createMany: {
            args: Prisma.turmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.turmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>
          }
          update: {
            args: Prisma.turmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>
          }
          deleteMany: {
            args: Prisma.turmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.turmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.turmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>
          }
          aggregate: {
            args: Prisma.TurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurma>
          }
          groupBy: {
            args: Prisma.turmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.turmaCountArgs<ExtArgs>
            result: $Utils.Optional<TurmaCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
    aluno_turma?: aluno_turmaOmit
    avisos?: avisosOmit
    comentario?: comentarioOmit
    treinamento?: treinamentoOmit
    treinamento_tabuada?: treinamento_tabuadaOmit
    turma?: turmaOmit
    usuario?: usuarioOmit
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
   * Models
   */

  /**
   * Model aluno_turma
   */

  export type AggregateAluno_turma = {
    _count: Aluno_turmaCountAggregateOutputType | null
    _avg: Aluno_turmaAvgAggregateOutputType | null
    _sum: Aluno_turmaSumAggregateOutputType | null
    _min: Aluno_turmaMinAggregateOutputType | null
    _max: Aluno_turmaMaxAggregateOutputType | null
  }

  export type Aluno_turmaAvgAggregateOutputType = {
    id_usuario: number | null
    id_turma: number | null
  }

  export type Aluno_turmaSumAggregateOutputType = {
    id_usuario: number | null
    id_turma: number | null
  }

  export type Aluno_turmaMinAggregateOutputType = {
    id_usuario: number | null
    id_turma: number | null
  }

  export type Aluno_turmaMaxAggregateOutputType = {
    id_usuario: number | null
    id_turma: number | null
  }

  export type Aluno_turmaCountAggregateOutputType = {
    id_usuario: number
    id_turma: number
    _all: number
  }


  export type Aluno_turmaAvgAggregateInputType = {
    id_usuario?: true
    id_turma?: true
  }

  export type Aluno_turmaSumAggregateInputType = {
    id_usuario?: true
    id_turma?: true
  }

  export type Aluno_turmaMinAggregateInputType = {
    id_usuario?: true
    id_turma?: true
  }

  export type Aluno_turmaMaxAggregateInputType = {
    id_usuario?: true
    id_turma?: true
  }

  export type Aluno_turmaCountAggregateInputType = {
    id_usuario?: true
    id_turma?: true
    _all?: true
  }

  export type Aluno_turmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aluno_turma to aggregate.
     */
    where?: aluno_turmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aluno_turmas to fetch.
     */
    orderBy?: aluno_turmaOrderByWithRelationInput | aluno_turmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aluno_turmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aluno_turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aluno_turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aluno_turmas
    **/
    _count?: true | Aluno_turmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Aluno_turmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Aluno_turmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Aluno_turmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Aluno_turmaMaxAggregateInputType
  }

  export type GetAluno_turmaAggregateType<T extends Aluno_turmaAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno_turma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno_turma[P]>
      : GetScalarType<T[P], AggregateAluno_turma[P]>
  }




  export type aluno_turmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aluno_turmaWhereInput
    orderBy?: aluno_turmaOrderByWithAggregationInput | aluno_turmaOrderByWithAggregationInput[]
    by: Aluno_turmaScalarFieldEnum[] | Aluno_turmaScalarFieldEnum
    having?: aluno_turmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Aluno_turmaCountAggregateInputType | true
    _avg?: Aluno_turmaAvgAggregateInputType
    _sum?: Aluno_turmaSumAggregateInputType
    _min?: Aluno_turmaMinAggregateInputType
    _max?: Aluno_turmaMaxAggregateInputType
  }

  export type Aluno_turmaGroupByOutputType = {
    id_usuario: number
    id_turma: number
    _count: Aluno_turmaCountAggregateOutputType | null
    _avg: Aluno_turmaAvgAggregateOutputType | null
    _sum: Aluno_turmaSumAggregateOutputType | null
    _min: Aluno_turmaMinAggregateOutputType | null
    _max: Aluno_turmaMaxAggregateOutputType | null
  }

  type GetAluno_turmaGroupByPayload<T extends aluno_turmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Aluno_turmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Aluno_turmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Aluno_turmaGroupByOutputType[P]>
            : GetScalarType<T[P], Aluno_turmaGroupByOutputType[P]>
        }
      >
    >


  export type aluno_turmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_turma?: boolean
  }, ExtArgs["result"]["aluno_turma"]>



  export type aluno_turmaSelectScalar = {
    id_usuario?: boolean
    id_turma?: boolean
  }

  export type aluno_turmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "id_turma", ExtArgs["result"]["aluno_turma"]>

  export type $aluno_turmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aluno_turma"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      id_turma: number
    }, ExtArgs["result"]["aluno_turma"]>
    composites: {}
  }

  type aluno_turmaGetPayload<S extends boolean | null | undefined | aluno_turmaDefaultArgs> = $Result.GetResult<Prisma.$aluno_turmaPayload, S>

  type aluno_turmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<aluno_turmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Aluno_turmaCountAggregateInputType | true
    }

  export interface aluno_turmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aluno_turma'], meta: { name: 'aluno_turma' } }
    /**
     * Find zero or one Aluno_turma that matches the filter.
     * @param {aluno_turmaFindUniqueArgs} args - Arguments to find a Aluno_turma
     * @example
     * // Get one Aluno_turma
     * const aluno_turma = await prisma.aluno_turma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends aluno_turmaFindUniqueArgs>(args: SelectSubset<T, aluno_turmaFindUniqueArgs<ExtArgs>>): Prisma__aluno_turmaClient<$Result.GetResult<Prisma.$aluno_turmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aluno_turma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {aluno_turmaFindUniqueOrThrowArgs} args - Arguments to find a Aluno_turma
     * @example
     * // Get one Aluno_turma
     * const aluno_turma = await prisma.aluno_turma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends aluno_turmaFindUniqueOrThrowArgs>(args: SelectSubset<T, aluno_turmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__aluno_turmaClient<$Result.GetResult<Prisma.$aluno_turmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno_turma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aluno_turmaFindFirstArgs} args - Arguments to find a Aluno_turma
     * @example
     * // Get one Aluno_turma
     * const aluno_turma = await prisma.aluno_turma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends aluno_turmaFindFirstArgs>(args?: SelectSubset<T, aluno_turmaFindFirstArgs<ExtArgs>>): Prisma__aluno_turmaClient<$Result.GetResult<Prisma.$aluno_turmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno_turma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aluno_turmaFindFirstOrThrowArgs} args - Arguments to find a Aluno_turma
     * @example
     * // Get one Aluno_turma
     * const aluno_turma = await prisma.aluno_turma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends aluno_turmaFindFirstOrThrowArgs>(args?: SelectSubset<T, aluno_turmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__aluno_turmaClient<$Result.GetResult<Prisma.$aluno_turmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aluno_turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aluno_turmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aluno_turmas
     * const aluno_turmas = await prisma.aluno_turma.findMany()
     * 
     * // Get first 10 Aluno_turmas
     * const aluno_turmas = await prisma.aluno_turma.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const aluno_turmaWithId_usuarioOnly = await prisma.aluno_turma.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends aluno_turmaFindManyArgs>(args?: SelectSubset<T, aluno_turmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aluno_turmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aluno_turma.
     * @param {aluno_turmaCreateArgs} args - Arguments to create a Aluno_turma.
     * @example
     * // Create one Aluno_turma
     * const Aluno_turma = await prisma.aluno_turma.create({
     *   data: {
     *     // ... data to create a Aluno_turma
     *   }
     * })
     * 
     */
    create<T extends aluno_turmaCreateArgs>(args: SelectSubset<T, aluno_turmaCreateArgs<ExtArgs>>): Prisma__aluno_turmaClient<$Result.GetResult<Prisma.$aluno_turmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aluno_turmas.
     * @param {aluno_turmaCreateManyArgs} args - Arguments to create many Aluno_turmas.
     * @example
     * // Create many Aluno_turmas
     * const aluno_turma = await prisma.aluno_turma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends aluno_turmaCreateManyArgs>(args?: SelectSubset<T, aluno_turmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aluno_turma.
     * @param {aluno_turmaDeleteArgs} args - Arguments to delete one Aluno_turma.
     * @example
     * // Delete one Aluno_turma
     * const Aluno_turma = await prisma.aluno_turma.delete({
     *   where: {
     *     // ... filter to delete one Aluno_turma
     *   }
     * })
     * 
     */
    delete<T extends aluno_turmaDeleteArgs>(args: SelectSubset<T, aluno_turmaDeleteArgs<ExtArgs>>): Prisma__aluno_turmaClient<$Result.GetResult<Prisma.$aluno_turmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aluno_turma.
     * @param {aluno_turmaUpdateArgs} args - Arguments to update one Aluno_turma.
     * @example
     * // Update one Aluno_turma
     * const aluno_turma = await prisma.aluno_turma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends aluno_turmaUpdateArgs>(args: SelectSubset<T, aluno_turmaUpdateArgs<ExtArgs>>): Prisma__aluno_turmaClient<$Result.GetResult<Prisma.$aluno_turmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aluno_turmas.
     * @param {aluno_turmaDeleteManyArgs} args - Arguments to filter Aluno_turmas to delete.
     * @example
     * // Delete a few Aluno_turmas
     * const { count } = await prisma.aluno_turma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends aluno_turmaDeleteManyArgs>(args?: SelectSubset<T, aluno_turmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aluno_turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aluno_turmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aluno_turmas
     * const aluno_turma = await prisma.aluno_turma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends aluno_turmaUpdateManyArgs>(args: SelectSubset<T, aluno_turmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aluno_turma.
     * @param {aluno_turmaUpsertArgs} args - Arguments to update or create a Aluno_turma.
     * @example
     * // Update or create a Aluno_turma
     * const aluno_turma = await prisma.aluno_turma.upsert({
     *   create: {
     *     // ... data to create a Aluno_turma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno_turma we want to update
     *   }
     * })
     */
    upsert<T extends aluno_turmaUpsertArgs>(args: SelectSubset<T, aluno_turmaUpsertArgs<ExtArgs>>): Prisma__aluno_turmaClient<$Result.GetResult<Prisma.$aluno_turmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aluno_turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aluno_turmaCountArgs} args - Arguments to filter Aluno_turmas to count.
     * @example
     * // Count the number of Aluno_turmas
     * const count = await prisma.aluno_turma.count({
     *   where: {
     *     // ... the filter for the Aluno_turmas we want to count
     *   }
     * })
    **/
    count<T extends aluno_turmaCountArgs>(
      args?: Subset<T, aluno_turmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Aluno_turmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno_turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Aluno_turmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Aluno_turmaAggregateArgs>(args: Subset<T, Aluno_turmaAggregateArgs>): Prisma.PrismaPromise<GetAluno_turmaAggregateType<T>>

    /**
     * Group by Aluno_turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aluno_turmaGroupByArgs} args - Group by arguments.
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
      T extends aluno_turmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aluno_turmaGroupByArgs['orderBy'] }
        : { orderBy?: aluno_turmaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, aluno_turmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAluno_turmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aluno_turma model
   */
  readonly fields: aluno_turmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aluno_turma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aluno_turmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the aluno_turma model
   */
  interface aluno_turmaFieldRefs {
    readonly id_usuario: FieldRef<"aluno_turma", 'Int'>
    readonly id_turma: FieldRef<"aluno_turma", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * aluno_turma findUnique
   */
  export type aluno_turmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno_turma
     */
    select?: aluno_turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno_turma
     */
    omit?: aluno_turmaOmit<ExtArgs> | null
    /**
     * Filter, which aluno_turma to fetch.
     */
    where: aluno_turmaWhereUniqueInput
  }

  /**
   * aluno_turma findUniqueOrThrow
   */
  export type aluno_turmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno_turma
     */
    select?: aluno_turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno_turma
     */
    omit?: aluno_turmaOmit<ExtArgs> | null
    /**
     * Filter, which aluno_turma to fetch.
     */
    where: aluno_turmaWhereUniqueInput
  }

  /**
   * aluno_turma findFirst
   */
  export type aluno_turmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno_turma
     */
    select?: aluno_turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno_turma
     */
    omit?: aluno_turmaOmit<ExtArgs> | null
    /**
     * Filter, which aluno_turma to fetch.
     */
    where?: aluno_turmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aluno_turmas to fetch.
     */
    orderBy?: aluno_turmaOrderByWithRelationInput | aluno_turmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aluno_turmas.
     */
    cursor?: aluno_turmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aluno_turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aluno_turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aluno_turmas.
     */
    distinct?: Aluno_turmaScalarFieldEnum | Aluno_turmaScalarFieldEnum[]
  }

  /**
   * aluno_turma findFirstOrThrow
   */
  export type aluno_turmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno_turma
     */
    select?: aluno_turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno_turma
     */
    omit?: aluno_turmaOmit<ExtArgs> | null
    /**
     * Filter, which aluno_turma to fetch.
     */
    where?: aluno_turmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aluno_turmas to fetch.
     */
    orderBy?: aluno_turmaOrderByWithRelationInput | aluno_turmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aluno_turmas.
     */
    cursor?: aluno_turmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aluno_turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aluno_turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aluno_turmas.
     */
    distinct?: Aluno_turmaScalarFieldEnum | Aluno_turmaScalarFieldEnum[]
  }

  /**
   * aluno_turma findMany
   */
  export type aluno_turmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno_turma
     */
    select?: aluno_turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno_turma
     */
    omit?: aluno_turmaOmit<ExtArgs> | null
    /**
     * Filter, which aluno_turmas to fetch.
     */
    where?: aluno_turmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aluno_turmas to fetch.
     */
    orderBy?: aluno_turmaOrderByWithRelationInput | aluno_turmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aluno_turmas.
     */
    cursor?: aluno_turmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aluno_turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aluno_turmas.
     */
    skip?: number
    distinct?: Aluno_turmaScalarFieldEnum | Aluno_turmaScalarFieldEnum[]
  }

  /**
   * aluno_turma create
   */
  export type aluno_turmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno_turma
     */
    select?: aluno_turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno_turma
     */
    omit?: aluno_turmaOmit<ExtArgs> | null
    /**
     * The data needed to create a aluno_turma.
     */
    data: XOR<aluno_turmaCreateInput, aluno_turmaUncheckedCreateInput>
  }

  /**
   * aluno_turma createMany
   */
  export type aluno_turmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many aluno_turmas.
     */
    data: aluno_turmaCreateManyInput | aluno_turmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aluno_turma update
   */
  export type aluno_turmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno_turma
     */
    select?: aluno_turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno_turma
     */
    omit?: aluno_turmaOmit<ExtArgs> | null
    /**
     * The data needed to update a aluno_turma.
     */
    data: XOR<aluno_turmaUpdateInput, aluno_turmaUncheckedUpdateInput>
    /**
     * Choose, which aluno_turma to update.
     */
    where: aluno_turmaWhereUniqueInput
  }

  /**
   * aluno_turma updateMany
   */
  export type aluno_turmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update aluno_turmas.
     */
    data: XOR<aluno_turmaUpdateManyMutationInput, aluno_turmaUncheckedUpdateManyInput>
    /**
     * Filter which aluno_turmas to update
     */
    where?: aluno_turmaWhereInput
    /**
     * Limit how many aluno_turmas to update.
     */
    limit?: number
  }

  /**
   * aluno_turma upsert
   */
  export type aluno_turmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno_turma
     */
    select?: aluno_turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno_turma
     */
    omit?: aluno_turmaOmit<ExtArgs> | null
    /**
     * The filter to search for the aluno_turma to update in case it exists.
     */
    where: aluno_turmaWhereUniqueInput
    /**
     * In case the aluno_turma found by the `where` argument doesn't exist, create a new aluno_turma with this data.
     */
    create: XOR<aluno_turmaCreateInput, aluno_turmaUncheckedCreateInput>
    /**
     * In case the aluno_turma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aluno_turmaUpdateInput, aluno_turmaUncheckedUpdateInput>
  }

  /**
   * aluno_turma delete
   */
  export type aluno_turmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno_turma
     */
    select?: aluno_turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno_turma
     */
    omit?: aluno_turmaOmit<ExtArgs> | null
    /**
     * Filter which aluno_turma to delete.
     */
    where: aluno_turmaWhereUniqueInput
  }

  /**
   * aluno_turma deleteMany
   */
  export type aluno_turmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aluno_turmas to delete
     */
    where?: aluno_turmaWhereInput
    /**
     * Limit how many aluno_turmas to delete.
     */
    limit?: number
  }

  /**
   * aluno_turma without action
   */
  export type aluno_turmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aluno_turma
     */
    select?: aluno_turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aluno_turma
     */
    omit?: aluno_turmaOmit<ExtArgs> | null
  }


  /**
   * Model avisos
   */

  export type AggregateAvisos = {
    _count: AvisosCountAggregateOutputType | null
    _avg: AvisosAvgAggregateOutputType | null
    _sum: AvisosSumAggregateOutputType | null
    _min: AvisosMinAggregateOutputType | null
    _max: AvisosMaxAggregateOutputType | null
  }

  export type AvisosAvgAggregateOutputType = {
    id_aviso: number | null
    id_turma: number | null
  }

  export type AvisosSumAggregateOutputType = {
    id_aviso: number | null
    id_turma: number | null
  }

  export type AvisosMinAggregateOutputType = {
    id_aviso: number | null
    data_hora: Date | null
    titulo: string | null
    conteudo: Uint8Array | null
    id_turma: number | null
  }

  export type AvisosMaxAggregateOutputType = {
    id_aviso: number | null
    data_hora: Date | null
    titulo: string | null
    conteudo: Uint8Array | null
    id_turma: number | null
  }

  export type AvisosCountAggregateOutputType = {
    id_aviso: number
    data_hora: number
    titulo: number
    conteudo: number
    id_turma: number
    _all: number
  }


  export type AvisosAvgAggregateInputType = {
    id_aviso?: true
    id_turma?: true
  }

  export type AvisosSumAggregateInputType = {
    id_aviso?: true
    id_turma?: true
  }

  export type AvisosMinAggregateInputType = {
    id_aviso?: true
    data_hora?: true
    titulo?: true
    conteudo?: true
    id_turma?: true
  }

  export type AvisosMaxAggregateInputType = {
    id_aviso?: true
    data_hora?: true
    titulo?: true
    conteudo?: true
    id_turma?: true
  }

  export type AvisosCountAggregateInputType = {
    id_aviso?: true
    data_hora?: true
    titulo?: true
    conteudo?: true
    id_turma?: true
    _all?: true
  }

  export type AvisosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avisos to aggregate.
     */
    where?: avisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avisos to fetch.
     */
    orderBy?: avisosOrderByWithRelationInput | avisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: avisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned avisos
    **/
    _count?: true | AvisosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvisosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvisosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvisosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvisosMaxAggregateInputType
  }

  export type GetAvisosAggregateType<T extends AvisosAggregateArgs> = {
        [P in keyof T & keyof AggregateAvisos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvisos[P]>
      : GetScalarType<T[P], AggregateAvisos[P]>
  }




  export type avisosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avisosWhereInput
    orderBy?: avisosOrderByWithAggregationInput | avisosOrderByWithAggregationInput[]
    by: AvisosScalarFieldEnum[] | AvisosScalarFieldEnum
    having?: avisosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvisosCountAggregateInputType | true
    _avg?: AvisosAvgAggregateInputType
    _sum?: AvisosSumAggregateInputType
    _min?: AvisosMinAggregateInputType
    _max?: AvisosMaxAggregateInputType
  }

  export type AvisosGroupByOutputType = {
    id_aviso: number
    data_hora: Date | null
    titulo: string | null
    conteudo: Uint8Array | null
    id_turma: number
    _count: AvisosCountAggregateOutputType | null
    _avg: AvisosAvgAggregateOutputType | null
    _sum: AvisosSumAggregateOutputType | null
    _min: AvisosMinAggregateOutputType | null
    _max: AvisosMaxAggregateOutputType | null
  }

  type GetAvisosGroupByPayload<T extends avisosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvisosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvisosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvisosGroupByOutputType[P]>
            : GetScalarType<T[P], AvisosGroupByOutputType[P]>
        }
      >
    >


  export type avisosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aviso?: boolean
    data_hora?: boolean
    titulo?: boolean
    conteudo?: boolean
    id_turma?: boolean
  }, ExtArgs["result"]["avisos"]>



  export type avisosSelectScalar = {
    id_aviso?: boolean
    data_hora?: boolean
    titulo?: boolean
    conteudo?: boolean
    id_turma?: boolean
  }

  export type avisosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_aviso" | "data_hora" | "titulo" | "conteudo" | "id_turma", ExtArgs["result"]["avisos"]>

  export type $avisosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "avisos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_aviso: number
      data_hora: Date | null
      titulo: string | null
      conteudo: Uint8Array | null
      id_turma: number
    }, ExtArgs["result"]["avisos"]>
    composites: {}
  }

  type avisosGetPayload<S extends boolean | null | undefined | avisosDefaultArgs> = $Result.GetResult<Prisma.$avisosPayload, S>

  type avisosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<avisosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvisosCountAggregateInputType | true
    }

  export interface avisosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['avisos'], meta: { name: 'avisos' } }
    /**
     * Find zero or one Avisos that matches the filter.
     * @param {avisosFindUniqueArgs} args - Arguments to find a Avisos
     * @example
     * // Get one Avisos
     * const avisos = await prisma.avisos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends avisosFindUniqueArgs>(args: SelectSubset<T, avisosFindUniqueArgs<ExtArgs>>): Prisma__avisosClient<$Result.GetResult<Prisma.$avisosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avisos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {avisosFindUniqueOrThrowArgs} args - Arguments to find a Avisos
     * @example
     * // Get one Avisos
     * const avisos = await prisma.avisos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends avisosFindUniqueOrThrowArgs>(args: SelectSubset<T, avisosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__avisosClient<$Result.GetResult<Prisma.$avisosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avisosFindFirstArgs} args - Arguments to find a Avisos
     * @example
     * // Get one Avisos
     * const avisos = await prisma.avisos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends avisosFindFirstArgs>(args?: SelectSubset<T, avisosFindFirstArgs<ExtArgs>>): Prisma__avisosClient<$Result.GetResult<Prisma.$avisosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avisos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avisosFindFirstOrThrowArgs} args - Arguments to find a Avisos
     * @example
     * // Get one Avisos
     * const avisos = await prisma.avisos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends avisosFindFirstOrThrowArgs>(args?: SelectSubset<T, avisosFindFirstOrThrowArgs<ExtArgs>>): Prisma__avisosClient<$Result.GetResult<Prisma.$avisosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avisosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avisos
     * const avisos = await prisma.avisos.findMany()
     * 
     * // Get first 10 Avisos
     * const avisos = await prisma.avisos.findMany({ take: 10 })
     * 
     * // Only select the `id_aviso`
     * const avisosWithId_avisoOnly = await prisma.avisos.findMany({ select: { id_aviso: true } })
     * 
     */
    findMany<T extends avisosFindManyArgs>(args?: SelectSubset<T, avisosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avisosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avisos.
     * @param {avisosCreateArgs} args - Arguments to create a Avisos.
     * @example
     * // Create one Avisos
     * const Avisos = await prisma.avisos.create({
     *   data: {
     *     // ... data to create a Avisos
     *   }
     * })
     * 
     */
    create<T extends avisosCreateArgs>(args: SelectSubset<T, avisosCreateArgs<ExtArgs>>): Prisma__avisosClient<$Result.GetResult<Prisma.$avisosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avisos.
     * @param {avisosCreateManyArgs} args - Arguments to create many Avisos.
     * @example
     * // Create many Avisos
     * const avisos = await prisma.avisos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends avisosCreateManyArgs>(args?: SelectSubset<T, avisosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Avisos.
     * @param {avisosDeleteArgs} args - Arguments to delete one Avisos.
     * @example
     * // Delete one Avisos
     * const Avisos = await prisma.avisos.delete({
     *   where: {
     *     // ... filter to delete one Avisos
     *   }
     * })
     * 
     */
    delete<T extends avisosDeleteArgs>(args: SelectSubset<T, avisosDeleteArgs<ExtArgs>>): Prisma__avisosClient<$Result.GetResult<Prisma.$avisosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avisos.
     * @param {avisosUpdateArgs} args - Arguments to update one Avisos.
     * @example
     * // Update one Avisos
     * const avisos = await prisma.avisos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends avisosUpdateArgs>(args: SelectSubset<T, avisosUpdateArgs<ExtArgs>>): Prisma__avisosClient<$Result.GetResult<Prisma.$avisosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avisos.
     * @param {avisosDeleteManyArgs} args - Arguments to filter Avisos to delete.
     * @example
     * // Delete a few Avisos
     * const { count } = await prisma.avisos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends avisosDeleteManyArgs>(args?: SelectSubset<T, avisosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avisosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avisos
     * const avisos = await prisma.avisos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends avisosUpdateManyArgs>(args: SelectSubset<T, avisosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avisos.
     * @param {avisosUpsertArgs} args - Arguments to update or create a Avisos.
     * @example
     * // Update or create a Avisos
     * const avisos = await prisma.avisos.upsert({
     *   create: {
     *     // ... data to create a Avisos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avisos we want to update
     *   }
     * })
     */
    upsert<T extends avisosUpsertArgs>(args: SelectSubset<T, avisosUpsertArgs<ExtArgs>>): Prisma__avisosClient<$Result.GetResult<Prisma.$avisosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avisosCountArgs} args - Arguments to filter Avisos to count.
     * @example
     * // Count the number of Avisos
     * const count = await prisma.avisos.count({
     *   where: {
     *     // ... the filter for the Avisos we want to count
     *   }
     * })
    **/
    count<T extends avisosCountArgs>(
      args?: Subset<T, avisosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvisosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvisosAggregateArgs>(args: Subset<T, AvisosAggregateArgs>): Prisma.PrismaPromise<GetAvisosAggregateType<T>>

    /**
     * Group by Avisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avisosGroupByArgs} args - Group by arguments.
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
      T extends avisosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: avisosGroupByArgs['orderBy'] }
        : { orderBy?: avisosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, avisosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvisosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the avisos model
   */
  readonly fields: avisosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for avisos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__avisosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the avisos model
   */
  interface avisosFieldRefs {
    readonly id_aviso: FieldRef<"avisos", 'Int'>
    readonly data_hora: FieldRef<"avisos", 'DateTime'>
    readonly titulo: FieldRef<"avisos", 'String'>
    readonly conteudo: FieldRef<"avisos", 'Bytes'>
    readonly id_turma: FieldRef<"avisos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * avisos findUnique
   */
  export type avisosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avisos
     */
    select?: avisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avisos
     */
    omit?: avisosOmit<ExtArgs> | null
    /**
     * Filter, which avisos to fetch.
     */
    where: avisosWhereUniqueInput
  }

  /**
   * avisos findUniqueOrThrow
   */
  export type avisosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avisos
     */
    select?: avisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avisos
     */
    omit?: avisosOmit<ExtArgs> | null
    /**
     * Filter, which avisos to fetch.
     */
    where: avisosWhereUniqueInput
  }

  /**
   * avisos findFirst
   */
  export type avisosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avisos
     */
    select?: avisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avisos
     */
    omit?: avisosOmit<ExtArgs> | null
    /**
     * Filter, which avisos to fetch.
     */
    where?: avisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avisos to fetch.
     */
    orderBy?: avisosOrderByWithRelationInput | avisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avisos.
     */
    cursor?: avisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avisos.
     */
    distinct?: AvisosScalarFieldEnum | AvisosScalarFieldEnum[]
  }

  /**
   * avisos findFirstOrThrow
   */
  export type avisosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avisos
     */
    select?: avisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avisos
     */
    omit?: avisosOmit<ExtArgs> | null
    /**
     * Filter, which avisos to fetch.
     */
    where?: avisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avisos to fetch.
     */
    orderBy?: avisosOrderByWithRelationInput | avisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avisos.
     */
    cursor?: avisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avisos.
     */
    distinct?: AvisosScalarFieldEnum | AvisosScalarFieldEnum[]
  }

  /**
   * avisos findMany
   */
  export type avisosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avisos
     */
    select?: avisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avisos
     */
    omit?: avisosOmit<ExtArgs> | null
    /**
     * Filter, which avisos to fetch.
     */
    where?: avisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avisos to fetch.
     */
    orderBy?: avisosOrderByWithRelationInput | avisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing avisos.
     */
    cursor?: avisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avisos.
     */
    skip?: number
    distinct?: AvisosScalarFieldEnum | AvisosScalarFieldEnum[]
  }

  /**
   * avisos create
   */
  export type avisosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avisos
     */
    select?: avisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avisos
     */
    omit?: avisosOmit<ExtArgs> | null
    /**
     * The data needed to create a avisos.
     */
    data: XOR<avisosCreateInput, avisosUncheckedCreateInput>
  }

  /**
   * avisos createMany
   */
  export type avisosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many avisos.
     */
    data: avisosCreateManyInput | avisosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * avisos update
   */
  export type avisosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avisos
     */
    select?: avisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avisos
     */
    omit?: avisosOmit<ExtArgs> | null
    /**
     * The data needed to update a avisos.
     */
    data: XOR<avisosUpdateInput, avisosUncheckedUpdateInput>
    /**
     * Choose, which avisos to update.
     */
    where: avisosWhereUniqueInput
  }

  /**
   * avisos updateMany
   */
  export type avisosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update avisos.
     */
    data: XOR<avisosUpdateManyMutationInput, avisosUncheckedUpdateManyInput>
    /**
     * Filter which avisos to update
     */
    where?: avisosWhereInput
    /**
     * Limit how many avisos to update.
     */
    limit?: number
  }

  /**
   * avisos upsert
   */
  export type avisosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avisos
     */
    select?: avisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avisos
     */
    omit?: avisosOmit<ExtArgs> | null
    /**
     * The filter to search for the avisos to update in case it exists.
     */
    where: avisosWhereUniqueInput
    /**
     * In case the avisos found by the `where` argument doesn't exist, create a new avisos with this data.
     */
    create: XOR<avisosCreateInput, avisosUncheckedCreateInput>
    /**
     * In case the avisos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<avisosUpdateInput, avisosUncheckedUpdateInput>
  }

  /**
   * avisos delete
   */
  export type avisosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avisos
     */
    select?: avisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avisos
     */
    omit?: avisosOmit<ExtArgs> | null
    /**
     * Filter which avisos to delete.
     */
    where: avisosWhereUniqueInput
  }

  /**
   * avisos deleteMany
   */
  export type avisosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avisos to delete
     */
    where?: avisosWhereInput
    /**
     * Limit how many avisos to delete.
     */
    limit?: number
  }

  /**
   * avisos without action
   */
  export type avisosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avisos
     */
    select?: avisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avisos
     */
    omit?: avisosOmit<ExtArgs> | null
  }


  /**
   * Model comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id: number | null
    id_treinamento: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    id_treinamento: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    data_hora: Date | null
    comentario_aluno: Uint8Array | null
    comentario_professor: string | null
    id_treinamento: number | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    data_hora: Date | null
    comentario_aluno: Uint8Array | null
    comentario_professor: string | null
    id_treinamento: number | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    data_hora: number
    comentario_aluno: number
    comentario_professor: number
    id_treinamento: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    id_treinamento?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    id_treinamento?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    data_hora?: true
    comentario_aluno?: true
    comentario_professor?: true
    id_treinamento?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    data_hora?: true
    comentario_aluno?: true
    comentario_professor?: true
    id_treinamento?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    data_hora?: true
    comentario_aluno?: true
    comentario_professor?: true
    id_treinamento?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comentario to aggregate.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type comentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comentarioWhereInput
    orderBy?: comentarioOrderByWithAggregationInput | comentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: comentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: number
    data_hora: Date | null
    comentario_aluno: Uint8Array | null
    comentario_professor: string | null
    id_treinamento: number
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends comentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type comentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_hora?: boolean
    comentario_aluno?: boolean
    comentario_professor?: boolean
    id_treinamento?: boolean
  }, ExtArgs["result"]["comentario"]>



  export type comentarioSelectScalar = {
    id?: boolean
    data_hora?: boolean
    comentario_aluno?: boolean
    comentario_professor?: boolean
    id_treinamento?: boolean
  }

  export type comentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_hora" | "comentario_aluno" | "comentario_professor" | "id_treinamento", ExtArgs["result"]["comentario"]>

  export type $comentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comentario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data_hora: Date | null
      comentario_aluno: Uint8Array | null
      comentario_professor: string | null
      id_treinamento: number
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type comentarioGetPayload<S extends boolean | null | undefined | comentarioDefaultArgs> = $Result.GetResult<Prisma.$comentarioPayload, S>

  type comentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface comentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comentario'], meta: { name: 'comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {comentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comentarioFindUniqueArgs>(args: SelectSubset<T, comentarioFindUniqueArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, comentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comentarioFindFirstArgs>(args?: SelectSubset<T, comentarioFindFirstArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, comentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends comentarioFindManyArgs>(args?: SelectSubset<T, comentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {comentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends comentarioCreateArgs>(args: SelectSubset<T, comentarioCreateArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {comentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comentarioCreateManyArgs>(args?: SelectSubset<T, comentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comentario.
     * @param {comentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends comentarioDeleteArgs>(args: SelectSubset<T, comentarioDeleteArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {comentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comentarioUpdateArgs>(args: SelectSubset<T, comentarioUpdateArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {comentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comentarioDeleteManyArgs>(args?: SelectSubset<T, comentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comentarioUpdateManyArgs>(args: SelectSubset<T, comentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comentario.
     * @param {comentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends comentarioUpsertArgs>(args: SelectSubset<T, comentarioUpsertArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends comentarioCountArgs>(
      args?: Subset<T, comentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioGroupByArgs} args - Group by arguments.
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
      T extends comentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comentarioGroupByArgs['orderBy'] }
        : { orderBy?: comentarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, comentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comentario model
   */
  readonly fields: comentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the comentario model
   */
  interface comentarioFieldRefs {
    readonly id: FieldRef<"comentario", 'Int'>
    readonly data_hora: FieldRef<"comentario", 'DateTime'>
    readonly comentario_aluno: FieldRef<"comentario", 'Bytes'>
    readonly comentario_professor: FieldRef<"comentario", 'String'>
    readonly id_treinamento: FieldRef<"comentario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * comentario findUnique
   */
  export type comentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where: comentarioWhereUniqueInput
  }

  /**
   * comentario findUniqueOrThrow
   */
  export type comentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where: comentarioWhereUniqueInput
  }

  /**
   * comentario findFirst
   */
  export type comentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comentarios.
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * comentario findFirstOrThrow
   */
  export type comentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comentarios.
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * comentario findMany
   */
  export type comentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Filter, which comentarios to fetch.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comentarios.
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * comentario create
   */
  export type comentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * The data needed to create a comentario.
     */
    data: XOR<comentarioCreateInput, comentarioUncheckedCreateInput>
  }

  /**
   * comentario createMany
   */
  export type comentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comentarios.
     */
    data: comentarioCreateManyInput | comentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comentario update
   */
  export type comentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * The data needed to update a comentario.
     */
    data: XOR<comentarioUpdateInput, comentarioUncheckedUpdateInput>
    /**
     * Choose, which comentario to update.
     */
    where: comentarioWhereUniqueInput
  }

  /**
   * comentario updateMany
   */
  export type comentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comentarios.
     */
    data: XOR<comentarioUpdateManyMutationInput, comentarioUncheckedUpdateManyInput>
    /**
     * Filter which comentarios to update
     */
    where?: comentarioWhereInput
    /**
     * Limit how many comentarios to update.
     */
    limit?: number
  }

  /**
   * comentario upsert
   */
  export type comentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * The filter to search for the comentario to update in case it exists.
     */
    where: comentarioWhereUniqueInput
    /**
     * In case the comentario found by the `where` argument doesn't exist, create a new comentario with this data.
     */
    create: XOR<comentarioCreateInput, comentarioUncheckedCreateInput>
    /**
     * In case the comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comentarioUpdateInput, comentarioUncheckedUpdateInput>
  }

  /**
   * comentario delete
   */
  export type comentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Filter which comentario to delete.
     */
    where: comentarioWhereUniqueInput
  }

  /**
   * comentario deleteMany
   */
  export type comentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comentarios to delete
     */
    where?: comentarioWhereInput
    /**
     * Limit how many comentarios to delete.
     */
    limit?: number
  }

  /**
   * comentario without action
   */
  export type comentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
  }


  /**
   * Model treinamento
   */

  export type AggregateTreinamento = {
    _count: TreinamentoCountAggregateOutputType | null
    _avg: TreinamentoAvgAggregateOutputType | null
    _sum: TreinamentoSumAggregateOutputType | null
    _min: TreinamentoMinAggregateOutputType | null
    _max: TreinamentoMaxAggregateOutputType | null
  }

  export type TreinamentoAvgAggregateOutputType = {
    id: number | null
    media_acertos: number | null
    avaliacao_prof: number | null
    id_aluno: number | null
    id_turma: number | null
    id_professor: number | null
  }

  export type TreinamentoSumAggregateOutputType = {
    id: number | null
    media_acertos: number | null
    avaliacao_prof: number | null
    id_aluno: number | null
    id_turma: number | null
    id_professor: number | null
  }

  export type TreinamentoMinAggregateOutputType = {
    id: number | null
    data_hora: Date | null
    media_acertos: number | null
    avaliacao_prof: number | null
    id_aluno: number | null
    id_turma: number | null
    id_professor: number | null
  }

  export type TreinamentoMaxAggregateOutputType = {
    id: number | null
    data_hora: Date | null
    media_acertos: number | null
    avaliacao_prof: number | null
    id_aluno: number | null
    id_turma: number | null
    id_professor: number | null
  }

  export type TreinamentoCountAggregateOutputType = {
    id: number
    data_hora: number
    media_acertos: number
    avaliacao_prof: number
    id_aluno: number
    id_turma: number
    id_professor: number
    _all: number
  }


  export type TreinamentoAvgAggregateInputType = {
    id?: true
    media_acertos?: true
    avaliacao_prof?: true
    id_aluno?: true
    id_turma?: true
    id_professor?: true
  }

  export type TreinamentoSumAggregateInputType = {
    id?: true
    media_acertos?: true
    avaliacao_prof?: true
    id_aluno?: true
    id_turma?: true
    id_professor?: true
  }

  export type TreinamentoMinAggregateInputType = {
    id?: true
    data_hora?: true
    media_acertos?: true
    avaliacao_prof?: true
    id_aluno?: true
    id_turma?: true
    id_professor?: true
  }

  export type TreinamentoMaxAggregateInputType = {
    id?: true
    data_hora?: true
    media_acertos?: true
    avaliacao_prof?: true
    id_aluno?: true
    id_turma?: true
    id_professor?: true
  }

  export type TreinamentoCountAggregateInputType = {
    id?: true
    data_hora?: true
    media_acertos?: true
    avaliacao_prof?: true
    id_aluno?: true
    id_turma?: true
    id_professor?: true
    _all?: true
  }

  export type TreinamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which treinamento to aggregate.
     */
    where?: treinamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of treinamentos to fetch.
     */
    orderBy?: treinamentoOrderByWithRelationInput | treinamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: treinamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` treinamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` treinamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned treinamentos
    **/
    _count?: true | TreinamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreinamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreinamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreinamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreinamentoMaxAggregateInputType
  }

  export type GetTreinamentoAggregateType<T extends TreinamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateTreinamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreinamento[P]>
      : GetScalarType<T[P], AggregateTreinamento[P]>
  }




  export type treinamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: treinamentoWhereInput
    orderBy?: treinamentoOrderByWithAggregationInput | treinamentoOrderByWithAggregationInput[]
    by: TreinamentoScalarFieldEnum[] | TreinamentoScalarFieldEnum
    having?: treinamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreinamentoCountAggregateInputType | true
    _avg?: TreinamentoAvgAggregateInputType
    _sum?: TreinamentoSumAggregateInputType
    _min?: TreinamentoMinAggregateInputType
    _max?: TreinamentoMaxAggregateInputType
  }

  export type TreinamentoGroupByOutputType = {
    id: number
    data_hora: Date | null
    media_acertos: number | null
    avaliacao_prof: number | null
    id_aluno: number
    id_turma: number
    id_professor: number
    _count: TreinamentoCountAggregateOutputType | null
    _avg: TreinamentoAvgAggregateOutputType | null
    _sum: TreinamentoSumAggregateOutputType | null
    _min: TreinamentoMinAggregateOutputType | null
    _max: TreinamentoMaxAggregateOutputType | null
  }

  type GetTreinamentoGroupByPayload<T extends treinamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreinamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreinamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreinamentoGroupByOutputType[P]>
            : GetScalarType<T[P], TreinamentoGroupByOutputType[P]>
        }
      >
    >


  export type treinamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_hora?: boolean
    media_acertos?: boolean
    avaliacao_prof?: boolean
    id_aluno?: boolean
    id_turma?: boolean
    id_professor?: boolean
  }, ExtArgs["result"]["treinamento"]>



  export type treinamentoSelectScalar = {
    id?: boolean
    data_hora?: boolean
    media_acertos?: boolean
    avaliacao_prof?: boolean
    id_aluno?: boolean
    id_turma?: boolean
    id_professor?: boolean
  }

  export type treinamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_hora" | "media_acertos" | "avaliacao_prof" | "id_aluno" | "id_turma" | "id_professor", ExtArgs["result"]["treinamento"]>

  export type $treinamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "treinamento"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data_hora: Date | null
      media_acertos: number | null
      avaliacao_prof: number | null
      id_aluno: number
      id_turma: number
      id_professor: number
    }, ExtArgs["result"]["treinamento"]>
    composites: {}
  }

  type treinamentoGetPayload<S extends boolean | null | undefined | treinamentoDefaultArgs> = $Result.GetResult<Prisma.$treinamentoPayload, S>

  type treinamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<treinamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreinamentoCountAggregateInputType | true
    }

  export interface treinamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['treinamento'], meta: { name: 'treinamento' } }
    /**
     * Find zero or one Treinamento that matches the filter.
     * @param {treinamentoFindUniqueArgs} args - Arguments to find a Treinamento
     * @example
     * // Get one Treinamento
     * const treinamento = await prisma.treinamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends treinamentoFindUniqueArgs>(args: SelectSubset<T, treinamentoFindUniqueArgs<ExtArgs>>): Prisma__treinamentoClient<$Result.GetResult<Prisma.$treinamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Treinamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {treinamentoFindUniqueOrThrowArgs} args - Arguments to find a Treinamento
     * @example
     * // Get one Treinamento
     * const treinamento = await prisma.treinamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends treinamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, treinamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__treinamentoClient<$Result.GetResult<Prisma.$treinamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treinamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treinamentoFindFirstArgs} args - Arguments to find a Treinamento
     * @example
     * // Get one Treinamento
     * const treinamento = await prisma.treinamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends treinamentoFindFirstArgs>(args?: SelectSubset<T, treinamentoFindFirstArgs<ExtArgs>>): Prisma__treinamentoClient<$Result.GetResult<Prisma.$treinamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treinamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treinamentoFindFirstOrThrowArgs} args - Arguments to find a Treinamento
     * @example
     * // Get one Treinamento
     * const treinamento = await prisma.treinamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends treinamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, treinamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__treinamentoClient<$Result.GetResult<Prisma.$treinamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Treinamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treinamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Treinamentos
     * const treinamentos = await prisma.treinamento.findMany()
     * 
     * // Get first 10 Treinamentos
     * const treinamentos = await prisma.treinamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treinamentoWithIdOnly = await prisma.treinamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends treinamentoFindManyArgs>(args?: SelectSubset<T, treinamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$treinamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Treinamento.
     * @param {treinamentoCreateArgs} args - Arguments to create a Treinamento.
     * @example
     * // Create one Treinamento
     * const Treinamento = await prisma.treinamento.create({
     *   data: {
     *     // ... data to create a Treinamento
     *   }
     * })
     * 
     */
    create<T extends treinamentoCreateArgs>(args: SelectSubset<T, treinamentoCreateArgs<ExtArgs>>): Prisma__treinamentoClient<$Result.GetResult<Prisma.$treinamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Treinamentos.
     * @param {treinamentoCreateManyArgs} args - Arguments to create many Treinamentos.
     * @example
     * // Create many Treinamentos
     * const treinamento = await prisma.treinamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends treinamentoCreateManyArgs>(args?: SelectSubset<T, treinamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Treinamento.
     * @param {treinamentoDeleteArgs} args - Arguments to delete one Treinamento.
     * @example
     * // Delete one Treinamento
     * const Treinamento = await prisma.treinamento.delete({
     *   where: {
     *     // ... filter to delete one Treinamento
     *   }
     * })
     * 
     */
    delete<T extends treinamentoDeleteArgs>(args: SelectSubset<T, treinamentoDeleteArgs<ExtArgs>>): Prisma__treinamentoClient<$Result.GetResult<Prisma.$treinamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Treinamento.
     * @param {treinamentoUpdateArgs} args - Arguments to update one Treinamento.
     * @example
     * // Update one Treinamento
     * const treinamento = await prisma.treinamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends treinamentoUpdateArgs>(args: SelectSubset<T, treinamentoUpdateArgs<ExtArgs>>): Prisma__treinamentoClient<$Result.GetResult<Prisma.$treinamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Treinamentos.
     * @param {treinamentoDeleteManyArgs} args - Arguments to filter Treinamentos to delete.
     * @example
     * // Delete a few Treinamentos
     * const { count } = await prisma.treinamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends treinamentoDeleteManyArgs>(args?: SelectSubset<T, treinamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treinamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treinamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Treinamentos
     * const treinamento = await prisma.treinamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends treinamentoUpdateManyArgs>(args: SelectSubset<T, treinamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Treinamento.
     * @param {treinamentoUpsertArgs} args - Arguments to update or create a Treinamento.
     * @example
     * // Update or create a Treinamento
     * const treinamento = await prisma.treinamento.upsert({
     *   create: {
     *     // ... data to create a Treinamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Treinamento we want to update
     *   }
     * })
     */
    upsert<T extends treinamentoUpsertArgs>(args: SelectSubset<T, treinamentoUpsertArgs<ExtArgs>>): Prisma__treinamentoClient<$Result.GetResult<Prisma.$treinamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Treinamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treinamentoCountArgs} args - Arguments to filter Treinamentos to count.
     * @example
     * // Count the number of Treinamentos
     * const count = await prisma.treinamento.count({
     *   where: {
     *     // ... the filter for the Treinamentos we want to count
     *   }
     * })
    **/
    count<T extends treinamentoCountArgs>(
      args?: Subset<T, treinamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreinamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Treinamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreinamentoAggregateArgs>(args: Subset<T, TreinamentoAggregateArgs>): Prisma.PrismaPromise<GetTreinamentoAggregateType<T>>

    /**
     * Group by Treinamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treinamentoGroupByArgs} args - Group by arguments.
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
      T extends treinamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: treinamentoGroupByArgs['orderBy'] }
        : { orderBy?: treinamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, treinamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreinamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the treinamento model
   */
  readonly fields: treinamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for treinamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__treinamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the treinamento model
   */
  interface treinamentoFieldRefs {
    readonly id: FieldRef<"treinamento", 'Int'>
    readonly data_hora: FieldRef<"treinamento", 'DateTime'>
    readonly media_acertos: FieldRef<"treinamento", 'Float'>
    readonly avaliacao_prof: FieldRef<"treinamento", 'Int'>
    readonly id_aluno: FieldRef<"treinamento", 'Int'>
    readonly id_turma: FieldRef<"treinamento", 'Int'>
    readonly id_professor: FieldRef<"treinamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * treinamento findUnique
   */
  export type treinamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento
     */
    select?: treinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento
     */
    omit?: treinamentoOmit<ExtArgs> | null
    /**
     * Filter, which treinamento to fetch.
     */
    where: treinamentoWhereUniqueInput
  }

  /**
   * treinamento findUniqueOrThrow
   */
  export type treinamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento
     */
    select?: treinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento
     */
    omit?: treinamentoOmit<ExtArgs> | null
    /**
     * Filter, which treinamento to fetch.
     */
    where: treinamentoWhereUniqueInput
  }

  /**
   * treinamento findFirst
   */
  export type treinamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento
     */
    select?: treinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento
     */
    omit?: treinamentoOmit<ExtArgs> | null
    /**
     * Filter, which treinamento to fetch.
     */
    where?: treinamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of treinamentos to fetch.
     */
    orderBy?: treinamentoOrderByWithRelationInput | treinamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for treinamentos.
     */
    cursor?: treinamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` treinamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` treinamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of treinamentos.
     */
    distinct?: TreinamentoScalarFieldEnum | TreinamentoScalarFieldEnum[]
  }

  /**
   * treinamento findFirstOrThrow
   */
  export type treinamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento
     */
    select?: treinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento
     */
    omit?: treinamentoOmit<ExtArgs> | null
    /**
     * Filter, which treinamento to fetch.
     */
    where?: treinamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of treinamentos to fetch.
     */
    orderBy?: treinamentoOrderByWithRelationInput | treinamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for treinamentos.
     */
    cursor?: treinamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` treinamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` treinamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of treinamentos.
     */
    distinct?: TreinamentoScalarFieldEnum | TreinamentoScalarFieldEnum[]
  }

  /**
   * treinamento findMany
   */
  export type treinamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento
     */
    select?: treinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento
     */
    omit?: treinamentoOmit<ExtArgs> | null
    /**
     * Filter, which treinamentos to fetch.
     */
    where?: treinamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of treinamentos to fetch.
     */
    orderBy?: treinamentoOrderByWithRelationInput | treinamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing treinamentos.
     */
    cursor?: treinamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` treinamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` treinamentos.
     */
    skip?: number
    distinct?: TreinamentoScalarFieldEnum | TreinamentoScalarFieldEnum[]
  }

  /**
   * treinamento create
   */
  export type treinamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento
     */
    select?: treinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento
     */
    omit?: treinamentoOmit<ExtArgs> | null
    /**
     * The data needed to create a treinamento.
     */
    data: XOR<treinamentoCreateInput, treinamentoUncheckedCreateInput>
  }

  /**
   * treinamento createMany
   */
  export type treinamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many treinamentos.
     */
    data: treinamentoCreateManyInput | treinamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * treinamento update
   */
  export type treinamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento
     */
    select?: treinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento
     */
    omit?: treinamentoOmit<ExtArgs> | null
    /**
     * The data needed to update a treinamento.
     */
    data: XOR<treinamentoUpdateInput, treinamentoUncheckedUpdateInput>
    /**
     * Choose, which treinamento to update.
     */
    where: treinamentoWhereUniqueInput
  }

  /**
   * treinamento updateMany
   */
  export type treinamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update treinamentos.
     */
    data: XOR<treinamentoUpdateManyMutationInput, treinamentoUncheckedUpdateManyInput>
    /**
     * Filter which treinamentos to update
     */
    where?: treinamentoWhereInput
    /**
     * Limit how many treinamentos to update.
     */
    limit?: number
  }

  /**
   * treinamento upsert
   */
  export type treinamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento
     */
    select?: treinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento
     */
    omit?: treinamentoOmit<ExtArgs> | null
    /**
     * The filter to search for the treinamento to update in case it exists.
     */
    where: treinamentoWhereUniqueInput
    /**
     * In case the treinamento found by the `where` argument doesn't exist, create a new treinamento with this data.
     */
    create: XOR<treinamentoCreateInput, treinamentoUncheckedCreateInput>
    /**
     * In case the treinamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<treinamentoUpdateInput, treinamentoUncheckedUpdateInput>
  }

  /**
   * treinamento delete
   */
  export type treinamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento
     */
    select?: treinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento
     */
    omit?: treinamentoOmit<ExtArgs> | null
    /**
     * Filter which treinamento to delete.
     */
    where: treinamentoWhereUniqueInput
  }

  /**
   * treinamento deleteMany
   */
  export type treinamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which treinamentos to delete
     */
    where?: treinamentoWhereInput
    /**
     * Limit how many treinamentos to delete.
     */
    limit?: number
  }

  /**
   * treinamento without action
   */
  export type treinamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento
     */
    select?: treinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento
     */
    omit?: treinamentoOmit<ExtArgs> | null
  }


  /**
   * Model treinamento_tabuada
   */

  export type AggregateTreinamento_tabuada = {
    _count: Treinamento_tabuadaCountAggregateOutputType | null
    _avg: Treinamento_tabuadaAvgAggregateOutputType | null
    _sum: Treinamento_tabuadaSumAggregateOutputType | null
    _min: Treinamento_tabuadaMinAggregateOutputType | null
    _max: Treinamento_tabuadaMaxAggregateOutputType | null
  }

  export type Treinamento_tabuadaAvgAggregateOutputType = {
    id: number | null
    primeiro_numero: number | null
    segundo_numero: number | null
    resultado: number | null
    resposta_aluno: number | null
    id_treinamento: number | null
  }

  export type Treinamento_tabuadaSumAggregateOutputType = {
    id: number | null
    primeiro_numero: number | null
    segundo_numero: number | null
    resultado: number | null
    resposta_aluno: number | null
    id_treinamento: number | null
  }

  export type Treinamento_tabuadaMinAggregateOutputType = {
    id: number | null
    primeiro_numero: number | null
    segundo_numero: number | null
    resultado: number | null
    resposta_aluno: number | null
    id_treinamento: number | null
  }

  export type Treinamento_tabuadaMaxAggregateOutputType = {
    id: number | null
    primeiro_numero: number | null
    segundo_numero: number | null
    resultado: number | null
    resposta_aluno: number | null
    id_treinamento: number | null
  }

  export type Treinamento_tabuadaCountAggregateOutputType = {
    id: number
    primeiro_numero: number
    segundo_numero: number
    resultado: number
    resposta_aluno: number
    id_treinamento: number
    _all: number
  }


  export type Treinamento_tabuadaAvgAggregateInputType = {
    id?: true
    primeiro_numero?: true
    segundo_numero?: true
    resultado?: true
    resposta_aluno?: true
    id_treinamento?: true
  }

  export type Treinamento_tabuadaSumAggregateInputType = {
    id?: true
    primeiro_numero?: true
    segundo_numero?: true
    resultado?: true
    resposta_aluno?: true
    id_treinamento?: true
  }

  export type Treinamento_tabuadaMinAggregateInputType = {
    id?: true
    primeiro_numero?: true
    segundo_numero?: true
    resultado?: true
    resposta_aluno?: true
    id_treinamento?: true
  }

  export type Treinamento_tabuadaMaxAggregateInputType = {
    id?: true
    primeiro_numero?: true
    segundo_numero?: true
    resultado?: true
    resposta_aluno?: true
    id_treinamento?: true
  }

  export type Treinamento_tabuadaCountAggregateInputType = {
    id?: true
    primeiro_numero?: true
    segundo_numero?: true
    resultado?: true
    resposta_aluno?: true
    id_treinamento?: true
    _all?: true
  }

  export type Treinamento_tabuadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which treinamento_tabuada to aggregate.
     */
    where?: treinamento_tabuadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of treinamento_tabuadas to fetch.
     */
    orderBy?: treinamento_tabuadaOrderByWithRelationInput | treinamento_tabuadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: treinamento_tabuadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` treinamento_tabuadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` treinamento_tabuadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned treinamento_tabuadas
    **/
    _count?: true | Treinamento_tabuadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Treinamento_tabuadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Treinamento_tabuadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Treinamento_tabuadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Treinamento_tabuadaMaxAggregateInputType
  }

  export type GetTreinamento_tabuadaAggregateType<T extends Treinamento_tabuadaAggregateArgs> = {
        [P in keyof T & keyof AggregateTreinamento_tabuada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreinamento_tabuada[P]>
      : GetScalarType<T[P], AggregateTreinamento_tabuada[P]>
  }




  export type treinamento_tabuadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: treinamento_tabuadaWhereInput
    orderBy?: treinamento_tabuadaOrderByWithAggregationInput | treinamento_tabuadaOrderByWithAggregationInput[]
    by: Treinamento_tabuadaScalarFieldEnum[] | Treinamento_tabuadaScalarFieldEnum
    having?: treinamento_tabuadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Treinamento_tabuadaCountAggregateInputType | true
    _avg?: Treinamento_tabuadaAvgAggregateInputType
    _sum?: Treinamento_tabuadaSumAggregateInputType
    _min?: Treinamento_tabuadaMinAggregateInputType
    _max?: Treinamento_tabuadaMaxAggregateInputType
  }

  export type Treinamento_tabuadaGroupByOutputType = {
    id: number
    primeiro_numero: number | null
    segundo_numero: number | null
    resultado: number | null
    resposta_aluno: number | null
    id_treinamento: number
    _count: Treinamento_tabuadaCountAggregateOutputType | null
    _avg: Treinamento_tabuadaAvgAggregateOutputType | null
    _sum: Treinamento_tabuadaSumAggregateOutputType | null
    _min: Treinamento_tabuadaMinAggregateOutputType | null
    _max: Treinamento_tabuadaMaxAggregateOutputType | null
  }

  type GetTreinamento_tabuadaGroupByPayload<T extends treinamento_tabuadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Treinamento_tabuadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Treinamento_tabuadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Treinamento_tabuadaGroupByOutputType[P]>
            : GetScalarType<T[P], Treinamento_tabuadaGroupByOutputType[P]>
        }
      >
    >


  export type treinamento_tabuadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    primeiro_numero?: boolean
    segundo_numero?: boolean
    resultado?: boolean
    resposta_aluno?: boolean
    id_treinamento?: boolean
  }, ExtArgs["result"]["treinamento_tabuada"]>



  export type treinamento_tabuadaSelectScalar = {
    id?: boolean
    primeiro_numero?: boolean
    segundo_numero?: boolean
    resultado?: boolean
    resposta_aluno?: boolean
    id_treinamento?: boolean
  }

  export type treinamento_tabuadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "primeiro_numero" | "segundo_numero" | "resultado" | "resposta_aluno" | "id_treinamento", ExtArgs["result"]["treinamento_tabuada"]>

  export type $treinamento_tabuadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "treinamento_tabuada"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      primeiro_numero: number | null
      segundo_numero: number | null
      resultado: number | null
      resposta_aluno: number | null
      id_treinamento: number
    }, ExtArgs["result"]["treinamento_tabuada"]>
    composites: {}
  }

  type treinamento_tabuadaGetPayload<S extends boolean | null | undefined | treinamento_tabuadaDefaultArgs> = $Result.GetResult<Prisma.$treinamento_tabuadaPayload, S>

  type treinamento_tabuadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<treinamento_tabuadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Treinamento_tabuadaCountAggregateInputType | true
    }

  export interface treinamento_tabuadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['treinamento_tabuada'], meta: { name: 'treinamento_tabuada' } }
    /**
     * Find zero or one Treinamento_tabuada that matches the filter.
     * @param {treinamento_tabuadaFindUniqueArgs} args - Arguments to find a Treinamento_tabuada
     * @example
     * // Get one Treinamento_tabuada
     * const treinamento_tabuada = await prisma.treinamento_tabuada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends treinamento_tabuadaFindUniqueArgs>(args: SelectSubset<T, treinamento_tabuadaFindUniqueArgs<ExtArgs>>): Prisma__treinamento_tabuadaClient<$Result.GetResult<Prisma.$treinamento_tabuadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Treinamento_tabuada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {treinamento_tabuadaFindUniqueOrThrowArgs} args - Arguments to find a Treinamento_tabuada
     * @example
     * // Get one Treinamento_tabuada
     * const treinamento_tabuada = await prisma.treinamento_tabuada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends treinamento_tabuadaFindUniqueOrThrowArgs>(args: SelectSubset<T, treinamento_tabuadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__treinamento_tabuadaClient<$Result.GetResult<Prisma.$treinamento_tabuadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treinamento_tabuada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treinamento_tabuadaFindFirstArgs} args - Arguments to find a Treinamento_tabuada
     * @example
     * // Get one Treinamento_tabuada
     * const treinamento_tabuada = await prisma.treinamento_tabuada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends treinamento_tabuadaFindFirstArgs>(args?: SelectSubset<T, treinamento_tabuadaFindFirstArgs<ExtArgs>>): Prisma__treinamento_tabuadaClient<$Result.GetResult<Prisma.$treinamento_tabuadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treinamento_tabuada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treinamento_tabuadaFindFirstOrThrowArgs} args - Arguments to find a Treinamento_tabuada
     * @example
     * // Get one Treinamento_tabuada
     * const treinamento_tabuada = await prisma.treinamento_tabuada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends treinamento_tabuadaFindFirstOrThrowArgs>(args?: SelectSubset<T, treinamento_tabuadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__treinamento_tabuadaClient<$Result.GetResult<Prisma.$treinamento_tabuadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Treinamento_tabuadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treinamento_tabuadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Treinamento_tabuadas
     * const treinamento_tabuadas = await prisma.treinamento_tabuada.findMany()
     * 
     * // Get first 10 Treinamento_tabuadas
     * const treinamento_tabuadas = await prisma.treinamento_tabuada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treinamento_tabuadaWithIdOnly = await prisma.treinamento_tabuada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends treinamento_tabuadaFindManyArgs>(args?: SelectSubset<T, treinamento_tabuadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$treinamento_tabuadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Treinamento_tabuada.
     * @param {treinamento_tabuadaCreateArgs} args - Arguments to create a Treinamento_tabuada.
     * @example
     * // Create one Treinamento_tabuada
     * const Treinamento_tabuada = await prisma.treinamento_tabuada.create({
     *   data: {
     *     // ... data to create a Treinamento_tabuada
     *   }
     * })
     * 
     */
    create<T extends treinamento_tabuadaCreateArgs>(args: SelectSubset<T, treinamento_tabuadaCreateArgs<ExtArgs>>): Prisma__treinamento_tabuadaClient<$Result.GetResult<Prisma.$treinamento_tabuadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Treinamento_tabuadas.
     * @param {treinamento_tabuadaCreateManyArgs} args - Arguments to create many Treinamento_tabuadas.
     * @example
     * // Create many Treinamento_tabuadas
     * const treinamento_tabuada = await prisma.treinamento_tabuada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends treinamento_tabuadaCreateManyArgs>(args?: SelectSubset<T, treinamento_tabuadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Treinamento_tabuada.
     * @param {treinamento_tabuadaDeleteArgs} args - Arguments to delete one Treinamento_tabuada.
     * @example
     * // Delete one Treinamento_tabuada
     * const Treinamento_tabuada = await prisma.treinamento_tabuada.delete({
     *   where: {
     *     // ... filter to delete one Treinamento_tabuada
     *   }
     * })
     * 
     */
    delete<T extends treinamento_tabuadaDeleteArgs>(args: SelectSubset<T, treinamento_tabuadaDeleteArgs<ExtArgs>>): Prisma__treinamento_tabuadaClient<$Result.GetResult<Prisma.$treinamento_tabuadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Treinamento_tabuada.
     * @param {treinamento_tabuadaUpdateArgs} args - Arguments to update one Treinamento_tabuada.
     * @example
     * // Update one Treinamento_tabuada
     * const treinamento_tabuada = await prisma.treinamento_tabuada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends treinamento_tabuadaUpdateArgs>(args: SelectSubset<T, treinamento_tabuadaUpdateArgs<ExtArgs>>): Prisma__treinamento_tabuadaClient<$Result.GetResult<Prisma.$treinamento_tabuadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Treinamento_tabuadas.
     * @param {treinamento_tabuadaDeleteManyArgs} args - Arguments to filter Treinamento_tabuadas to delete.
     * @example
     * // Delete a few Treinamento_tabuadas
     * const { count } = await prisma.treinamento_tabuada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends treinamento_tabuadaDeleteManyArgs>(args?: SelectSubset<T, treinamento_tabuadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treinamento_tabuadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treinamento_tabuadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Treinamento_tabuadas
     * const treinamento_tabuada = await prisma.treinamento_tabuada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends treinamento_tabuadaUpdateManyArgs>(args: SelectSubset<T, treinamento_tabuadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Treinamento_tabuada.
     * @param {treinamento_tabuadaUpsertArgs} args - Arguments to update or create a Treinamento_tabuada.
     * @example
     * // Update or create a Treinamento_tabuada
     * const treinamento_tabuada = await prisma.treinamento_tabuada.upsert({
     *   create: {
     *     // ... data to create a Treinamento_tabuada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Treinamento_tabuada we want to update
     *   }
     * })
     */
    upsert<T extends treinamento_tabuadaUpsertArgs>(args: SelectSubset<T, treinamento_tabuadaUpsertArgs<ExtArgs>>): Prisma__treinamento_tabuadaClient<$Result.GetResult<Prisma.$treinamento_tabuadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Treinamento_tabuadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treinamento_tabuadaCountArgs} args - Arguments to filter Treinamento_tabuadas to count.
     * @example
     * // Count the number of Treinamento_tabuadas
     * const count = await prisma.treinamento_tabuada.count({
     *   where: {
     *     // ... the filter for the Treinamento_tabuadas we want to count
     *   }
     * })
    **/
    count<T extends treinamento_tabuadaCountArgs>(
      args?: Subset<T, treinamento_tabuadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Treinamento_tabuadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Treinamento_tabuada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Treinamento_tabuadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Treinamento_tabuadaAggregateArgs>(args: Subset<T, Treinamento_tabuadaAggregateArgs>): Prisma.PrismaPromise<GetTreinamento_tabuadaAggregateType<T>>

    /**
     * Group by Treinamento_tabuada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treinamento_tabuadaGroupByArgs} args - Group by arguments.
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
      T extends treinamento_tabuadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: treinamento_tabuadaGroupByArgs['orderBy'] }
        : { orderBy?: treinamento_tabuadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, treinamento_tabuadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreinamento_tabuadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the treinamento_tabuada model
   */
  readonly fields: treinamento_tabuadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for treinamento_tabuada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__treinamento_tabuadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the treinamento_tabuada model
   */
  interface treinamento_tabuadaFieldRefs {
    readonly id: FieldRef<"treinamento_tabuada", 'Int'>
    readonly primeiro_numero: FieldRef<"treinamento_tabuada", 'Int'>
    readonly segundo_numero: FieldRef<"treinamento_tabuada", 'Int'>
    readonly resultado: FieldRef<"treinamento_tabuada", 'Int'>
    readonly resposta_aluno: FieldRef<"treinamento_tabuada", 'Int'>
    readonly id_treinamento: FieldRef<"treinamento_tabuada", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * treinamento_tabuada findUnique
   */
  export type treinamento_tabuadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento_tabuada
     */
    select?: treinamento_tabuadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento_tabuada
     */
    omit?: treinamento_tabuadaOmit<ExtArgs> | null
    /**
     * Filter, which treinamento_tabuada to fetch.
     */
    where: treinamento_tabuadaWhereUniqueInput
  }

  /**
   * treinamento_tabuada findUniqueOrThrow
   */
  export type treinamento_tabuadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento_tabuada
     */
    select?: treinamento_tabuadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento_tabuada
     */
    omit?: treinamento_tabuadaOmit<ExtArgs> | null
    /**
     * Filter, which treinamento_tabuada to fetch.
     */
    where: treinamento_tabuadaWhereUniqueInput
  }

  /**
   * treinamento_tabuada findFirst
   */
  export type treinamento_tabuadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento_tabuada
     */
    select?: treinamento_tabuadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento_tabuada
     */
    omit?: treinamento_tabuadaOmit<ExtArgs> | null
    /**
     * Filter, which treinamento_tabuada to fetch.
     */
    where?: treinamento_tabuadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of treinamento_tabuadas to fetch.
     */
    orderBy?: treinamento_tabuadaOrderByWithRelationInput | treinamento_tabuadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for treinamento_tabuadas.
     */
    cursor?: treinamento_tabuadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` treinamento_tabuadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` treinamento_tabuadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of treinamento_tabuadas.
     */
    distinct?: Treinamento_tabuadaScalarFieldEnum | Treinamento_tabuadaScalarFieldEnum[]
  }

  /**
   * treinamento_tabuada findFirstOrThrow
   */
  export type treinamento_tabuadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento_tabuada
     */
    select?: treinamento_tabuadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento_tabuada
     */
    omit?: treinamento_tabuadaOmit<ExtArgs> | null
    /**
     * Filter, which treinamento_tabuada to fetch.
     */
    where?: treinamento_tabuadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of treinamento_tabuadas to fetch.
     */
    orderBy?: treinamento_tabuadaOrderByWithRelationInput | treinamento_tabuadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for treinamento_tabuadas.
     */
    cursor?: treinamento_tabuadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` treinamento_tabuadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` treinamento_tabuadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of treinamento_tabuadas.
     */
    distinct?: Treinamento_tabuadaScalarFieldEnum | Treinamento_tabuadaScalarFieldEnum[]
  }

  /**
   * treinamento_tabuada findMany
   */
  export type treinamento_tabuadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento_tabuada
     */
    select?: treinamento_tabuadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento_tabuada
     */
    omit?: treinamento_tabuadaOmit<ExtArgs> | null
    /**
     * Filter, which treinamento_tabuadas to fetch.
     */
    where?: treinamento_tabuadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of treinamento_tabuadas to fetch.
     */
    orderBy?: treinamento_tabuadaOrderByWithRelationInput | treinamento_tabuadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing treinamento_tabuadas.
     */
    cursor?: treinamento_tabuadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` treinamento_tabuadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` treinamento_tabuadas.
     */
    skip?: number
    distinct?: Treinamento_tabuadaScalarFieldEnum | Treinamento_tabuadaScalarFieldEnum[]
  }

  /**
   * treinamento_tabuada create
   */
  export type treinamento_tabuadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento_tabuada
     */
    select?: treinamento_tabuadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento_tabuada
     */
    omit?: treinamento_tabuadaOmit<ExtArgs> | null
    /**
     * The data needed to create a treinamento_tabuada.
     */
    data: XOR<treinamento_tabuadaCreateInput, treinamento_tabuadaUncheckedCreateInput>
  }

  /**
   * treinamento_tabuada createMany
   */
  export type treinamento_tabuadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many treinamento_tabuadas.
     */
    data: treinamento_tabuadaCreateManyInput | treinamento_tabuadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * treinamento_tabuada update
   */
  export type treinamento_tabuadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento_tabuada
     */
    select?: treinamento_tabuadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento_tabuada
     */
    omit?: treinamento_tabuadaOmit<ExtArgs> | null
    /**
     * The data needed to update a treinamento_tabuada.
     */
    data: XOR<treinamento_tabuadaUpdateInput, treinamento_tabuadaUncheckedUpdateInput>
    /**
     * Choose, which treinamento_tabuada to update.
     */
    where: treinamento_tabuadaWhereUniqueInput
  }

  /**
   * treinamento_tabuada updateMany
   */
  export type treinamento_tabuadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update treinamento_tabuadas.
     */
    data: XOR<treinamento_tabuadaUpdateManyMutationInput, treinamento_tabuadaUncheckedUpdateManyInput>
    /**
     * Filter which treinamento_tabuadas to update
     */
    where?: treinamento_tabuadaWhereInput
    /**
     * Limit how many treinamento_tabuadas to update.
     */
    limit?: number
  }

  /**
   * treinamento_tabuada upsert
   */
  export type treinamento_tabuadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento_tabuada
     */
    select?: treinamento_tabuadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento_tabuada
     */
    omit?: treinamento_tabuadaOmit<ExtArgs> | null
    /**
     * The filter to search for the treinamento_tabuada to update in case it exists.
     */
    where: treinamento_tabuadaWhereUniqueInput
    /**
     * In case the treinamento_tabuada found by the `where` argument doesn't exist, create a new treinamento_tabuada with this data.
     */
    create: XOR<treinamento_tabuadaCreateInput, treinamento_tabuadaUncheckedCreateInput>
    /**
     * In case the treinamento_tabuada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<treinamento_tabuadaUpdateInput, treinamento_tabuadaUncheckedUpdateInput>
  }

  /**
   * treinamento_tabuada delete
   */
  export type treinamento_tabuadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento_tabuada
     */
    select?: treinamento_tabuadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento_tabuada
     */
    omit?: treinamento_tabuadaOmit<ExtArgs> | null
    /**
     * Filter which treinamento_tabuada to delete.
     */
    where: treinamento_tabuadaWhereUniqueInput
  }

  /**
   * treinamento_tabuada deleteMany
   */
  export type treinamento_tabuadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which treinamento_tabuadas to delete
     */
    where?: treinamento_tabuadaWhereInput
    /**
     * Limit how many treinamento_tabuadas to delete.
     */
    limit?: number
  }

  /**
   * treinamento_tabuada without action
   */
  export type treinamento_tabuadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treinamento_tabuada
     */
    select?: treinamento_tabuadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treinamento_tabuada
     */
    omit?: treinamento_tabuadaOmit<ExtArgs> | null
  }


  /**
   * Model turma
   */

  export type AggregateTurma = {
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  export type TurmaAvgAggregateOutputType = {
    id: number | null
    media_turma: number | null
    id_professor: number | null
  }

  export type TurmaSumAggregateOutputType = {
    id: number | null
    media_turma: number | null
    id_professor: number | null
  }

  export type TurmaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    media_turma: number | null
    id_professor: number | null
  }

  export type TurmaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    media_turma: number | null
    id_professor: number | null
  }

  export type TurmaCountAggregateOutputType = {
    id: number
    nome: number
    media_turma: number
    id_professor: number
    _all: number
  }


  export type TurmaAvgAggregateInputType = {
    id?: true
    media_turma?: true
    id_professor?: true
  }

  export type TurmaSumAggregateInputType = {
    id?: true
    media_turma?: true
    id_professor?: true
  }

  export type TurmaMinAggregateInputType = {
    id?: true
    nome?: true
    media_turma?: true
    id_professor?: true
  }

  export type TurmaMaxAggregateInputType = {
    id?: true
    nome?: true
    media_turma?: true
    id_professor?: true
  }

  export type TurmaCountAggregateInputType = {
    id?: true
    nome?: true
    media_turma?: true
    id_professor?: true
    _all?: true
  }

  export type TurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which turma to aggregate.
     */
    where?: turmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turmas to fetch.
     */
    orderBy?: turmaOrderByWithRelationInput | turmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: turmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned turmas
    **/
    _count?: true | TurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurmaMaxAggregateInputType
  }

  export type GetTurmaAggregateType<T extends TurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurma[P]>
      : GetScalarType<T[P], AggregateTurma[P]>
  }




  export type turmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: turmaWhereInput
    orderBy?: turmaOrderByWithAggregationInput | turmaOrderByWithAggregationInput[]
    by: TurmaScalarFieldEnum[] | TurmaScalarFieldEnum
    having?: turmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurmaCountAggregateInputType | true
    _avg?: TurmaAvgAggregateInputType
    _sum?: TurmaSumAggregateInputType
    _min?: TurmaMinAggregateInputType
    _max?: TurmaMaxAggregateInputType
  }

  export type TurmaGroupByOutputType = {
    id: number
    nome: string | null
    media_turma: number | null
    id_professor: number
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  type GetTurmaGroupByPayload<T extends turmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurmaGroupByOutputType[P]>
            : GetScalarType<T[P], TurmaGroupByOutputType[P]>
        }
      >
    >


  export type turmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    media_turma?: boolean
    id_professor?: boolean
  }, ExtArgs["result"]["turma"]>



  export type turmaSelectScalar = {
    id?: boolean
    nome?: boolean
    media_turma?: boolean
    id_professor?: boolean
  }

  export type turmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "media_turma" | "id_professor", ExtArgs["result"]["turma"]>

  export type $turmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "turma"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string | null
      media_turma: number | null
      id_professor: number
    }, ExtArgs["result"]["turma"]>
    composites: {}
  }

  type turmaGetPayload<S extends boolean | null | undefined | turmaDefaultArgs> = $Result.GetResult<Prisma.$turmaPayload, S>

  type turmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<turmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurmaCountAggregateInputType | true
    }

  export interface turmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['turma'], meta: { name: 'turma' } }
    /**
     * Find zero or one Turma that matches the filter.
     * @param {turmaFindUniqueArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends turmaFindUniqueArgs>(args: SelectSubset<T, turmaFindUniqueArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {turmaFindUniqueOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends turmaFindUniqueOrThrowArgs>(args: SelectSubset<T, turmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmaFindFirstArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends turmaFindFirstArgs>(args?: SelectSubset<T, turmaFindFirstArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmaFindFirstOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends turmaFindFirstOrThrowArgs>(args?: SelectSubset<T, turmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turmas
     * const turmas = await prisma.turma.findMany()
     * 
     * // Get first 10 Turmas
     * const turmas = await prisma.turma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turmaWithIdOnly = await prisma.turma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends turmaFindManyArgs>(args?: SelectSubset<T, turmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turma.
     * @param {turmaCreateArgs} args - Arguments to create a Turma.
     * @example
     * // Create one Turma
     * const Turma = await prisma.turma.create({
     *   data: {
     *     // ... data to create a Turma
     *   }
     * })
     * 
     */
    create<T extends turmaCreateArgs>(args: SelectSubset<T, turmaCreateArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turmas.
     * @param {turmaCreateManyArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends turmaCreateManyArgs>(args?: SelectSubset<T, turmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Turma.
     * @param {turmaDeleteArgs} args - Arguments to delete one Turma.
     * @example
     * // Delete one Turma
     * const Turma = await prisma.turma.delete({
     *   where: {
     *     // ... filter to delete one Turma
     *   }
     * })
     * 
     */
    delete<T extends turmaDeleteArgs>(args: SelectSubset<T, turmaDeleteArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turma.
     * @param {turmaUpdateArgs} args - Arguments to update one Turma.
     * @example
     * // Update one Turma
     * const turma = await prisma.turma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends turmaUpdateArgs>(args: SelectSubset<T, turmaUpdateArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turmas.
     * @param {turmaDeleteManyArgs} args - Arguments to filter Turmas to delete.
     * @example
     * // Delete a few Turmas
     * const { count } = await prisma.turma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends turmaDeleteManyArgs>(args?: SelectSubset<T, turmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends turmaUpdateManyArgs>(args: SelectSubset<T, turmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turma.
     * @param {turmaUpsertArgs} args - Arguments to update or create a Turma.
     * @example
     * // Update or create a Turma
     * const turma = await prisma.turma.upsert({
     *   create: {
     *     // ... data to create a Turma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turma we want to update
     *   }
     * })
     */
    upsert<T extends turmaUpsertArgs>(args: SelectSubset<T, turmaUpsertArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmaCountArgs} args - Arguments to filter Turmas to count.
     * @example
     * // Count the number of Turmas
     * const count = await prisma.turma.count({
     *   where: {
     *     // ... the filter for the Turmas we want to count
     *   }
     * })
    **/
    count<T extends turmaCountArgs>(
      args?: Subset<T, turmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurmaAggregateArgs>(args: Subset<T, TurmaAggregateArgs>): Prisma.PrismaPromise<GetTurmaAggregateType<T>>

    /**
     * Group by Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmaGroupByArgs} args - Group by arguments.
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
      T extends turmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: turmaGroupByArgs['orderBy'] }
        : { orderBy?: turmaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, turmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the turma model
   */
  readonly fields: turmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for turma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__turmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the turma model
   */
  interface turmaFieldRefs {
    readonly id: FieldRef<"turma", 'Int'>
    readonly nome: FieldRef<"turma", 'String'>
    readonly media_turma: FieldRef<"turma", 'Float'>
    readonly id_professor: FieldRef<"turma", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * turma findUnique
   */
  export type turmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Filter, which turma to fetch.
     */
    where: turmaWhereUniqueInput
  }

  /**
   * turma findUniqueOrThrow
   */
  export type turmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Filter, which turma to fetch.
     */
    where: turmaWhereUniqueInput
  }

  /**
   * turma findFirst
   */
  export type turmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Filter, which turma to fetch.
     */
    where?: turmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turmas to fetch.
     */
    orderBy?: turmaOrderByWithRelationInput | turmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for turmas.
     */
    cursor?: turmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * turma findFirstOrThrow
   */
  export type turmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Filter, which turma to fetch.
     */
    where?: turmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turmas to fetch.
     */
    orderBy?: turmaOrderByWithRelationInput | turmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for turmas.
     */
    cursor?: turmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * turma findMany
   */
  export type turmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Filter, which turmas to fetch.
     */
    where?: turmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turmas to fetch.
     */
    orderBy?: turmaOrderByWithRelationInput | turmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing turmas.
     */
    cursor?: turmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turmas.
     */
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * turma create
   */
  export type turmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * The data needed to create a turma.
     */
    data: XOR<turmaCreateInput, turmaUncheckedCreateInput>
  }

  /**
   * turma createMany
   */
  export type turmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many turmas.
     */
    data: turmaCreateManyInput | turmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * turma update
   */
  export type turmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * The data needed to update a turma.
     */
    data: XOR<turmaUpdateInput, turmaUncheckedUpdateInput>
    /**
     * Choose, which turma to update.
     */
    where: turmaWhereUniqueInput
  }

  /**
   * turma updateMany
   */
  export type turmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update turmas.
     */
    data: XOR<turmaUpdateManyMutationInput, turmaUncheckedUpdateManyInput>
    /**
     * Filter which turmas to update
     */
    where?: turmaWhereInput
    /**
     * Limit how many turmas to update.
     */
    limit?: number
  }

  /**
   * turma upsert
   */
  export type turmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * The filter to search for the turma to update in case it exists.
     */
    where: turmaWhereUniqueInput
    /**
     * In case the turma found by the `where` argument doesn't exist, create a new turma with this data.
     */
    create: XOR<turmaCreateInput, turmaUncheckedCreateInput>
    /**
     * In case the turma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<turmaUpdateInput, turmaUncheckedUpdateInput>
  }

  /**
   * turma delete
   */
  export type turmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Filter which turma to delete.
     */
    where: turmaWhereUniqueInput
  }

  /**
   * turma deleteMany
   */
  export type turmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which turmas to delete
     */
    where?: turmaWhereInput
    /**
     * Limit how many turmas to delete.
     */
    limit?: number
  }

  /**
   * turma without action
   */
  export type turmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo_usuario: $Enums.usuario_tipo_usuario | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo_usuario: $Enums.usuario_tipo_usuario | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    tipo_usuario: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo_usuario?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo_usuario?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo_usuario?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string | null
    email: string | null
    senha: string | null
    tipo_usuario: $Enums.usuario_tipo_usuario | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo_usuario?: boolean
  }, ExtArgs["result"]["usuario"]>



  export type usuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo_usuario?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "tipo_usuario", ExtArgs["result"]["usuario"]>

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string | null
      email: string | null
      senha: string | null
      tipo_usuario: $Enums.usuario_tipo_usuario | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly nome: FieldRef<"usuario", 'String'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly senha: FieldRef<"usuario", 'String'>
    readonly tipo_usuario: FieldRef<"usuario", 'usuario_tipo_usuario'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data?: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
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


  export const Aluno_turmaScalarFieldEnum: {
    id_usuario: 'id_usuario',
    id_turma: 'id_turma'
  };

  export type Aluno_turmaScalarFieldEnum = (typeof Aluno_turmaScalarFieldEnum)[keyof typeof Aluno_turmaScalarFieldEnum]


  export const AvisosScalarFieldEnum: {
    id_aviso: 'id_aviso',
    data_hora: 'data_hora',
    titulo: 'titulo',
    conteudo: 'conteudo',
    id_turma: 'id_turma'
  };

  export type AvisosScalarFieldEnum = (typeof AvisosScalarFieldEnum)[keyof typeof AvisosScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    data_hora: 'data_hora',
    comentario_aluno: 'comentario_aluno',
    comentario_professor: 'comentario_professor',
    id_treinamento: 'id_treinamento'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const TreinamentoScalarFieldEnum: {
    id: 'id',
    data_hora: 'data_hora',
    media_acertos: 'media_acertos',
    avaliacao_prof: 'avaliacao_prof',
    id_aluno: 'id_aluno',
    id_turma: 'id_turma',
    id_professor: 'id_professor'
  };

  export type TreinamentoScalarFieldEnum = (typeof TreinamentoScalarFieldEnum)[keyof typeof TreinamentoScalarFieldEnum]


  export const Treinamento_tabuadaScalarFieldEnum: {
    id: 'id',
    primeiro_numero: 'primeiro_numero',
    segundo_numero: 'segundo_numero',
    resultado: 'resultado',
    resposta_aluno: 'resposta_aluno',
    id_treinamento: 'id_treinamento'
  };

  export type Treinamento_tabuadaScalarFieldEnum = (typeof Treinamento_tabuadaScalarFieldEnum)[keyof typeof Treinamento_tabuadaScalarFieldEnum]


  export const TurmaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    media_turma: 'media_turma',
    id_professor: 'id_professor'
  };

  export type TurmaScalarFieldEnum = (typeof TurmaScalarFieldEnum)[keyof typeof TurmaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    tipo_usuario: 'tipo_usuario'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const avisosOrderByRelevanceFieldEnum: {
    titulo: 'titulo'
  };

  export type avisosOrderByRelevanceFieldEnum = (typeof avisosOrderByRelevanceFieldEnum)[keyof typeof avisosOrderByRelevanceFieldEnum]


  export const comentarioOrderByRelevanceFieldEnum: {
    comentario_professor: 'comentario_professor'
  };

  export type comentarioOrderByRelevanceFieldEnum = (typeof comentarioOrderByRelevanceFieldEnum)[keyof typeof comentarioOrderByRelevanceFieldEnum]


  export const turmaOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type turmaOrderByRelevanceFieldEnum = (typeof turmaOrderByRelevanceFieldEnum)[keyof typeof turmaOrderByRelevanceFieldEnum]


  export const usuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha'
  };

  export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'usuario_tipo_usuario'
   */
  export type Enumusuario_tipo_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'usuario_tipo_usuario'>
    
  /**
   * Deep Input Types
   */


  export type aluno_turmaWhereInput = {
    AND?: aluno_turmaWhereInput | aluno_turmaWhereInput[]
    OR?: aluno_turmaWhereInput[]
    NOT?: aluno_turmaWhereInput | aluno_turmaWhereInput[]
    id_usuario?: IntFilter<"aluno_turma"> | number
    id_turma?: IntFilter<"aluno_turma"> | number
  }

  export type aluno_turmaOrderByWithRelationInput = {
    id_usuario?: SortOrder
    id_turma?: SortOrder
  }

  export type aluno_turmaWhereUniqueInput = Prisma.AtLeast<{
    id_usuario_id_turma?: aluno_turmaId_usuarioId_turmaCompoundUniqueInput
    AND?: aluno_turmaWhereInput | aluno_turmaWhereInput[]
    OR?: aluno_turmaWhereInput[]
    NOT?: aluno_turmaWhereInput | aluno_turmaWhereInput[]
    id_usuario?: IntFilter<"aluno_turma"> | number
    id_turma?: IntFilter<"aluno_turma"> | number
  }, "id_usuario_id_turma">

  export type aluno_turmaOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    id_turma?: SortOrder
    _count?: aluno_turmaCountOrderByAggregateInput
    _avg?: aluno_turmaAvgOrderByAggregateInput
    _max?: aluno_turmaMaxOrderByAggregateInput
    _min?: aluno_turmaMinOrderByAggregateInput
    _sum?: aluno_turmaSumOrderByAggregateInput
  }

  export type aluno_turmaScalarWhereWithAggregatesInput = {
    AND?: aluno_turmaScalarWhereWithAggregatesInput | aluno_turmaScalarWhereWithAggregatesInput[]
    OR?: aluno_turmaScalarWhereWithAggregatesInput[]
    NOT?: aluno_turmaScalarWhereWithAggregatesInput | aluno_turmaScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"aluno_turma"> | number
    id_turma?: IntWithAggregatesFilter<"aluno_turma"> | number
  }

  export type avisosWhereInput = {
    AND?: avisosWhereInput | avisosWhereInput[]
    OR?: avisosWhereInput[]
    NOT?: avisosWhereInput | avisosWhereInput[]
    id_aviso?: IntFilter<"avisos"> | number
    data_hora?: DateTimeNullableFilter<"avisos"> | Date | string | null
    titulo?: StringNullableFilter<"avisos"> | string | null
    conteudo?: BytesNullableFilter<"avisos"> | Uint8Array | null
    id_turma?: IntFilter<"avisos"> | number
  }

  export type avisosOrderByWithRelationInput = {
    id_aviso?: SortOrder
    data_hora?: SortOrderInput | SortOrder
    titulo?: SortOrderInput | SortOrder
    conteudo?: SortOrderInput | SortOrder
    id_turma?: SortOrder
    _relevance?: avisosOrderByRelevanceInput
  }

  export type avisosWhereUniqueInput = Prisma.AtLeast<{
    id_aviso?: number
    AND?: avisosWhereInput | avisosWhereInput[]
    OR?: avisosWhereInput[]
    NOT?: avisosWhereInput | avisosWhereInput[]
    data_hora?: DateTimeNullableFilter<"avisos"> | Date | string | null
    titulo?: StringNullableFilter<"avisos"> | string | null
    conteudo?: BytesNullableFilter<"avisos"> | Uint8Array | null
    id_turma?: IntFilter<"avisos"> | number
  }, "id_aviso">

  export type avisosOrderByWithAggregationInput = {
    id_aviso?: SortOrder
    data_hora?: SortOrderInput | SortOrder
    titulo?: SortOrderInput | SortOrder
    conteudo?: SortOrderInput | SortOrder
    id_turma?: SortOrder
    _count?: avisosCountOrderByAggregateInput
    _avg?: avisosAvgOrderByAggregateInput
    _max?: avisosMaxOrderByAggregateInput
    _min?: avisosMinOrderByAggregateInput
    _sum?: avisosSumOrderByAggregateInput
  }

  export type avisosScalarWhereWithAggregatesInput = {
    AND?: avisosScalarWhereWithAggregatesInput | avisosScalarWhereWithAggregatesInput[]
    OR?: avisosScalarWhereWithAggregatesInput[]
    NOT?: avisosScalarWhereWithAggregatesInput | avisosScalarWhereWithAggregatesInput[]
    id_aviso?: IntWithAggregatesFilter<"avisos"> | number
    data_hora?: DateTimeNullableWithAggregatesFilter<"avisos"> | Date | string | null
    titulo?: StringNullableWithAggregatesFilter<"avisos"> | string | null
    conteudo?: BytesNullableWithAggregatesFilter<"avisos"> | Uint8Array | null
    id_turma?: IntWithAggregatesFilter<"avisos"> | number
  }

  export type comentarioWhereInput = {
    AND?: comentarioWhereInput | comentarioWhereInput[]
    OR?: comentarioWhereInput[]
    NOT?: comentarioWhereInput | comentarioWhereInput[]
    id?: IntFilter<"comentario"> | number
    data_hora?: DateTimeNullableFilter<"comentario"> | Date | string | null
    comentario_aluno?: BytesNullableFilter<"comentario"> | Uint8Array | null
    comentario_professor?: StringNullableFilter<"comentario"> | string | null
    id_treinamento?: IntFilter<"comentario"> | number
  }

  export type comentarioOrderByWithRelationInput = {
    id?: SortOrder
    data_hora?: SortOrderInput | SortOrder
    comentario_aluno?: SortOrderInput | SortOrder
    comentario_professor?: SortOrderInput | SortOrder
    id_treinamento?: SortOrder
    _relevance?: comentarioOrderByRelevanceInput
  }

  export type comentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: comentarioWhereInput | comentarioWhereInput[]
    OR?: comentarioWhereInput[]
    NOT?: comentarioWhereInput | comentarioWhereInput[]
    data_hora?: DateTimeNullableFilter<"comentario"> | Date | string | null
    comentario_aluno?: BytesNullableFilter<"comentario"> | Uint8Array | null
    comentario_professor?: StringNullableFilter<"comentario"> | string | null
    id_treinamento?: IntFilter<"comentario"> | number
  }, "id">

  export type comentarioOrderByWithAggregationInput = {
    id?: SortOrder
    data_hora?: SortOrderInput | SortOrder
    comentario_aluno?: SortOrderInput | SortOrder
    comentario_professor?: SortOrderInput | SortOrder
    id_treinamento?: SortOrder
    _count?: comentarioCountOrderByAggregateInput
    _avg?: comentarioAvgOrderByAggregateInput
    _max?: comentarioMaxOrderByAggregateInput
    _min?: comentarioMinOrderByAggregateInput
    _sum?: comentarioSumOrderByAggregateInput
  }

  export type comentarioScalarWhereWithAggregatesInput = {
    AND?: comentarioScalarWhereWithAggregatesInput | comentarioScalarWhereWithAggregatesInput[]
    OR?: comentarioScalarWhereWithAggregatesInput[]
    NOT?: comentarioScalarWhereWithAggregatesInput | comentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comentario"> | number
    data_hora?: DateTimeNullableWithAggregatesFilter<"comentario"> | Date | string | null
    comentario_aluno?: BytesNullableWithAggregatesFilter<"comentario"> | Uint8Array | null
    comentario_professor?: StringNullableWithAggregatesFilter<"comentario"> | string | null
    id_treinamento?: IntWithAggregatesFilter<"comentario"> | number
  }

  export type treinamentoWhereInput = {
    AND?: treinamentoWhereInput | treinamentoWhereInput[]
    OR?: treinamentoWhereInput[]
    NOT?: treinamentoWhereInput | treinamentoWhereInput[]
    id?: IntFilter<"treinamento"> | number
    data_hora?: DateTimeNullableFilter<"treinamento"> | Date | string | null
    media_acertos?: FloatNullableFilter<"treinamento"> | number | null
    avaliacao_prof?: IntNullableFilter<"treinamento"> | number | null
    id_aluno?: IntFilter<"treinamento"> | number
    id_turma?: IntFilter<"treinamento"> | number
    id_professor?: IntFilter<"treinamento"> | number
  }

  export type treinamentoOrderByWithRelationInput = {
    id?: SortOrder
    data_hora?: SortOrderInput | SortOrder
    media_acertos?: SortOrderInput | SortOrder
    avaliacao_prof?: SortOrderInput | SortOrder
    id_aluno?: SortOrder
    id_turma?: SortOrder
    id_professor?: SortOrder
  }

  export type treinamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: treinamentoWhereInput | treinamentoWhereInput[]
    OR?: treinamentoWhereInput[]
    NOT?: treinamentoWhereInput | treinamentoWhereInput[]
    data_hora?: DateTimeNullableFilter<"treinamento"> | Date | string | null
    media_acertos?: FloatNullableFilter<"treinamento"> | number | null
    avaliacao_prof?: IntNullableFilter<"treinamento"> | number | null
    id_aluno?: IntFilter<"treinamento"> | number
    id_turma?: IntFilter<"treinamento"> | number
    id_professor?: IntFilter<"treinamento"> | number
  }, "id">

  export type treinamentoOrderByWithAggregationInput = {
    id?: SortOrder
    data_hora?: SortOrderInput | SortOrder
    media_acertos?: SortOrderInput | SortOrder
    avaliacao_prof?: SortOrderInput | SortOrder
    id_aluno?: SortOrder
    id_turma?: SortOrder
    id_professor?: SortOrder
    _count?: treinamentoCountOrderByAggregateInput
    _avg?: treinamentoAvgOrderByAggregateInput
    _max?: treinamentoMaxOrderByAggregateInput
    _min?: treinamentoMinOrderByAggregateInput
    _sum?: treinamentoSumOrderByAggregateInput
  }

  export type treinamentoScalarWhereWithAggregatesInput = {
    AND?: treinamentoScalarWhereWithAggregatesInput | treinamentoScalarWhereWithAggregatesInput[]
    OR?: treinamentoScalarWhereWithAggregatesInput[]
    NOT?: treinamentoScalarWhereWithAggregatesInput | treinamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"treinamento"> | number
    data_hora?: DateTimeNullableWithAggregatesFilter<"treinamento"> | Date | string | null
    media_acertos?: FloatNullableWithAggregatesFilter<"treinamento"> | number | null
    avaliacao_prof?: IntNullableWithAggregatesFilter<"treinamento"> | number | null
    id_aluno?: IntWithAggregatesFilter<"treinamento"> | number
    id_turma?: IntWithAggregatesFilter<"treinamento"> | number
    id_professor?: IntWithAggregatesFilter<"treinamento"> | number
  }

  export type treinamento_tabuadaWhereInput = {
    AND?: treinamento_tabuadaWhereInput | treinamento_tabuadaWhereInput[]
    OR?: treinamento_tabuadaWhereInput[]
    NOT?: treinamento_tabuadaWhereInput | treinamento_tabuadaWhereInput[]
    id?: IntFilter<"treinamento_tabuada"> | number
    primeiro_numero?: IntNullableFilter<"treinamento_tabuada"> | number | null
    segundo_numero?: IntNullableFilter<"treinamento_tabuada"> | number | null
    resultado?: IntNullableFilter<"treinamento_tabuada"> | number | null
    resposta_aluno?: IntNullableFilter<"treinamento_tabuada"> | number | null
    id_treinamento?: IntFilter<"treinamento_tabuada"> | number
  }

  export type treinamento_tabuadaOrderByWithRelationInput = {
    id?: SortOrder
    primeiro_numero?: SortOrderInput | SortOrder
    segundo_numero?: SortOrderInput | SortOrder
    resultado?: SortOrderInput | SortOrder
    resposta_aluno?: SortOrderInput | SortOrder
    id_treinamento?: SortOrder
  }

  export type treinamento_tabuadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: treinamento_tabuadaWhereInput | treinamento_tabuadaWhereInput[]
    OR?: treinamento_tabuadaWhereInput[]
    NOT?: treinamento_tabuadaWhereInput | treinamento_tabuadaWhereInput[]
    primeiro_numero?: IntNullableFilter<"treinamento_tabuada"> | number | null
    segundo_numero?: IntNullableFilter<"treinamento_tabuada"> | number | null
    resultado?: IntNullableFilter<"treinamento_tabuada"> | number | null
    resposta_aluno?: IntNullableFilter<"treinamento_tabuada"> | number | null
    id_treinamento?: IntFilter<"treinamento_tabuada"> | number
  }, "id">

  export type treinamento_tabuadaOrderByWithAggregationInput = {
    id?: SortOrder
    primeiro_numero?: SortOrderInput | SortOrder
    segundo_numero?: SortOrderInput | SortOrder
    resultado?: SortOrderInput | SortOrder
    resposta_aluno?: SortOrderInput | SortOrder
    id_treinamento?: SortOrder
    _count?: treinamento_tabuadaCountOrderByAggregateInput
    _avg?: treinamento_tabuadaAvgOrderByAggregateInput
    _max?: treinamento_tabuadaMaxOrderByAggregateInput
    _min?: treinamento_tabuadaMinOrderByAggregateInput
    _sum?: treinamento_tabuadaSumOrderByAggregateInput
  }

  export type treinamento_tabuadaScalarWhereWithAggregatesInput = {
    AND?: treinamento_tabuadaScalarWhereWithAggregatesInput | treinamento_tabuadaScalarWhereWithAggregatesInput[]
    OR?: treinamento_tabuadaScalarWhereWithAggregatesInput[]
    NOT?: treinamento_tabuadaScalarWhereWithAggregatesInput | treinamento_tabuadaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"treinamento_tabuada"> | number
    primeiro_numero?: IntNullableWithAggregatesFilter<"treinamento_tabuada"> | number | null
    segundo_numero?: IntNullableWithAggregatesFilter<"treinamento_tabuada"> | number | null
    resultado?: IntNullableWithAggregatesFilter<"treinamento_tabuada"> | number | null
    resposta_aluno?: IntNullableWithAggregatesFilter<"treinamento_tabuada"> | number | null
    id_treinamento?: IntWithAggregatesFilter<"treinamento_tabuada"> | number
  }

  export type turmaWhereInput = {
    AND?: turmaWhereInput | turmaWhereInput[]
    OR?: turmaWhereInput[]
    NOT?: turmaWhereInput | turmaWhereInput[]
    id?: IntFilter<"turma"> | number
    nome?: StringNullableFilter<"turma"> | string | null
    media_turma?: FloatNullableFilter<"turma"> | number | null
    id_professor?: IntFilter<"turma"> | number
  }

  export type turmaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    media_turma?: SortOrderInput | SortOrder
    id_professor?: SortOrder
    _relevance?: turmaOrderByRelevanceInput
  }

  export type turmaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: turmaWhereInput | turmaWhereInput[]
    OR?: turmaWhereInput[]
    NOT?: turmaWhereInput | turmaWhereInput[]
    nome?: StringNullableFilter<"turma"> | string | null
    media_turma?: FloatNullableFilter<"turma"> | number | null
    id_professor?: IntFilter<"turma"> | number
  }, "id">

  export type turmaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    media_turma?: SortOrderInput | SortOrder
    id_professor?: SortOrder
    _count?: turmaCountOrderByAggregateInput
    _avg?: turmaAvgOrderByAggregateInput
    _max?: turmaMaxOrderByAggregateInput
    _min?: turmaMinOrderByAggregateInput
    _sum?: turmaSumOrderByAggregateInput
  }

  export type turmaScalarWhereWithAggregatesInput = {
    AND?: turmaScalarWhereWithAggregatesInput | turmaScalarWhereWithAggregatesInput[]
    OR?: turmaScalarWhereWithAggregatesInput[]
    NOT?: turmaScalarWhereWithAggregatesInput | turmaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"turma"> | number
    nome?: StringNullableWithAggregatesFilter<"turma"> | string | null
    media_turma?: FloatNullableWithAggregatesFilter<"turma"> | number | null
    id_professor?: IntWithAggregatesFilter<"turma"> | number
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    nome?: StringNullableFilter<"usuario"> | string | null
    email?: StringNullableFilter<"usuario"> | string | null
    senha?: StringNullableFilter<"usuario"> | string | null
    tipo_usuario?: Enumusuario_tipo_usuarioNullableFilter<"usuario"> | $Enums.usuario_tipo_usuario | null
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    tipo_usuario?: SortOrderInput | SortOrder
    _relevance?: usuarioOrderByRelevanceInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nome?: StringNullableFilter<"usuario"> | string | null
    email?: StringNullableFilter<"usuario"> | string | null
    senha?: StringNullableFilter<"usuario"> | string | null
    tipo_usuario?: Enumusuario_tipo_usuarioNullableFilter<"usuario"> | $Enums.usuario_tipo_usuario | null
  }, "id">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    tipo_usuario?: SortOrderInput | SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    nome?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    email?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    senha?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    tipo_usuario?: Enumusuario_tipo_usuarioNullableWithAggregatesFilter<"usuario"> | $Enums.usuario_tipo_usuario | null
  }

  export type aluno_turmaCreateInput = {
    id_usuario: number
    id_turma: number
  }

  export type aluno_turmaUncheckedCreateInput = {
    id_usuario: number
    id_turma: number
  }

  export type aluno_turmaUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_turma?: IntFieldUpdateOperationsInput | number
  }

  export type aluno_turmaUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_turma?: IntFieldUpdateOperationsInput | number
  }

  export type aluno_turmaCreateManyInput = {
    id_usuario: number
    id_turma: number
  }

  export type aluno_turmaUpdateManyMutationInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_turma?: IntFieldUpdateOperationsInput | number
  }

  export type aluno_turmaUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_turma?: IntFieldUpdateOperationsInput | number
  }

  export type avisosCreateInput = {
    id_aviso: number
    data_hora?: Date | string | null
    titulo?: string | null
    conteudo?: Uint8Array | null
    id_turma: number
  }

  export type avisosUncheckedCreateInput = {
    id_aviso: number
    data_hora?: Date | string | null
    titulo?: string | null
    conteudo?: Uint8Array | null
    id_turma: number
  }

  export type avisosUpdateInput = {
    id_aviso?: IntFieldUpdateOperationsInput | number
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    id_turma?: IntFieldUpdateOperationsInput | number
  }

  export type avisosUncheckedUpdateInput = {
    id_aviso?: IntFieldUpdateOperationsInput | number
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    id_turma?: IntFieldUpdateOperationsInput | number
  }

  export type avisosCreateManyInput = {
    id_aviso: number
    data_hora?: Date | string | null
    titulo?: string | null
    conteudo?: Uint8Array | null
    id_turma: number
  }

  export type avisosUpdateManyMutationInput = {
    id_aviso?: IntFieldUpdateOperationsInput | number
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    id_turma?: IntFieldUpdateOperationsInput | number
  }

  export type avisosUncheckedUpdateManyInput = {
    id_aviso?: IntFieldUpdateOperationsInput | number
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    id_turma?: IntFieldUpdateOperationsInput | number
  }

  export type comentarioCreateInput = {
    id: number
    data_hora?: Date | string | null
    comentario_aluno?: Uint8Array | null
    comentario_professor?: string | null
    id_treinamento: number
  }

  export type comentarioUncheckedCreateInput = {
    id: number
    data_hora?: Date | string | null
    comentario_aluno?: Uint8Array | null
    comentario_professor?: string | null
    id_treinamento: number
  }

  export type comentarioUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario_aluno?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    comentario_professor?: NullableStringFieldUpdateOperationsInput | string | null
    id_treinamento?: IntFieldUpdateOperationsInput | number
  }

  export type comentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario_aluno?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    comentario_professor?: NullableStringFieldUpdateOperationsInput | string | null
    id_treinamento?: IntFieldUpdateOperationsInput | number
  }

  export type comentarioCreateManyInput = {
    id: number
    data_hora?: Date | string | null
    comentario_aluno?: Uint8Array | null
    comentario_professor?: string | null
    id_treinamento: number
  }

  export type comentarioUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario_aluno?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    comentario_professor?: NullableStringFieldUpdateOperationsInput | string | null
    id_treinamento?: IntFieldUpdateOperationsInput | number
  }

  export type comentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario_aluno?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    comentario_professor?: NullableStringFieldUpdateOperationsInput | string | null
    id_treinamento?: IntFieldUpdateOperationsInput | number
  }

  export type treinamentoCreateInput = {
    data_hora?: Date | string | null
    media_acertos?: number | null
    avaliacao_prof?: number | null
    id_aluno: number
    id_turma: number
    id_professor: number
  }

  export type treinamentoUncheckedCreateInput = {
    id?: number
    data_hora?: Date | string | null
    media_acertos?: number | null
    avaliacao_prof?: number | null
    id_aluno: number
    id_turma: number
    id_professor: number
  }

  export type treinamentoUpdateInput = {
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media_acertos?: NullableFloatFieldUpdateOperationsInput | number | null
    avaliacao_prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_aluno?: IntFieldUpdateOperationsInput | number
    id_turma?: IntFieldUpdateOperationsInput | number
    id_professor?: IntFieldUpdateOperationsInput | number
  }

  export type treinamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media_acertos?: NullableFloatFieldUpdateOperationsInput | number | null
    avaliacao_prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_aluno?: IntFieldUpdateOperationsInput | number
    id_turma?: IntFieldUpdateOperationsInput | number
    id_professor?: IntFieldUpdateOperationsInput | number
  }

  export type treinamentoCreateManyInput = {
    id?: number
    data_hora?: Date | string | null
    media_acertos?: number | null
    avaliacao_prof?: number | null
    id_aluno: number
    id_turma: number
    id_professor: number
  }

  export type treinamentoUpdateManyMutationInput = {
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media_acertos?: NullableFloatFieldUpdateOperationsInput | number | null
    avaliacao_prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_aluno?: IntFieldUpdateOperationsInput | number
    id_turma?: IntFieldUpdateOperationsInput | number
    id_professor?: IntFieldUpdateOperationsInput | number
  }

  export type treinamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media_acertos?: NullableFloatFieldUpdateOperationsInput | number | null
    avaliacao_prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_aluno?: IntFieldUpdateOperationsInput | number
    id_turma?: IntFieldUpdateOperationsInput | number
    id_professor?: IntFieldUpdateOperationsInput | number
  }

  export type treinamento_tabuadaCreateInput = {
    id: number
    primeiro_numero?: number | null
    segundo_numero?: number | null
    resultado?: number | null
    resposta_aluno?: number | null
    id_treinamento: number
  }

  export type treinamento_tabuadaUncheckedCreateInput = {
    id: number
    primeiro_numero?: number | null
    segundo_numero?: number | null
    resultado?: number | null
    resposta_aluno?: number | null
    id_treinamento: number
  }

  export type treinamento_tabuadaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    primeiro_numero?: NullableIntFieldUpdateOperationsInput | number | null
    segundo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableIntFieldUpdateOperationsInput | number | null
    resposta_aluno?: NullableIntFieldUpdateOperationsInput | number | null
    id_treinamento?: IntFieldUpdateOperationsInput | number
  }

  export type treinamento_tabuadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    primeiro_numero?: NullableIntFieldUpdateOperationsInput | number | null
    segundo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableIntFieldUpdateOperationsInput | number | null
    resposta_aluno?: NullableIntFieldUpdateOperationsInput | number | null
    id_treinamento?: IntFieldUpdateOperationsInput | number
  }

  export type treinamento_tabuadaCreateManyInput = {
    id: number
    primeiro_numero?: number | null
    segundo_numero?: number | null
    resultado?: number | null
    resposta_aluno?: number | null
    id_treinamento: number
  }

  export type treinamento_tabuadaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    primeiro_numero?: NullableIntFieldUpdateOperationsInput | number | null
    segundo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableIntFieldUpdateOperationsInput | number | null
    resposta_aluno?: NullableIntFieldUpdateOperationsInput | number | null
    id_treinamento?: IntFieldUpdateOperationsInput | number
  }

  export type treinamento_tabuadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    primeiro_numero?: NullableIntFieldUpdateOperationsInput | number | null
    segundo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableIntFieldUpdateOperationsInput | number | null
    resposta_aluno?: NullableIntFieldUpdateOperationsInput | number | null
    id_treinamento?: IntFieldUpdateOperationsInput | number
  }

  export type turmaCreateInput = {
    id: number
    nome?: string | null
    media_turma?: number | null
    id_professor: number
  }

  export type turmaUncheckedCreateInput = {
    id: number
    nome?: string | null
    media_turma?: number | null
    id_professor: number
  }

  export type turmaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    media_turma?: NullableFloatFieldUpdateOperationsInput | number | null
    id_professor?: IntFieldUpdateOperationsInput | number
  }

  export type turmaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    media_turma?: NullableFloatFieldUpdateOperationsInput | number | null
    id_professor?: IntFieldUpdateOperationsInput | number
  }

  export type turmaCreateManyInput = {
    id: number
    nome?: string | null
    media_turma?: number | null
    id_professor: number
  }

  export type turmaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    media_turma?: NullableFloatFieldUpdateOperationsInput | number | null
    id_professor?: IntFieldUpdateOperationsInput | number
  }

  export type turmaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    media_turma?: NullableFloatFieldUpdateOperationsInput | number | null
    id_professor?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioCreateInput = {
    nome?: string | null
    email?: string | null
    senha?: string | null
    tipo_usuario?: $Enums.usuario_tipo_usuario | null
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    nome?: string | null
    email?: string | null
    senha?: string | null
    tipo_usuario?: $Enums.usuario_tipo_usuario | null
  }

  export type usuarioUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_usuario?: NullableEnumusuario_tipo_usuarioFieldUpdateOperationsInput | $Enums.usuario_tipo_usuario | null
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_usuario?: NullableEnumusuario_tipo_usuarioFieldUpdateOperationsInput | $Enums.usuario_tipo_usuario | null
  }

  export type usuarioCreateManyInput = {
    id?: number
    nome?: string | null
    email?: string | null
    senha?: string | null
    tipo_usuario?: $Enums.usuario_tipo_usuario | null
  }

  export type usuarioUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_usuario?: NullableEnumusuario_tipo_usuarioFieldUpdateOperationsInput | $Enums.usuario_tipo_usuario | null
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_usuario?: NullableEnumusuario_tipo_usuarioFieldUpdateOperationsInput | $Enums.usuario_tipo_usuario | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type aluno_turmaId_usuarioId_turmaCompoundUniqueInput = {
    id_usuario: number
    id_turma: number
  }

  export type aluno_turmaCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_turma?: SortOrder
  }

  export type aluno_turmaAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_turma?: SortOrder
  }

  export type aluno_turmaMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_turma?: SortOrder
  }

  export type aluno_turmaMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_turma?: SortOrder
  }

  export type aluno_turmaSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_turma?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type avisosOrderByRelevanceInput = {
    fields: avisosOrderByRelevanceFieldEnum | avisosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type avisosCountOrderByAggregateInput = {
    id_aviso?: SortOrder
    data_hora?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    id_turma?: SortOrder
  }

  export type avisosAvgOrderByAggregateInput = {
    id_aviso?: SortOrder
    id_turma?: SortOrder
  }

  export type avisosMaxOrderByAggregateInput = {
    id_aviso?: SortOrder
    data_hora?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    id_turma?: SortOrder
  }

  export type avisosMinOrderByAggregateInput = {
    id_aviso?: SortOrder
    data_hora?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    id_turma?: SortOrder
  }

  export type avisosSumOrderByAggregateInput = {
    id_aviso?: SortOrder
    id_turma?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type comentarioOrderByRelevanceInput = {
    fields: comentarioOrderByRelevanceFieldEnum | comentarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type comentarioCountOrderByAggregateInput = {
    id?: SortOrder
    data_hora?: SortOrder
    comentario_aluno?: SortOrder
    comentario_professor?: SortOrder
    id_treinamento?: SortOrder
  }

  export type comentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_treinamento?: SortOrder
  }

  export type comentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    data_hora?: SortOrder
    comentario_aluno?: SortOrder
    comentario_professor?: SortOrder
    id_treinamento?: SortOrder
  }

  export type comentarioMinOrderByAggregateInput = {
    id?: SortOrder
    data_hora?: SortOrder
    comentario_aluno?: SortOrder
    comentario_professor?: SortOrder
    id_treinamento?: SortOrder
  }

  export type comentarioSumOrderByAggregateInput = {
    id?: SortOrder
    id_treinamento?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type treinamentoCountOrderByAggregateInput = {
    id?: SortOrder
    data_hora?: SortOrder
    media_acertos?: SortOrder
    avaliacao_prof?: SortOrder
    id_aluno?: SortOrder
    id_turma?: SortOrder
    id_professor?: SortOrder
  }

  export type treinamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    media_acertos?: SortOrder
    avaliacao_prof?: SortOrder
    id_aluno?: SortOrder
    id_turma?: SortOrder
    id_professor?: SortOrder
  }

  export type treinamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    data_hora?: SortOrder
    media_acertos?: SortOrder
    avaliacao_prof?: SortOrder
    id_aluno?: SortOrder
    id_turma?: SortOrder
    id_professor?: SortOrder
  }

  export type treinamentoMinOrderByAggregateInput = {
    id?: SortOrder
    data_hora?: SortOrder
    media_acertos?: SortOrder
    avaliacao_prof?: SortOrder
    id_aluno?: SortOrder
    id_turma?: SortOrder
    id_professor?: SortOrder
  }

  export type treinamentoSumOrderByAggregateInput = {
    id?: SortOrder
    media_acertos?: SortOrder
    avaliacao_prof?: SortOrder
    id_aluno?: SortOrder
    id_turma?: SortOrder
    id_professor?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type treinamento_tabuadaCountOrderByAggregateInput = {
    id?: SortOrder
    primeiro_numero?: SortOrder
    segundo_numero?: SortOrder
    resultado?: SortOrder
    resposta_aluno?: SortOrder
    id_treinamento?: SortOrder
  }

  export type treinamento_tabuadaAvgOrderByAggregateInput = {
    id?: SortOrder
    primeiro_numero?: SortOrder
    segundo_numero?: SortOrder
    resultado?: SortOrder
    resposta_aluno?: SortOrder
    id_treinamento?: SortOrder
  }

  export type treinamento_tabuadaMaxOrderByAggregateInput = {
    id?: SortOrder
    primeiro_numero?: SortOrder
    segundo_numero?: SortOrder
    resultado?: SortOrder
    resposta_aluno?: SortOrder
    id_treinamento?: SortOrder
  }

  export type treinamento_tabuadaMinOrderByAggregateInput = {
    id?: SortOrder
    primeiro_numero?: SortOrder
    segundo_numero?: SortOrder
    resultado?: SortOrder
    resposta_aluno?: SortOrder
    id_treinamento?: SortOrder
  }

  export type treinamento_tabuadaSumOrderByAggregateInput = {
    id?: SortOrder
    primeiro_numero?: SortOrder
    segundo_numero?: SortOrder
    resultado?: SortOrder
    resposta_aluno?: SortOrder
    id_treinamento?: SortOrder
  }

  export type turmaOrderByRelevanceInput = {
    fields: turmaOrderByRelevanceFieldEnum | turmaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type turmaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    media_turma?: SortOrder
    id_professor?: SortOrder
  }

  export type turmaAvgOrderByAggregateInput = {
    id?: SortOrder
    media_turma?: SortOrder
    id_professor?: SortOrder
  }

  export type turmaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    media_turma?: SortOrder
    id_professor?: SortOrder
  }

  export type turmaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    media_turma?: SortOrder
    id_professor?: SortOrder
  }

  export type turmaSumOrderByAggregateInput = {
    id?: SortOrder
    media_turma?: SortOrder
    id_professor?: SortOrder
  }

  export type Enumusuario_tipo_usuarioNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo_usuario | Enumusuario_tipo_usuarioFieldRefInput<$PrismaModel> | null
    in?: $Enums.usuario_tipo_usuario[] | null
    notIn?: $Enums.usuario_tipo_usuario[] | null
    not?: NestedEnumusuario_tipo_usuarioNullableFilter<$PrismaModel> | $Enums.usuario_tipo_usuario | null
  }

  export type usuarioOrderByRelevanceInput = {
    fields: usuarioOrderByRelevanceFieldEnum | usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo_usuario?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo_usuario?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo_usuario?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumusuario_tipo_usuarioNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo_usuario | Enumusuario_tipo_usuarioFieldRefInput<$PrismaModel> | null
    in?: $Enums.usuario_tipo_usuario[] | null
    notIn?: $Enums.usuario_tipo_usuario[] | null
    not?: NestedEnumusuario_tipo_usuarioNullableWithAggregatesFilter<$PrismaModel> | $Enums.usuario_tipo_usuario | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusuario_tipo_usuarioNullableFilter<$PrismaModel>
    _max?: NestedEnumusuario_tipo_usuarioNullableFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumusuario_tipo_usuarioFieldUpdateOperationsInput = {
    set?: $Enums.usuario_tipo_usuario | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedEnumusuario_tipo_usuarioNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo_usuario | Enumusuario_tipo_usuarioFieldRefInput<$PrismaModel> | null
    in?: $Enums.usuario_tipo_usuario[] | null
    notIn?: $Enums.usuario_tipo_usuario[] | null
    not?: NestedEnumusuario_tipo_usuarioNullableFilter<$PrismaModel> | $Enums.usuario_tipo_usuario | null
  }

  export type NestedEnumusuario_tipo_usuarioNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo_usuario | Enumusuario_tipo_usuarioFieldRefInput<$PrismaModel> | null
    in?: $Enums.usuario_tipo_usuario[] | null
    notIn?: $Enums.usuario_tipo_usuario[] | null
    not?: NestedEnumusuario_tipo_usuarioNullableWithAggregatesFilter<$PrismaModel> | $Enums.usuario_tipo_usuario | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusuario_tipo_usuarioNullableFilter<$PrismaModel>
    _max?: NestedEnumusuario_tipo_usuarioNullableFilter<$PrismaModel>
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