# syntax=docker/dockerfile:1
FROM nginx:latest

# Remove default configuration
RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/nginx.conf