import baseConfig from "../../../tsup.config";
import { defineConfig } from 'tsup'

export default defineConfig({
  ...baseConfig,
  entry: ['src/index.ts'], 
})