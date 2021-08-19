FROM strapi/base:14-alpine

WORKDIR /code

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]