FROM node

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install
RUN npm install react-scripts

EXPOSE 3000

COPY . ./
CMD ["npm", "start"]