FROM node:alpine as BUILD_IMAGE
WORKDIR /app/client
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine as PRODUCTION_IMAGE
WORKDIR /app/client
COPY --from=BUILD_IMAGE /app/client/dist/ /app/client/dist
EXPOSE 8080
COPY package.json .
COPY vite.config.js .

CMD ["npm", "run", "preview"]