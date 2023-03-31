
FROM node:19.2.0-alpine3.16
# /app

#cd app
WORKDIR /app

#Dest /app
COPY app.js package.json ./

#Instalar las dependencias
RUN npm install

#comando run de la imagen
CMD [ "node", "app.js" ]