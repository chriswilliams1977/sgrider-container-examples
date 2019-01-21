#Use a base image
FROM alpine

#Download and install dependency
RUN apk add --update redis

#Tell image what to do when it starts container
CMD ["redis-server"]