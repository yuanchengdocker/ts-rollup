import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import jsonP from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import { version } from './package.json'

const plugins = [
  terser({ compress: { drop_console: true } }),
  resolve({
    preferBuiltins: true,
    mainFields: ['browser']
  }),
  commonJs(),
  jsonP(),
  typescript({
    exclude: 'node_modules/**',
    typescript: require('typescript')
  })
]

export default {
  input: 'src/index.ts',
  output: [
    {
      file: `dist/miniwan@${version}.min.js.js`,
      format: 'umd'
    }
  ],
  plugins
}
