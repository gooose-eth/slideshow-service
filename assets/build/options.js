const path = require('path');

export const paths = {
  root: path.join(__dirname, '../../'),
  assets: path.join(__dirname, '../'),
  output: path.join(__dirname, '../dist'),
  resolve: (location) => {
    return path.join(__dirname, '..', location)
  },
};
