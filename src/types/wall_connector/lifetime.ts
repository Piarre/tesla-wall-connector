export interface Lifetime {
    /** Total number of times the internal relay (contactor) has opened or closed */
    contactor_cycles: number;

    /** Number of contactor cycles performed while a high electrical load was present */
    contactor_cycles_loaded: number;

    /** Total number of alerts or error events recorded since installation */
    alert_count: number;

    /** * Number of times the charger reduced output power due to overheating
     * (Self-protection mechanism)
     */
    thermal_foldbacks: number;

    /** Average temperature of the unit at the start of charging sessions (°C) */
    avg_startup_temp: number;

    /** Total number of charging sessions initiated */
    charge_starts: number;

    /** Cumulative energy delivered by the unit in Watt-hours (Wh) */
    energy_wh: number;

    /** Total number of times the charging handle has been plugged into a vehicle */
    connector_cycles: number;

    /** Total cumulative operating time of the unit in seconds */
    uptime_s: number;

    /** Total cumulative time spent actively charging a vehicle in seconds */
    charging_time_s: number;
}
