# To build the backend docker image

    docker build -t backend .

# To run the backend docker image

    docker run --name backend -p 8080:80 -d backend
