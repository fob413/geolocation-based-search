FROM node:18-alpine

RUN npm install -g vite

WORKDIR /frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

