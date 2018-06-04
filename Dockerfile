FROM nginx

COPY static-files /usr/share/nginx/html
COPY index.html /usr/share/nginx/html


