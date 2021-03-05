# Dockerfile

# base image
FROM node:alpine

WORKDIR /home/ishraqkabir/workspace/smartifier-frontend
COPY . ./

# install dependencies
RUN npm install

# start app
CMD npm run dev