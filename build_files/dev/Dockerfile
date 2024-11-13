FROM node:20-slim

WORKDIR /app

COPY package*.json /app
RUN npm install . --legacy-peer-deps

COPY . /app/

RUN npm run build
RUN ls -a

EXPOSE 3000

CMD ["npm", "start:dev"]