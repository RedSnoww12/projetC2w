# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Angular app
RUN npm run build

# Expose the port on which the app will run
EXPOSE 4200

# Start the Angular app
CMD ["npm", "start"]
