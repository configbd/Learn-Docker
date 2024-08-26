# Learn-Docker

# Some Common command in Docker

-To get running container details:  `docker ps` or ` docker container ls`
-To get  all container(running+stopped) details :  `docker ps -a` or ` docker container ls -a`
    NOTE: It returns (CONTAINER ID,IMAGE NAME, COMMAND,CREATED TIME,STATUS,PORTS CONTAINER NAMES)
-To start Container: `docker container start <CONTAINER_NAME or CONTAINER_ID>`
    EX:
        `docker container start abc`
-To Stop Container: `docker container stop <CONTAINER_NAME or CONTAINER_ID>`
    EX:
        `docker container start abc`

-To Rename Container: `docker container rename <CONTAINER> <NEW_NAME>`
    EX:
        `docker container rename xyz abc`


-To get Help or more command associated with container: `docker container --help`


-To Build image:
    docker build -t <image name> <path of Dockerfile>
    Ex:
        docker build -t learn-docker .


-To Run image(without port mappings):
    docker run -it <image name>
    Ex:
        docker run -it learn-docker
        
-To Run image(with port mappings):
    docker run -it -p <external port>:<internal port> <image name>
    Ex:
        docker run -it -p 8000:8000 learn-docker

-To See inside Container:
    docker exec -it <container_id> bash
    Ex:
        docker exec -it 1575964b8864a93c174e11b6f3802686b8364973ea47240936ca2081ef21f59c bash
        OR
        docker exec -it 1575964b88 bash

-To pass Environment variable:
    docker run -it -e PORT=<Port Number> -p <external port>:<internal port> <image name>
    Ex:
        docker run -it -e PORT=4000 -p 4000:4000 learn-docker