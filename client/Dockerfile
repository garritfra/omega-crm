FROM node:15-alpine

# https://stackoverflow.com/a/59471030/9046809
RUN apk add --update python make g++\
    && rm -rf /var/cache/apk/*

COPY . /app
WORKDIR /app
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80