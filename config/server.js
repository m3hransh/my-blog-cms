module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // socket: '/tmp/nginx.socket', // only use if absolutely required
  // emitErrors: false,
  url: env('PUBLIC_URL', 'https://mehranshahidi.ir/cms'),
  // proxy: env.bool('IS_PROXIED', true),
  // cron: {
  //   enabled: env.bool('CRON_ENABLED', false),
  // },
  admin: {
    auth: {
      events: {
        onConnectionSuccess(e) {
          console.log(e.user, e.provider);
        },
        onConnectionError(e) {
          console.error(e.error, e.provider);
        },
      },
      secret: env('ADMIN_JWT_SECRET', 'someSecretKey'),
    },
    // url: env('PUBLIC_ADMIN_URL', '/dashboard'),
    // autoOpen: false,
    // watchIgnoreFiles: [
    //   './my-custom-folder', // Folder
    //   './scripts/someScript.sh', // File
    // ],
    // host: 'localhost', // Only used for --watch-admin
    // port: 8003, // Only used for --watch-admin
    // serveAdminPanel: env.bool('SERVE_ADMIN', true),
    // forgotPassword: {
    //   from: 'no-reply@example.com',
    //   replyTo: 'no-reply@example.com',
    // },
  },
});
