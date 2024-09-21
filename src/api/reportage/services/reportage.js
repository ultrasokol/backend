'use strict';

/**
 * reportage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reportage.reportage');
