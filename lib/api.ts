// lib/api.ts
type FetchOptions = {
  cache?: RequestCache; // "default" | "force-cache" | "no-store"
  revalidate?: number; // ISR: revalidate seconds
  headers?: Record<string, string>;
};

export async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  try {
    const { cache, revalidate, headers } = options;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`,
      {
        // default → force-cache (SSG)
        cache: cache ?? "force-cache",
        // إذا عطينا revalidate نستعمل ISR
        next: revalidate ? { revalidate } : undefined,
        headers,
      },
    );

    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);

    const json = await res.json();
    if (json.status !== "success")
      throw new Error(json.message || "Unknown error");

    return json.data as T;
  } catch (error) {
    console.error(`❌ Error in fetchAPI(${endpoint}):`, error);
    throw error;
  }
}

// ---- Specific Wrappers ---- //

export async function getCars(options?: FetchOptions) {
  return fetchAPI<any[]>("cars", options);
}

export async function getGallery(options?: FetchOptions) {
  return fetchAPI<any[]>("gallery", options);
}

export async function getTravelPacks(options?: FetchOptions) {
  return fetchAPI<any[]>("travel-packs", options);
}

export async function getAbout(options?: FetchOptions) {
  return fetchAPI<any>("about", options);
}

export async function getContact(options?: FetchOptions) {
  return fetchAPI<any>("contact", options);
}

export async function getHome(options?: FetchOptions) {
  return fetchAPI<any>("home", options);
}
