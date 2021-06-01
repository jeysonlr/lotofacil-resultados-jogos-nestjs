FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install cross-env
RUN npm i -g @nestjs/cli

RUN npm install

COPY . .

# RUN npm run start:dev

EXPOSE 3333

CMD [ "yarn", "start:dev"]
