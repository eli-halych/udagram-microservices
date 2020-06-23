FROM node:12

# Create app director
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8100

CMD ["ionic", "serve", "8100", "--address", "0.0.0.0"]
