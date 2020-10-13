# https://medium.com/@wkrzywiec/build-and-run-angular-application-in-a-docker-container-b65dbbc50be8
# Stage 1
FROM node:12-alpine AS build
WORKDIR /src
COPY . .
RUN npm install
RUN npm run build -- --prod --output-path dist

# Stage 2
FROM nginx:1.18
COPY --from=build /src/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
