FROM node:latest
ADD . /src
ENV NODE_ENV=staging
WORKDIR /src
RUN cd cms && npm install
CMD npm start
