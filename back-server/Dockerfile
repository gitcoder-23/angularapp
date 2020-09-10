#Starting from nimimal node image
FROM node:alpine

#Specifing directory Where project will run inside container
#its like cd command
WORKDIR /app

#Copying json file inside container from local
COPY package*.json ./


#Inastalling dependencies indside container
RUN npm install

#installing nodemon as global dependencies
RUN  npm i -g nodemon

#Copying project code from local to container
COPY  . .

#Exposing port for so that output can be accessed outside of the container
#Hence heroku dosent support exposing port i comment that out

#EXPOSE 3000

#Running the application as root user
CMD nodemon index.js --bind 0.0.0.0:$PORT 
