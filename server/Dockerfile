FROM node:14.17.5
WORKDIR /app

COPY package-lock.json /app
COPY package.json /app
RUN npm install
COPY . /app

EXPOSE 5000

CMD ["node", "server.js"]