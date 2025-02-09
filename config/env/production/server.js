module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env("https://jacksonstrapi-b14c.onrender.com/"),
  app: {
    keys: env.array('APP_KEYS', ['Mfa83K7FxCgd8yW7EjKQ2Jn5spv1bZ5W']),
  },
  dirs: {
    public: "./public"
  },
  });
