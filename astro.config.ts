import { defineConfig } from 'astro/config'
import auth from 'auth-astro'
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
	integrations: [auth()],
	output: 'server',
	adapter: cloudflare()
})
