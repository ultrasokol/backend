module.exports = [
  // Добавляем CORS настройки здесь
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://dkireeeo.beget.tech/'], // Ваш домен
    },
  },
  
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];