FROM 126102547314.dkr.ecr.us-east-1.amazonaws.com/node-20

WORKDIR /app

COPY package*.json /app
RUN npm install . --legacy-peer-deps

COPY . /app/

RUN npm run build:prod
RUN ls -a

EXPOSE 3000

CMD ["npm", "run", "start:prod"]