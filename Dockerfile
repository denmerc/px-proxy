FROM node:4.2.3
# for testing purposes
RUN npm install -g jasmine-node
RUN npm install nodemon -g

#ENV NODE_ENV development
#ENV NODE_ENV production

# for prod scenarios
#RUN npm install forever -g

RUN mkdir /app
WORKDIR /app
COPY package.json /app/
RUN npm install

COPY nodemon.json /app/

COPY . /app
EXPOSE 3000 5858

ENTRYPOINT ["npm", "start"]
#ENTRYPOINT ["forever", "start", "server.js"]
#PM2