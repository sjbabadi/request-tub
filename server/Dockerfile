FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# RUN npm run build
COPY . .

EXPOSE 4000

CMD ["node", "index.js"]