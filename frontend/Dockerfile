# ADIM 6 TAMAMLANDI: Frontend için Dockerfile oluşturuldu
FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
