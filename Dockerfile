# pull down the specified node image
FROM node:10-slim
# WORKDIR specifies the directory our
# application's code will live in
WORKDIR /app
# COPY our package.json file
# into our app directory
COPY package.json /app
# install our npm packages
RUN npm install
# COPY the rest of our application
# into our app directory
COPY . /app
# here we set 'npm start' as our
# default command for the image, it
# will run when the container starts
CMD ["npm", "start"]