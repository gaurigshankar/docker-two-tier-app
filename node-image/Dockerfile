FROM node:latest
MAINTAINER GAURI SHANKAR P <gauri.gshankar@yahoo.co.in>
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]
