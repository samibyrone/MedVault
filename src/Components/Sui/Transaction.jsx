import { SuiClient, SuiTransactionBlockResponse } from '@mysten/sui.js/client';

const client = new SuiClient({ url: getFullnodeUrl('testnet') });

export async function signTransaction(userAddress, zkProof) {
  const tx = new SuiTransactionBlockResponse({
    sender: userAddress,
    gasBudget: 1000,
  });
  
  //zkProof the transaction
  tx.setProof(zkProof);
  
  const result = await client.signAndExecuteTransactionBlock({
    transactionBlock: tx,
    signer: userAddress,
  });
  
  return result;
}