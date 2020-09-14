IMAGEID=$(docker images --format {{.ID}} insurance-front-mc:latest);
CONTAINERS=$(docker ps -aq --filter="ancestor=$IMAGEID");
_DATE=$(date +"%m-%d-%y-%H-%M-%S");
if [ ! -z "$CONTAINERS" ]; then docker stop $CONTAINERS; docker rm -f $CONTAINERS; fi;
if [ ! -z "$IMAGEID" ]; then docker rmi -f $IMAGEID; fi;
docker build -t insurance-front-mc .;

docker tag insurance-front-mc:latest 728401402215.dkr.ecr.us-east-1.amazonaws.com/insurance-front-mc:latest;

# docker run -e NODE_ENV=development --name insurance-front -p 8092:4200 insurance-front-mc:latest