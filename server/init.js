export let evt;
export let body;
export let env;

export async function setupResource(_evt)
{
  evt = _evt;
  body = await useBody(evt);
  env = useRuntimeConfig(evt);
}

export function useResource()
{
  return {
    evt,
    body,
    env,
  };
}
