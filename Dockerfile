FROM node:13.5

RUN mkdir app

WORKDIR app

COPY . .

RUN npm install

RUN npm run build

CMD npm run start
