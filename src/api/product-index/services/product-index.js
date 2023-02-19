'use strict';

/**
 * product-index service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-index.product-index');
