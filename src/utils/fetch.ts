import { type Advocate } from "@/types";

const cache = new Map<string, unknown>();

export async function fetchData<T>(url: string): Promise<T> {
  if (cache.has(url)) {
    return cache.get(url) as T;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  const data = await response.json();
  cache.set(url, data);
  return data;
}
