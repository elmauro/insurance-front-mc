IMAGEID=$(docker images --format {{.ID}} insurance-front-mc:latest);
CONTAINERS=$(docker ps -aq --filter="ancestor=$IMAGEID");
_DATE=$(date +"%m-%d-%y-%H-%M-%S");
if [ ! -z "$CONTAINERS" ]; then docker stop $CONTAINERS; docker rm -f $CONTAINERS; fi;
if [ ! -z "$IMAGEID" ]; then docker rmi -f $IMAGEID; fi;
docker build -t insurance-front-mc .;

docker tag insurance-front-mc:latest 635415795392.dkr.ecr.us-east-1.amazonaws.com/insurance-front-mc:latest;
docker tag insurance-front-mc:latest 635415795392.dkr.ecr.us-east-1.amazonaws.com/insurance-front-mc:$_DATE;

# docker run -e HOST_ENV=localhost -e NODE_ENV=development --name insurance-front -p 4200:4200 insurance-front-mc:latest