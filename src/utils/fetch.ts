import { ApiRoute } from '@/config/constants';

const cache = new Map<string, unknown>();

export async function fetchData<T>(route: ApiRoute): Promise<T> {
  if (cache.has(route)) {
    return cache.get(route) as Promise<T>;
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${route}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${route}`);
  }

  const data = await response.json();
  cache.set(route, data);
  return data;
}
