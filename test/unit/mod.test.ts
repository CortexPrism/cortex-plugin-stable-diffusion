import { assertEquals } from 'https://deno.land/std@0.208.0/assert/mod.ts';
import { tools } from '../../mod.ts';
import type { PluginContext } from 'cortex/plugins';
const ctx: PluginContext = {
  pluginId: 'cortex-plugin-stable-diffusion',
  pluginDir: '/tmp',
  state: { get: async () => null, set: async () => {} },
  config: {},
  logger: { info: () => {}, warn: () => {}, error: () => {}, debug: () => {} },
};
for (const t of tools) {
  Deno.test(t.definition.name + ' — returns success', async () => {
    const r = await t.execute({}, ctx);
    assertEquals(r.success, true);
  });
}
Deno.test('tools array', () => {
  assertEquals(tools.length, 4);
});
