let configPromise: Promise<string> | null = null;

export async function getApiBaseUrl(): Promise<string> {
  if (!configPromise) {
    configPromise = fetch("/config.json")
      .then((res) => res.json())
      .then((config) => config.API_BASE_URL);
  }
  return configPromise;
}