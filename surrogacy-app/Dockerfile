# Use the official Node.js image as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on (as specified in your README, it's 3000)
EXPOSE 3000

# Run the command to start the application
CMD ["npm", "start"]
