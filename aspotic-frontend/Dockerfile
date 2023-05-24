FROM node:19-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g ionic
RUN npm install --legacy-peer-deps

COPY . .
RUN ionic build --prod

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/src/app/www /usr/share/nginx/html
