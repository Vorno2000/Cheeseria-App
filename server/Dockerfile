FROM node:alpine as BUILD_IMAGE
WORKDIR /app/server
COPY package*.json ./
COPY . .
RUN npm ci -f --only=production && npm cache clean --force

FROM node:alpine as PRODUCTION_IMAGE
WORKDIR /app/server
ENV NODE_ENV production
COPY --from=BUILD_IMAGE /app/server/node_modules /app/server/node_modules
CMD ["node", "start"]