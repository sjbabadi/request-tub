FROM node:14-alpine3.13 as react-build

COPY package*.json ./

RUN npm install
# RUN npm run build
COPY . .

EXPOSE 80 

CMD ["node", "index.js"]