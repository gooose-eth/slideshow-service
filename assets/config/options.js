const path = require('path');

export const fileName = 'main';

export const paths = {
  root: path.join(__dirname, '../'),
  dist: path.join(__dirname, '../dist'),
  resolve: (location) => {
    return path.join(__dirname, '..', location)
  },
};
