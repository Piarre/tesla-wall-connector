import type { Lifetime, Version, Vitals, WifiStatus } from "../types";
import { fetcher } from "./fetcher";
import { ipSchema } from "./schema";

class WallConnector {
    ip: string;

    constructor(ip: string) {
        if (!ipSchema.safeParse(ip).success) {
            throw new Error(`❌ ~ Invalid IPv4 address: ${ip}`);
        }

        this.ip = ip;
    }

    async vitals(): Promise<Vitals> {
        return fetcher<Vitals>(this.ip, "vitals");
    }

    async lifetime(): Promise<Lifetime> {
        return fetcher<Lifetime>(this.ip, "lifetime");
    }

    async version(): Promise<Version> {
        return fetcher<Version>(this.ip, "version");
    }

    async wifiStatus(): Promise<WifiStatus> {
        return fetcher<WifiStatus>(this.ip, "wifi_status");
    }

    async decodedSSID(): Promise<string | null> {
        const wifiRequest = await this.wifiStatus();

        if (!wifiRequest.wifi_ssid) {
            return null;
        }

        return Buffer.from(wifiRequest.wifi_ssid, "base64").toString("utf-8");
    }
}

export { WallConnector };
