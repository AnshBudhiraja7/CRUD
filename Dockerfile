#Sample Dockerfile for NodeJS Apps

FROM node:18

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .    

ENV PARSE_APP_ID="9cdcb662-aaf2-4979-a92a-2dc854c62f7e"
ENV PARSE_JS_KEY="12345"
ENV PARSE_SERVER_URL="https://myapp-wk8rvkc8.b4a.run/"

EXPOSE 3010

CMD [ "node", "index.js" ]