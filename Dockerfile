# https://medium.com/@wkrzywiec/build-and-run-angular-application-in-a-docker-container-b65dbbc50be8
# Stage 1
# docker build -t ng .
FROM node:12-alpine AS build
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run prod

# Stage 2
# docker run --name ng -d -p 80:80 ng
FROM nginx:1.17-alpine
COPY --from=build /src/dist /usr/share/nginx/html
COPY nginx-ng-app.conf /etc/nginx/conf.d/
