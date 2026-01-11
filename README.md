# Tesla Wall Connector API
TypeScript library to interact with the Tesla Wall Connector local API.

## Installation

```bash
npm install @kepa/tesla-wall-connector
```

## Usage

```typescript
import { getWallConnector } from "@kepa/tesla-wall-connector";

const vitals = await getWallConnector("192.168.0.13", "vitals");
const lifetime = await getWallConnector("192.168.0.13", "lifetime");
const wifiStatus = await getWallConnector("192.168.0.13", "wifi_status");
const version = await getWallConnector("192.168.0.13", "version");
```

## API

### `getWallConnector(ip, endpoint)`

- **ip**: IPv4 address of your Wall Connector
- **endpoint**: `"vitals"` | `"wifi_status"` | `"lifetime"` | `"version"`

## Development

```bash
bun install
bun run build
bun run dev
```

## License

MIT
