docker rm --force ng -v
docker rmi ng-map
docker build -t ng-map .
docker run -it --name ng --rm ng-map sh

cd /ng-app
docker cp src ng:/ng-app
docker cp proxy.conf.json ng:/ng-app
docker cp angular.json ng:/ng-app
docker cp tsconfig.json  ng:/ng-app
docker cp tslint.json ng:/ng-app
docker cp tsconfig.app.json ng:/ng-app
