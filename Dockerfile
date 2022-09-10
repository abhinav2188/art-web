# syntax=docker/dockerfile:1

FROM node:17-alpine3.15
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]