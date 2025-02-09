module.exports = ({ env }) => ({
    "users-permission": {
      jwtSecret: process.env.JWT_SECRET,
    },
  });
  