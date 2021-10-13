const path = require('path');

export const projectName = 'SlideshowService';

export const paths = {
  root: path.join(__dirname, '../'),
  src: path.join(__dirname, '../src'),
  libs: path.join(__dirname, '../libs'),
  docs: path.join(__dirname, '../docs'),
  resolve: (location) => {
    return path.join(__dirname, '..', location)
  },
};
