FROM node:16-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN apk update && apk add curl
