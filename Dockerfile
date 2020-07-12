FROM node:13.5

RUN mkdir tmp/app

WORKDIR tmp/app

COPY . .

RUN npm install

RUN npm run build

CMD npm run start
