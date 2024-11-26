FROM 563699815156.dkr.ecr.ap-south-1.amazonaws.com/node-20

WORKDIR /app

COPY package*.json /app
RUN npm install . --legacy-peer-deps

COPY . /app/

RUN npm run build:staging
RUN ls -a

EXPOSE 3000

CMD ["npm", "run", "start:staging"]