'use client';

import { useState } from 'react';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';

export default function WalletConnect() {
  const [account, setAccount] = useState<string>('');
  const [connected, setConnected] = useState<boolean>(false);
  const [activeWallet, setActiveWallet] = useState<string>('');

  const connectWalletConnect = async () => {
    try {
      const provider = new WalletConnectProvider({
        infuraId: process.env.NEXT_PUBLIC_INFURA_ID, // You'll need to add this to your .env
        qrcodeModalOptions: {
          mobileLinks: ['trust'], // This will prioritize Trust Wallet mobile app
        },
      });

      await provider.enable();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const accounts = await web3Provider.listAccounts();
      
      setAccount(accounts[0]);
      setConnected(true);
      setActiveWallet('WalletConnect');

      // Subscribe to events
      provider.on('accountsChanged', (accounts: string[]) => {
        setAccount(accounts[0]);
      });

      provider.on('disconnect', () => {
        setAccount('');
        setConnected(false);
        setActiveWallet('');
      });

    } catch (error) {
      console.error('Error connecting with WalletConnect:', error);
    }
  };

  const connectMetaMask = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        
        setAccount(accounts[0]);
        setConnected(true);
        setActiveWallet('MetaMask');
        
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        window.ethereum.on('accountsChanged', function (accounts: string[]) {
          setAccount(accounts[0]);
        });

        window.ethereum.on('disconnect', function () {
          setAccount('');
          setConnected(false);
          setActiveWallet('');
        });
      } else {
        alert('Please install MetaMask!');
      }
    } catch (error) {
      console.error('Error connecting with MetaMask:', error);
    }
  };

  return (
    <div className="p-4">
      {!connected ? (
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Connect Wallet</h2>
          <button
            onClick={connectMetaMask}
            className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
          >
            Connect with MetaMask
          </button>
          <button
            onClick={connectWalletConnect}
            className="block w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Connect with WalletConnect
            <span className="text-sm block">(Recommended for hardware wallets)</span>
          </button>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-lg mb-2">Connected Account:</p>
          <p className="font-mono text-sm mb-4 text-blue-400">{account}</p>
          <p className="text-green-400">Connected via {activeWallet} ✅</p>
        </div>
      )}
    </div>
  );
} 