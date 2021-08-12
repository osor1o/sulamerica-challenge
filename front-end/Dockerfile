FROM node:14-alpine AS build

ENV REACT_APP_API_URL=http://localhost:8081
ENV CI=true

WORKDIR /home

COPY . .

RUN npm ci && \
  npm run test && \
  npm run build && \
  npm run build-storybook

FROM nginx:1.18.0-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /home/build /var/www/build
COPY --from=build /home/storybook-static /var/www/storybook-static
