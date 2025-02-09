---
title: Configuring thge Strapi DB
description: A self-hosted version of Strapi using a Postgres database
tags:
  - strapi
  - postgresql
  - cms
  - javascript
---

# Strapi schema changes

Just change the config directory to > config_prod
Then change the config_local directory to config

This will allow you to run yarn develop.
Make your schema changes after logging into Strapi. 
Close the active console
Then simply do the git changes

IT Should work without changing the data as we're using postgres and cloudinary.
However you can also follow the steps outlined here to back up the postgres DB if you think its good.
https://blog.railway.app/p/postgre-backup