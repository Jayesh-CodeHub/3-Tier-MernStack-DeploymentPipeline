FROM node:18

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Fix permission for react-scripts
RUN chmod +x node_modules/.bin/react-scripts

# Copy rest of the code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
