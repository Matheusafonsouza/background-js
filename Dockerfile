FROM node:14

WORKDIR /usr/src/app

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "dev" ]