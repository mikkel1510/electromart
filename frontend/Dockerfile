FROM node:16

WORKDIR /usr/src/app

COPY frontend/package*.json ./frontend/
WORKDIR /usr/src/app/frontend
RUN npm install

WORKDIR /usr/src/app
COPY frontend/ ./frontend/
COPY shared/ ./shared/

WORKDIR /usr/src/app/frontend

RUN npm run build
RUN npm install -g serve

CMD ["serve", "-s", "build"]
