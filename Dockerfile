# syntax=docker/dockerfile:1
FROM node:16.16-alpine
WORKDIR /dashboard-app
COPY ["package.json", "package-lock.json*", "./"]x
RUN npm ci
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]