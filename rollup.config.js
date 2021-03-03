import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import jsonP from '@rollup/plugin-json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/bundle.umd.js',
      format: 'umd'
    },
    {
      file: 'lib/bundle.esm.js',
      format: 'es'
    },
    {
      file: 'lib/bundle.cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [
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
}
