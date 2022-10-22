# Versão onde a imagem vai rodar
# Docker Hub -> https://hub.docker.com/search?q=&type=image
FROM node:14.17.3-buster

# Diretório de trabalho (é onde a aplicação ficará dentro do container)
# Pode ser um nome de diretório qualquer
WORKDIR /app

# Adicionando `/app/node_modules/.bin` para o $PATH
# Opcional, pode remover essa linha e remover o .dockerignore
ENV PATH /app/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache
# Primeiro copia os packages...
# Depois roda o "npm i" para instalar as dependências...
# Por fim copia todos os arquivos e diretórios para o container 
COPY ./package*.json ./
RUN npm i
COPY . .

# Inicializa a aplicação
# Cada palavra do comando deve ser uma posição dentro do array
CMD ["npm", "start"]