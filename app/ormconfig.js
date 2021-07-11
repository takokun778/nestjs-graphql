module.exports = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

    // アプリケーション実行時にEntityをデータベースに同期する。(今回は手動で作成したマイグレーションですべて管理したいので、falseに)
    synchronize: false,
  
    // 実行されるSQLをログとして吐くかどうかの設定 (どんなSQLが実行されるか見たい場合にはtrueにする。)
    logging: true,
    entities: ["src/**/*.entity.ts"],
    migrations: ["migrations/**/*.ts"],
    cli: {
      entitiesDir: "src/**/*.entity.ts",
      migrationsDir: "migrations",
    },
};