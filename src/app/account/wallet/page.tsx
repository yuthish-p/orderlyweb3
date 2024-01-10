import { OrderlyConfigProvider } from "@orderly.network/hooks";
import "./style.css";
import { WalletConnectProvider } from "/home/yuthish7812/project1/orderly/ordery-trade/src/app/lib/connectwallet.tsx";
import { wallet } from '../../../../../../sniperbot/raydium-sdk-V1-demo/config';

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

