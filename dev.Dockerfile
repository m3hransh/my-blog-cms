# This is for vs code dev container
# as I don't need copy the files
FROM strapi/base:14-alpine

WORKDIR /workspace

COPY ./package.json ./
COPY ./yarn.lock ./


