FROM node:18

WORKDIR /usr/src

COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .
COPY .yarn .yarn
COPY config config
COPY client client
COPY util util
COPY server server

RUN yarn install
RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]
