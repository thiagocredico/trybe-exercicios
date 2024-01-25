FROM node:16.14.2-bullseye

WORKDIR /app

COPY package* ./ 

RUN npm install

COPY . . 

EXPOSE 5555

EXPOSE 6060

ENTRYPOINT [ "npm", "run" ]

CMD ["dev"]