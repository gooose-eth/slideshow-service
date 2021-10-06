import { paths } from './options';

export default {
  input: `${paths.assets}/foo.js`,
  output: {
    file: `${paths.output}/foo.umd.js`,
    name: 'FOOO',
    format: 'umd',
  },
}
