#specify a base image
#use base that has dependencies installed you need
FROM node:alpine
#set working directiory where files are copied too (auto created). ./ will copy to this folder
WORKDIR /usr/app
#Move files from local to inside container, . is current build location, ./ current working dir
#Make sure package.json is available before npm install
COPY ./package.json ./
#install some dependencies
RUN npm install
#once copied over package.json for dependencies then copy all other file
COPY ./ ./
#set default command, always run on start and cannot be overriden. 
#use docker exec if you want to execute command on running container
CMD ["npm","start"]