require("dotenv").config();

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [...config.plugins];

    return config;
  },
};
