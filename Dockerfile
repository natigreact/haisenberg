# Stage 1 - сборка фронта
FROM node:16-alpine3.12
WORKDIR /app
EXPOSE 3000
COPY package.json ./
RUN yarn install
COPY . .
CMD ["npm", "start"]