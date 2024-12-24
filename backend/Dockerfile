FROM node

WORKDIR /app/backend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8787

CMD ["npm","run","dev"]