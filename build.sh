docker rm --force ng -v
docker rmi ng

docker build -t ng .

docker run -p 8088:80 --name ng ng
docker run -it ng sh
