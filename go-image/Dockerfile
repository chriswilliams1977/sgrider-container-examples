# STEP 1 build executable binary
FROM golang:alpine as builder
COPY . /app
WORKDIR /app
#get dependancies
#you can also use dep
RUN go get -d -v
#build the binary
RUN go build -o /go/bin/hello

# STEP 2 build a small image
#Scratch base image
FROM scratch
#disabling cgo which gives us a static binary
#setting the OS to Linux (in case someone builds this on a Mac or Windows)
#-a flag means to rebuild all the packages we’re using, which means all the imports will be rebuilt with cgo disabled
COPY --from=builder /go/bin/hello /go/bin/hello
#Run main app
ENTRYPOINT ["/go/bin/hello"]