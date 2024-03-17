.PHONY :  docker-build-system-server

docker build -t ms-system-server .


docker run -d --name ms-system-server -p 1338:1338 ms-system-server
