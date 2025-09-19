FROM php:8.2-apache

# Dépendances build pour extensions
RUN apt-get update && apt-get install -y     libzip-dev unzip zip     libjpeg62-turbo-dev  libpng-dev libfreetype6-dev \ 
    libicu-dev     libyaml-dev     libssl-dev     libzstd-dev zlib1g-dev     libmemcached-dev  && rm -rf /var/lib/apt/lists/*

# Core PHP extensions
RUN docker-php-ext-install zip intl exif opcache

# GD avec JPEG/PNG/Freetype
RUN docker-php-ext-configure gd --with-jpeg --with-freetype  && docker-php-ext-install gd

# PECL: apcu, yaml, redis, memcached
RUN pecl install apcu yaml redis memcached  && docker-php-ext-enable apcu yaml redis memcached

# Apache
RUN a2enmod rewrite
COPY apache.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /application/testadri.com/grav
