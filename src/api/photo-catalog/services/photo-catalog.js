'use strict';

/**
 * photo-catalog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::photo-catalog.photo-catalog');
