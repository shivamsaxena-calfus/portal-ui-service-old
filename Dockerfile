FROM public.ecr.aws/nginx/nginx:stable-alpine
RUN apk update && \
    apk upgrade --no-cache --purge && \
    apk add --no-cache npm nodejs yarn && \
    rm -vrf /var/cache/apk/* 

WORKDIR /app

COPY ./southwire-ui .
COPY nginx.conf /etc/nginx/nginx.conf
COPY entrypoint.sh .

RUN npm i -g next@latest && \
    npm i -g pm2@latest && \
    npm install && \
    npm run build && \
    chmod +x entrypoint.sh

EXPOSE 80

ENTRYPOINT [ "./entrypoint.sh" ]
