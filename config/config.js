require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPasword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  mailFrom: process.env.MAIL_FROM,
  mailUser: process.env.MAIL_USER,
  mailPass: process.env.MAIL_PASS,
  mailHost: process.env.MAIL_HOST,
  mailPort: process.env.MAIL_PORT,
  mailSecure: process.env.MAIL_SECURE,
  mailTestFrom: process.env.MAIL_TEST_FROM,
  mailTestUser: process.env.MAIL_TEST_USER,
  mailTestPass: process.env.MAIL_TEST_PASS,
  mailTestHost: process.env.MAIL_TEST_HOST,
  mailTestPort: process.env.MAIL_TEST_PORT,
  mailTestSecure: process.env.MAIL_TEST_SECURE
}

module.exports = { config };
