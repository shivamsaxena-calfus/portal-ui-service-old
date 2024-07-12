#!/bin/sh

echo "Starting portal-ui-service"

pm2 start npm --name portal-ui-service --watch --ignore-watch node_modules -- run start

echo "Starting nginx"

# Replace forward slashes with escaped forward slashes
export _AUTH_SERVICE_URL=$(echo "$AUTH_SERVICE_URL" | sed 's/\//\\\//g')
sed -i "s/__AUTH_SERVICE_URL__/$_AUTH_SERVICE_URL/g" /etc/nginx/nginx.conf

export _CUSTOMER_SERVICE_URL=$(echo "$CUSTOMER_SERVICE_URL" | sed 's/\//\\\//g')
sed -i "s/__CUSTOMER_SERVICE_URL__/$_CUSTOMER_SERVICE_URL/g" /etc/nginx/nginx.conf

export _PRODUCT_SERVICE_URL=$(echo "$PRODUCT_SERVICE_URL" | sed 's/\//\\\//g')
sed -i "s/__PRODUCT_SERVICE_URL__/$_PRODUCT_SERVICE_URL/g" /etc/nginx/nginx.conf



nginx -g "daemon off;"

