FROM node:18-alpine
WORKDIR /app/server
COPY package.json /app/server/package.json
COPY package-lock.json /app/server/package-lock.json
RUN npm ci --silent
COPY . /app/server
EXPOSE 8000
CMD ["npm", "run", "start:dev"]
