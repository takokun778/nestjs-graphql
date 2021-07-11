# nestjs-graphql

## Build Develop Environment
```bash
docker-compose build

docker-compose up -d

make install

make migration_run
```

## Server Start
```bash
make start
```
http://localhost:3000/graphql

## memo
```bash
nest new .
nest generate module user
nest generate service user
nest generate resolver user
```

## Reference
### NestJS
- [Harnessing the power of TypeScript & GraphQL](https://docs.nestjs.com/graphql/quick-start)
- [NestJSとGraphQLで開発用の環境を作成する](https://qiita.com/Gma_Gama/items/e315af8248df689ebd42)
- [NestJS+PostgreSQL(+pgAdmin4)の開発環境をDockerで構築する](https://zenn.dev/kobayashiyabako/articles/3a6c575aafae67a41d25)
- [NestJSでGraphQLを試してみました](https://blog.asial.co.jp/1664)
- [NestJSでのGraphQLアプリ開発手法](https://tech.fusic.co.jp/posts/2019-09-29-nestjs-graphql/)
- [Nest.jsのDB接続周りでハマった話](https://qiita.com/shukawam/items/6c318d3e58cf19ad3f0c)

### TypeORM
- [Nest.js + TypeORMでGraphQL](https://zenn.dev/azukiazusa/articles/e84be9735d357e)
- [docker-composeでNode.js(Express)とPostgresSQLを連携したサービスを作る勉強会](https://qiita.com/tamoco/items/caffca436546a1a5fcc8)
- [TypeORMのQueryBuilderの基本的な使い方](https://qiita.com/taisuke-j/items/001dfaa8b61649601d73)