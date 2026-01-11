import type { Endpoint, Lifetime, Version, Vitals, WifiStatus } from "../types";

const fetcher = <T extends Vitals | Lifetime | Version | WifiStatus>(
    ip: string,
    endpoint: Endpoint,
): Promise<T> => {
    return fetch(`http://${ip}/api/1/${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json() as Promise<T>)
        .catch((error) => {
            throw new Error(`❌ ~ error on call http://${ip}/api/1/${endpoint}`, {
                cause: error,
            });
        });
};

export { fetcher };
