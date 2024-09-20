module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'strapi.io', 'dl.airtable.com', 's3.timeweb.cloud'],
          'media-src': ["'self'", 'data:', 'blob:', 'strapi.io', 'dl.airtable.com', 's3.timeweb.cloud'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      multipart: true, // Позволяет загружать файлы
      formidable: {
        maxFileSize: 100 * 1024 * 1024, // Установите нужный вам размер (например, 100 МБ)
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];