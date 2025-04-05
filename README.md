# Tapo Camera Node.js Client

A TypeScript/Node.js client for controlling Tapo cameras. Based on [pytapo](https://github.com/JurajNyiri/pytapo).

## Features

- Full TypeScript support
- Secure connection handling
- Comprehensive camera control API
- Event monitoring
- Video quality management
- LED control
- Privacy mode management
- Motor control for PTZ cameras
- SD card status
- Time and timezone management

## Installation

```bash
npm install tapo-camera-client
```

## Usage

```typescript
import { TapoCamera } from 'tapo-camera-client';

const camera = new TapoCamera({
    host: 'camera-ip',
    user: 'your-username',
    password: 'your-password'
});

await camera.init();

// Get LED status
const ledStatus = await camera.getLED();
console.log('LED Status:', ledStatus);

// Control camera movement (PTZ)
await camera.moveMotor(10, 20);

// Get privacy mode status
const privacyMode = await camera.getPrivacyMode();
console.log('Privacy Mode:', privacyMode);
```

## API Documentation

### Constructor Options

```typescript
{
    host: string;           // Camera IP address
    user: string;          // Username
    password: string;      // Password
    childID?: string;      // Optional child device ID
    reuseSession?: boolean; // Reuse session (default: true)
    printDebugInformation?: boolean; // Print debug info (default: false)
    controlPort?: number;  // Control port (default: 443)
    retryStok?: boolean;  // Retry authentication (default: true)
}
```

### Available Methods

- `init()`: Initialize the camera connection
- `getLED()`: Get LED status
- `setLEDEnabled(enabled: boolean)`: Set LED status
- `getPrivacyMode()`: Get privacy mode status
- `setPrivacyMode(enabled: boolean)`: Set privacy mode
- `moveMotor(x: number, y: number)`: Move camera to specific coordinates
- `getEvents()`: Get camera events
- `getVideoQualities()`: Get available video qualities
- `getSDCard()`: Get SD card information
- And many more...

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Test
npm test

# Lint
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
