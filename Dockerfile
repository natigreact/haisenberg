# Stage 1 - сборка фронта
FROM node:18-alpine3.15 as build-deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . ./
RUN npm run build

# Stage 2 - сборка сервера
FROM nginx:1.12-alpine
COPY nginx/fullchain.pem /etc/ssl/certs/fullchain.pem
COPY nginx/privkey.pem /etc/ssl/private/privkey.pem
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /app/build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]