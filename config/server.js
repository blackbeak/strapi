module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://strapi-production-74db.up.railway.app/'), // ✅ Add this line
  
  app: {
    keys: env.array("APP_KEYS"),
  },
});
