require('dotenv').config()

const withOffline = require('next-offline')

const nextConfig = {
  ...
}

module.exports = {
  env: {
    API_KEY: process.env.API_KEY
  },
  withOffline(nextConfig)
};