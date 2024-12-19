import { Config } from 'tailwindcss'
import { YoruTailwind } from './plugin'

const yoruTW = new YoruTailwind()
const plugin = yoruTW.plugin

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin
  ],
} satisfies Config