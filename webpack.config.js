// for JetBrains IDE
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './assets/script'),
    },
  }
};
