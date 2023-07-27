FROM node:16.13.2@sha256:2033f4cc18f9d8b5d0baa7f276aaeffd202e1a2c6fe9af408af05a34fe68cbfb as base

FROM base as development

RUN apt-get update && apt-get install -y \
    # Instalar editor de texto, para revisar archivos dentro del contenedor
    nano

# Se establece el directorio de trabajo actual
WORKDIR /usr/src/extractor_caracteristicas

# Se copia package.json y package-lock.json al directorio de trabajo actual
COPY package*.json ./

# Se instalan las dependencias
RUN npm ci

# Se copia el resto de los archivos a la carpeta de trabajo actual
COPY . ./

# Se expone el puerto
EXPOSE 5173

# Se ejecuta vue
CMD [ "npm", "run", "dev" ]

FROM base as build

# Se establece el directorio de trabajo actual
WORKDIR /usr/src/extractor_caracteristicas_build

# Se copia package.json y package-lock.json al directorio de trabajo actual
COPY package*.json ./

# Se instalan todas las dependencias para compilar y minificar Vue para producción.
# Tenga en cuenta que en producción solo van a estar disponibles los paquetes de
# producción, obtenidos al usar npm run build
RUN npm ci

# Se copian los demás archivos al directorio de trabajo actual
COPY . ./

# Se compila la aplicación para producción
RUN npm run build

FROM nginx:1.23.1@sha256:2f770d2fe27bc85f68fd7fe6a63900ef7076bc703022fe81b980377fe3d27b70 as production

# Se copian los archivos compilados y minificados generados en
# la etapa build (carpeta dist) a nginx
COPY --from=build /usr/src/extractor_caracteristicas_build/dist /usr/share/nginx/html

# Se expone el puerto
EXPOSE 80

# Se ejecuta nginx
CMD [ "nginx", "-g", "daemon off;" ]
