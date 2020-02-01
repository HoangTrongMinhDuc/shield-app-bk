FROM node:latest

WORKDIR /usr/src/shield-bk/
COPY ./package*.json ./
RUN npm install -qy
COPY ./ ./
ENV PORT=5000
EXPOSE 5000

CMD ["npm", "start"]