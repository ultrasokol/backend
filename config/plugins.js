module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: '@_sh/strapi-provider-upload-timeweb-s3',
        providerOptions: {
          key: env('TWS3_ACCESS_KEY'),
          secret: env('TWS3_SECRET_KEY'),
          endpoint: env('TWS3_ENDPOINT'),
          directory: env('TWS3_DIRECTORY'),
          region: env('TWS3_REGION'),
          bucket: env('TWS3_BUCKET'),
          domain: env('TWS3_DOMAIN'),
          sizeLimit: 1000000, // Здесь указывается лимит на размер файла в байтах
        }
      },
    }
  });