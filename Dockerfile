FROM node:18-alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances du projet
RUN npm install

# Copiez tous les fichiers du projet dans le conteneur
COPY . .

# Construisez l'application Vue.js
RUN npm run build

# Exposez le port sur lequel l'application écoute
EXPOSE 8081

# Démarrez l'application lorsque le conteneur démarre
CMD ["npm", "run", "serve"]