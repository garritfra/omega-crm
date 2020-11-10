FROM node:15-alpine

# https://stackoverflow.com/a/59471030/9046809
RUN apk add --update python make g++\
    && rm -rf /var/cache/apk/*

COPY . /app
WORKDIR /app
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
COPY ./conf/conf.d/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80