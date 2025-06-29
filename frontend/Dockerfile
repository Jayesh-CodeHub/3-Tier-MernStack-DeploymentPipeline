FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install && chmod -R 755 node_modules

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
