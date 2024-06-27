# #1 pull official base image
# FROM node:13.12.0-alpine

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install 
# RUN npm install react-scripts@3.4.1 -g 
# # add app
# COPY . ./

# EXPOSE 5173
# # start app
# CMD ["npm", "run", "dev"]

#2 FROM node:18-alpine

# WORKDIR /app

# COPY package.json .

# RUN npm install

# COPY . .

# RUN npm run build

# EXPOSE 5173

# CMD [ "npm", "run", "dev" ]

#3
FROM node:18-alpine
# Set the working directory
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package*.json ./
# Install the dependencies
RUN npm install
# Copy the app files
COPY . .
# Build the app
RUN npm run build
# Expose the port
EXPOSE 5173
# Run the app
CMD ["npm", "run", "dev"]