FROM node:14.16

RUN mkdir app

WORKDIR app

COPY . .

RUN npm install

EXPOSE 3000

CMD sh -c "npm run build && npm run start"
