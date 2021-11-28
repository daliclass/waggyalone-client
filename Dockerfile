FROM node:14.16

RUN mkdir app

WORKDIR app

COPY . .

RUN npm install

RUN npm run build

CMD npm run start
