import path from 'path';
import dotenv from 'dotenv';

// set dot env
dotenv.config();

export default {
  mount: {
    assets: '/assets',
  },
  buildOptions: {
    out: 'build',
    baseUrl: './',
    clean: true,
    metaUrlPath: '_snowpack',
  },
  plugins: [],
};
