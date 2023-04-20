# /app
FROM node:19.2.0-alpine3.16

#cd app
WORKDIR /app

#Dest /app
COPY package.json ./

#Instalar las dependencias
RUN npm install

#Dest /app
COPY . .

#Realiza testing
RUN npm run test

#ELiminar archivos no necesarios en producción
RUN rm -rf tests && rm -rf node_modules

#Instalar unicamente las dependencias de producción
RUN npm install --prod


#comando run de la imagen
CMD [ "node", "app.js" ]