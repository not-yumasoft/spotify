FROM node:18-alpine
WORKDIR /app/socket-server
COPY package.json /app/socket-server/package.json
COPY package-lock.json /app/socket-server/package-lock.json
RUN npm ci --silent
COPY . /app/socket-server
EXPOSE 8888
CMD ["npm", "run", "dev"]
