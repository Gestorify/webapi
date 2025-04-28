# Dockerfile para Node.js Express API
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências em modo production
RUN npm install --production

# Copia o restante do código
COPY . .

# Expõe a porta da aplicação
EXPOSE 3000

# Comando padrão
CMD ["npm", "start"]
