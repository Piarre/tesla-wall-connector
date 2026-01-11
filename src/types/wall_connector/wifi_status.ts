export interface WifiStatus {
    /** Base64 encoded Wi-Fi name */
    wifi_ssid: string;

    /** Signal strength percentage (0-100%) */
    wifi_signal_strength: number;

    /** Received Signal Strength Indicator in dBm (higher is better) */
    wifi_rssi: number;

    /** Signal-to-Noise Ratio in dB */
    wifi_snr: number;

    /** Is the device connected to Wi-Fi */
    wifi_connected: boolean;

    /** Local IPv4 address */
    wifi_infra_ip: string;

    /** Connectivity status to Tesla's backend servers */
    internet: boolean;

    /** Physical MAC address */
    wifi_mac: string;
}
