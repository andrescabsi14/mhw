This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Environment Setup

1. Create a `.env.local` file in the root directory
2. Add the following environment variables:

First, run the development server:

```bash
NEXT_PUBLIC_INFURA_ID=your_infura_id_here
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id_here
```


To get these values:
- Get an Infura ID by signing up at [Infura](https://infura.io)
- Get a WalletConnect Project ID at [WalletConnect Cloud](https://cloud.walletconnect.com)

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- MetaMask Integration
- WalletConnect Support
- Hardware Wallet Support (via WalletConnect)
- Trust Wallet Support

## Supported Wallets

- MetaMask (Browser Extension)
- Trust Wallet (Mobile)
- Hardware Wallets (via WalletConnect):
  - Ledger
  - Trezor
  - And others

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
