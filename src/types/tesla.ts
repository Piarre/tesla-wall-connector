const ENDPOINTS = ["vitals", "wifi_status", "lifetime", "version"] as const;

type Endpoint = (typeof ENDPOINTS)[number];

export { ENDPOINTS, type Endpoint };
