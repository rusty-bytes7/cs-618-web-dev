FROM node:20 AS build
ARG VITE_BACKEND_URL="https://blog-backend-944771749457.us-east5.run.app/api/v1"
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
# Start the SSR server
CMD ["npm", "start"]