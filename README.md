# Vapi Browser-Ready SDK

A minimal browser-ready wrapper for the Vapi Web SDK that exposes the core functionality without any UI components.

## Overview

This package provides a barebone browser-ready version of the [Vapi Web SDK](https://github.com/VapiAI/web) that can be loaded directly via a script tag. Unlike the official HTML script tag implementation, this version:

- Contains **no UI components** or floating buttons
- Exposes the **full SDK functionality** with all methods and event handlers
- Gives you **complete control** over your implementation

## Installation

### CDN

Include the SDK directly in your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/GeneralKugelBlitz/vapi-browser-ready-sdk@latest/dist/vapi-browser-ready.js"></script>
```

### Local Build

1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Use the built file from the `dist` directory

## Basic Usage

After including the script, the SDK is available as a global `Vapi` constructor:

```html
<script>
  // Initialize the SDK with your API key
  const vapi = new Vapi('YOUR_API_KEY');
  
  // Set up event listeners
  vapi.on('call-start', () => console.log('Call started'));
  vapi.on('call-end', () => console.log('Call ended'));
  vapi.on('speech-start', () => console.log('Assistant is speaking'));
  vapi.on('speech-end', () => console.log('Assistant stopped speaking'));
  vapi.on('message', (message) => console.log('Message:', message));
  vapi.on('error', (error) => console.error('Error:', error));
  
  // Start a call with an assistant
  async function startCall() {
    await vapi.start('YOUR_ASSISTANT_ID');
    console.log('Call started!');
  }
  
  // Stop a call
  function stopCall() {
    vapi.stop();
    console.log('Call stopped!');
  }
  
  // Toggle mute
  function toggleMute() {
    const isMuted = vapi.isMuted();
    vapi.setMuted(!isMuted);
    console.log(`Microphone ${!isMuted ? 'muted' : 'unmuted'}`);
  }
</script>
```

## Examples

Check out the examples directory for complete implementation examples:

- `example/minimal-example.html` - Basic implementation showing all core functions

## Available Methods

The SDK exposes all methods from the core Vapi SDK:

- `vapi.start(assistant)` - Start a call with an assistant or squad
- `vapi.stop()` - Stop an active call
- `vapi.send(message)` - Send a message during a call
- `vapi.setMuted(boolean)` - Mute or unmute the microphone
- `vapi.isMuted()` - Check if the microphone is muted
- `vapi.say(message, endCallAfterSpoken)` - Make the assistant speak
- And more...

## Event Handling

The SDK provides these events:

- `call-start` - Fired when a call starts
- `call-end` - Fired when a call ends
- `speech-start` - Fired when the assistant starts speaking
- `speech-end` - Fired when the assistant stops speaking
- `volume-level` - Fired with audio volume updates
- `message` - Fired when a message is received
- `error` - Fired when an error occurs

## License

Same as the core Vapi SDK
