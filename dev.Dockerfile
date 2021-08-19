FROM strapi/base:14-alpine

WORKDIR /workspace

COPY ./package.json ./
COPY ./yarn.lock ./


