FROM node:18 as builder

RUN git clone https://github.com/sergeyfilyanin/rosetta-api.git

WORKDIR /usr/src

COPY package.json    \
     yarn.lock       \
     .yarnrc.yml     \
     ./

COPY .yarn .yarn
COPY client client
COPY server server
COPY util util
COPY config config

RUN yarn install
RUN yarn build

FROM node:18
COPY --from=builder /usr/src /opt/rosetta-api

WORKDIR /opt/rosetta-api

EXPOSE 8080

CMD [ "yarn", "start" ]
