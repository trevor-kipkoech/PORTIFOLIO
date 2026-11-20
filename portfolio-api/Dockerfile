FROM serversideup/php:8.4-fpm-nginx

USER root
COPY . /var/www/html
WORKDIR /var/www/html

RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader \
    && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

ENV WEBROOT=/var/www/html/public
ENV PHP_ERRORS_STDERR=1