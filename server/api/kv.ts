export default defineEventHandler(async (event) => {
  const { key, value } = await readBody(event);

  const KV = event.context.cloudflare.env.KV;

  if (value) {
    await KV.put(key, value);
    return new Response('OK');
  } else {
    const result = await KV.get(key);
    return new Response(result)
  }
});
