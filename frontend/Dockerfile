FROM beevelop/ionic AS ionic

# Create app director
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
RUN ionic build

EXPOSE 8100

CMD ["ionic", "serve"]
