import { SWRConfig } from 'swr'
import { OrderlyAppProvider } from "@orderly.network/react";

 
export default function Trading() {
  return (
    <OrderlyAppProvider
        networkId="testnet"
        brokerId="woofi_dex"
        brokerName="woofi dex" >
        
    </OrderlyAppProvider>
  );
}