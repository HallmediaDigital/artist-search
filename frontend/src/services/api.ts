export async function apiRequest<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw Error("...");
  }

  const data = await response.json();

  return data;
}
