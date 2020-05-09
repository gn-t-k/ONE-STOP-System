FROM node:14

WORKDIR /var/www/html/nuxt

RUN apt-get update && \
    apt-get add git && \
    npm install -g npm && \
    npm install -g vue-cli

ENV HOST 0.0.0.0
EXPOSE 3000
