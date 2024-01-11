import { OrderlyConfigProvider } from "@orderly.network/hooks";
import { WalletConnectProvider } from "../../lib/connectwallet";



export default function Page() {
  return (
    <OrderlyConfigProvider brokerId="woofi_dex" networkId="testnet">
      <WalletConnectProvider>
        <div className="container">
          wallet
        </div>
      </WalletConnectProvider>
    </OrderlyConfigProvider>
  );
}

