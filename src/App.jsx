import { useState } from 'react'
import './App.css'
import { ConnectButton } from '@mysten/dapp-kit'

function App() {

  const account = useCurrentAccount()

  return (
    <div>
      <nav>
        <ConnectButton/>
      </nav>
      <section>{account ? "No wallet connecter" : `Your address is ${account.address}`}</section>
    </div>
  );
}


export function OwnedObjects() {
	const account = useCurrentAccount()!;
	const { data } = useSuiClientQuery('getOwnedObjects', { owner: account.address });

	return (
		<ul>
			{data.data.map((object) => (
				<li key={object.data?.objectId}>{object.data?.objectId}</li>
			))}
		</ul>
	);
}

export default App
