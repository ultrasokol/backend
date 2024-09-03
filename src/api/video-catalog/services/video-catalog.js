'use strict';

/**
 * video-catalog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::video-catalog.video-catalog');
