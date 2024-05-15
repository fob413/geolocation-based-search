FROM node:20.8.0-slim

RUN npm install -g nodemon

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

