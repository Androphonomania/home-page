# Use an official nginx image as a base image
FROM nginx:latest

# Copy the static website files from the current directory to the default nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Run nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]