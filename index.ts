import type { Context } from '@deepseek-ai/cordis'
import { Acryl } from 'acrylblends'

export const name = 'sh1121-ana'
export const inject = ['router']

export function apply(ctx: Context): void {
  const app = new Acryl().get('/', (c) => c.json({ text: 'hello from Ana, v0.1.1' }))
  ctx.router.route('/sh1121-ana', app)
}
