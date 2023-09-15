FROM node
WORKDIR /app
copy package*.json ./
run npm install
copy . .
expose 8080
cmd [ "npm", "start"]