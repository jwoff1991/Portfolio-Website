# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install -g npm@7

# Bundle the source code inside the Docker image
COPY . .

# Make port 3000 available to the world outside the Docker container
EXPOSE 3000

# Define the command to run the app
CMD [ "npm", "start" ]
