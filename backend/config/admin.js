module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '04919290e471135560d984671e8d1c8e'),
  },
});
