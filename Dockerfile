FROM node:18

WORKDIR /usr/src

COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .
COPY .yarn .
COPY rosetta-server .
COPY rosetta-client .

RUN yarn install
RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]