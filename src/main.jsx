import '@mysten/dapp-kit/dist/index.css';
import { createRoot } from 'react-dom/client';

import App from './App';
import { StrictMode } from 'react';
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const networks = {
	localnet: { url: getFullnodeUrl('localnet') },
	devnet: { url: getFullnodeUrl('devnet') },
	testnet: { url: getFullnodeUrl('testnet') },
	mainnet: { url: getFullnodeUrl('mainnet') },
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
	  <QueryClientProvider client={queryClient}>
		  <SuiClientProvider networks={networks} defaultNetwork="devnet">
			  <WalletProvider>
				  <App />
		  	</WalletProvider>
		  </SuiClientProvider>
	  </QueryClientProvider>
  </StrictMode>
);