# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2024-03-XX

### Added
- Initial project setup with Next.js 15 and React 19
- Basic wallet connection functionality
  - MetaMask integration with account detection and events
  - WalletConnect support for hardware wallets
  - Trust Wallet mobile support
- Environment variable setup for Infura and WalletConnect
- Responsive UI components with Tailwind CSS
- Dark mode support (see globals.css)
- TypeScript support and type definitions for Ethereum window object

### Features
- Automatic account detection and updates
- Disconnect handling
- Mobile-responsive design
- Hardware wallet support through WalletConnect
- Custom fonts using Geist and Geist Mono

### Technical Details
- Using ethers.js v5.7.2 for Web3 interactions
- WalletConnect v1.8.0 integration
- Full TypeScript support
- Tailwind CSS for styling
- ESLint configuration for code quality
- Environment variable protection via .gitignore

### Dependencies
Referenced from package.json: 