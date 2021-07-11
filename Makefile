dev:
	docker-compose exec dev /bin/bash
install:
	docker-compose exec dev npm install
start:
	docker-compose exec dev npm start
build:
	docker-compose exec dev npm run build
format:
	docker-compose exec dev npm run format
lint:
	docker-compose exec dev npm run lint
generate_graphql:
	docker-compose exec dev npm run generate:graphql
migration_generate:
	docker-compose exec dev npm run migration:generate
migration_run:
	docker-compose exec dev npm run migration:run
db:
	docker-compose exec db /bin/sh