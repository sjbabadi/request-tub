FROM postgres:alpine
ADD ./db/migration.sql /docker-entrypoint-initdb.d/init.sql