FROM node:20
WORKDIR /app
COPY backend/package.json /app
RUN npm install
COPY backend .
CMD ["npm", "start"]