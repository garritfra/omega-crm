FROM node:15.0.1-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 80
CMD [ "npm", "start" ]