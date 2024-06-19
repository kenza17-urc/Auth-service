FROM node:20

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g nodemon

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]
