export interface Vitals {
    /** Is the internal relay closed (power is flowing to the cable) */
    contactor_closed: boolean;

    /** Is a vehicle physically plugged in  */
    vehicle_connected: boolean;

    /** Duration of the current active charging session in seconds */
    session_s: number;

    /** Incoming grid voltage (V) */
    grid_v: number;

    /** Incoming grid frequency (Hz) */
    grid_hz: number;

    /** Total current currently being drawn by the vehicle (A) */
    vehicle_current_a: number;

    /** Current measured on Phase A (A) */
    currentA_a: number;

    /** Current measured on Phase B (A) */
    currentB_a: number;

    /** Current measured on Phase C (A) */
    currentC_a: number;

    /** Current measured on Neutral wire (A) */
    currentN_a: number;

    /** Voltage measured on Phase A (V) */
    voltageA_v: number;

    /** Voltage measured on Phase B (V) */
    voltageB_v: number;

    /** Voltage measured on Phase C (V) */
    voltageC_v: number;

    /** Voltage drop/status across internal relay K1 */
    relay_k1_v: number;

    /** Voltage drop/status across internal relay K2 */
    relay_k2_v: number;

    /** Main logic board (PCBA) temperature in °C */
    pcba_temp_c: number;

    /** Charging handle sensor temperature in °C (critical for safety) */
    handle_temp_c: number;

    /** Microcontroller (MCU) temperature in °C */
    mcu_temp_c: number;

    /** Total time since the unit was last booted (seconds) */
    uptime_s: number;

    /** Micro-voltage reading from the input thermopile for heat detection */
    input_thermopile_uv: number;

    /** Proximity pilot voltage (detects if the button is pressed/plugged in) */
    prox_v: number;

    /** Control Pilot high-state voltage (PWM signal for charging speed) */
    pilot_high_v: number;

    /** Control Pilot low-state voltage (used for error detection) */
    pilot_low_v: number;

    /** Total energy delivered during the current session (Wh) */
    session_energy_wh: number;

    /** Internal configuration state bitmask */
    config_status: number;

    /** Current charging state (e.g., 0: Booting, 1: Ready, 2: Charging) */
    evse_state: number;

    /** Array of active hardware or software alerts */
    current_alerts: string[];

    /** List of codes explaining why the unit is not allowing a charge */
    evse_not_ready_reasons: number[];
}
