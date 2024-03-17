# USE OFFICIAL NODE.js Image from Docker Hub
FROM node:20.10-alpine

# SPECIFY WORKING DIR
WORKDIR /usr/src/app

# SET NODE_ENV
ENV NODE_ENV production

# COPY package.json and package-lock.json
COPY package*.json ./


RUN npm ci --only=production

# INSTALL DEPENDECIES
RUN npm install


COPY . .


EXPOSE 1338


CMD ["node","server.js"]

