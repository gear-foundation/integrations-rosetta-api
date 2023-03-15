FROM node:18 as builder

WORKDIR /usr/src

RUN git clone https://github.com/gear-tech/rosetta-api.git .

RUN yarn install
RUN yarn build

FROM node:18
COPY --from=builder /usr/src /opt/rosetta-api

WORKDIR /opt/rosetta-api

EXPOSE 8080

CMD [ "yarn", "start:offline" ]
