const cache = new Map<string, unknown>();

export function fetchData<T>(url: string): Promise<T> {
  if (cache.has(url)) {
    return cache.get(url) as Promise<T>;
  }

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }
      const data = response.json();
      cache.set(url, data);
      return data;
    });
}
