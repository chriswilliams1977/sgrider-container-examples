FROM node:alpine

WORKDIR '/app'

#Trick to use cache for npm install unless dependencies change
#Only updates code changes if dependecies do not change
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]