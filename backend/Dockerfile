FROM node:16

WORKDIR /usr/src/app

COPY backend/package*.json ./backend/
WORKDIR /usr/src/app/backend
RUN npm install

WORKDIR /usr/src/app
COPY backend/ ./backend/
COPY shared/ ./shared/

WORKDIR /usr/src/app/backend

RUN npm run build
EXPOSE 3001

CMD ["node", "dist/index.js"]
