FROM registry.access.redhat.com/ubi9/nodejs-18:1-59.1690899127 AS builder
COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .
COPY ./webpack.config.js .
RUN npm ci
COPY src/ ./src
RUN npm run build

FROM registry.access.redhat.com/ubi9/nodejs-18-minimal:1-63
COPY --from=builder /opt/app-root/src/node_modules ./node_modules
COPY --from=builder /opt/app-root/src/dist/ .
CMD ["node", "app.js"]