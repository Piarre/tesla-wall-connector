# Tesla Wall Connector API

> ⚠️ **Work in Progress** - API not finalized

A lightweight and performant TypeScript library to interact with the local Tesla Wall Connector API.

## 🚀 Features

- ✅ Strict IPv4 address validation with Zod
- ✅ Full TypeScript support with detailed types
- ✅ Simple and intuitive API
- 📊 Access to real-time charging data
- 🔌 Query available endpoints:
  - `vitals` - Real-time charging statistics
  - `wifi_status` - WiFi connection status
  - `lifetime` - Charger lifetime statistics
  - `version` - Firmware version information

## 📦 Installation

```bash
npm install tesla-wall-connector
# ou
bun add tesla-wall-connector
# ou
yarn add tesla-wall-connector
```

## 🔧 Usage

### Basic Example

```typescript
import { getWallConnector } from "tesla-wall-connector";

// Fetch vital statistics
const vitals = await getWallConnector("192.168.0.13", "vitals");
console.log(vitals);

// Fetch lifetime statistics
const lifetime = await getWallConnector("192.168.0.13", "lifetime");
console.log(lifetime);

// Fetch WiFi status
const wifiStatus = await getWallConnector("192.168.0.13", "wifi_status");
console.log(wifiStatus);

// Fetch firmware version
const version = await getWallConnector("192.168.0.13", "version");
console.log(version);
```

## 📋 API

### `getWallConnector(ip: string, endpoint: Endpoint)`

Fetches data from a specific Wall Connector endpoint.

**Parameters:**
- `ip` (string) - The Wall Connector IPv4 address (e.g., "192.168.0.13")
- `endpoint` (Endpoint) - The endpoint to query (`"vitals"`, `"wifi_status"`, `"lifetime"`, or `"version"`)

**Returns:** `Promise<Response>` - The data from the requested endpoint

**Errors:**
- Throws an error if the IP address is invalid
- Throws an error if the HTTP request fails

## 🔍 Available Types

### Vitals

Vital data includes:

- **Connection Status:**
  - `contactor_closed` - Internal relay closed (power flowing)
  - `vehicle_connected` - Vehicle physically plugged in
  
- **Charging Session:**
  - `session_s` - Current session duration (seconds)
  - `vehicle_current_a` - Total current drawn by vehicle (A)
  
- **Electrical Measurements:**
  - `grid_v` - Incoming voltage (V)
  - `grid_hz` - Grid frequency (Hz)
  - `currentA_a`, `currentB_a`, `currentC_a` - Current per phase (A)
  - `voltageA_v`, `voltageB_v`, `voltageC_v` - Voltage per phase (V)
  - `currentN_a` - Neutral current (A)
  - `relay_k1_v`, `relay_k2_v` - Relay voltage drop

## 🛠️ Development

### Prerequisites

- [Bun](https://bun.sh/) v1.0 or higher
- Node.js 16+ (optional)

### Install Dependencies

```bash
bun install
```

### Available Scripts

```bash
# Build the project
bun run build

# Development mode with watch
bun run dev

# TypeScript type checking
bun run type-check

# Lint/format with Biome
bunx biome check .
bunx biome check --write .
```

### Test Locally

```bash
cd tests
bun run ./index.ts
```

## 📁 Project Structure

```
tesla-wall-connector/
├── src/
│   ├── index.ts           # Main entry point
│   ├── lib/
│   │   ├── index.ts       # Public exports
│   │   ├── fetcher.ts     # HTTP request logic
│   │   ├── schema.ts      # Zod validation schemas
│   │   └── tesla.ts       # WallConnector class (WIP)
│   └── types/
│       ├── index.ts       # Type exports
│       └── tesla.ts       # TypeScript types for API
├── tests/
│   └── index.ts           # Manual tests
├── biome.json             # Biome configuration
├── package.json
├── tsconfig.json
└── README.md
```

## 🔐 Security

- The Wall Connector API is only accessible on the local network
- No authentication is required for local endpoints
- Ensure your Wall Connector is not exposed to the Internet

## 📝 Roadmap

- [ ] Finalize `WallConnector` class with helper methods
- [ ] Add Zod validation schemas for responses
- [ ] Implement SSID decoding
- [ ] Automated unit tests
- [ ] Complete documentation of return types
- [ ] More granular error handling
- [ ] Support for multi-Wall Connector configurations

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or pull request.

## ⚡ Note

This project uses [Bun](https://bun.sh/) for blazing-fast builds and an excellent developer experience. It remains compatible with Node.js and other JavaScript runtimes.

## 🔗 Resources

- [Tesla Wall Connector User Guide](https://www.tesla.com/support/gen-3-wall-connector)
- [API Documentation](https://tesla-info.com/guide/wall-connector-api.php) (Unofficial)
