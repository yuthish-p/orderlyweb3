import { TradingPage, OrderlyAppProvider } from "@orderly.network/react";
import { ConnectorProvider } from "@orderly.network/web3-onboard";
import { useRouter } from 'next/navigation';
import '@orderly.network/react/dist/styles.css';
 
export default function Trading({ params }: { params: { symbol: string } }) {
  return (
    <ConnectorProvider
      apiKey="<Your web3-onboard's api key>"
      options={`<options>`}
    >
      <OrderlyAppProvider
        networkId="testnet"
        brokerId="<Your broker id>"
        brokerName="<Your name>"
        appIcons={...}
      >
        <TradingPage
          symbol={params.symbol}
          tradingViewConfig={`tradingView config`}
          onSymbolChange={`onSymbolChange handler`}
        />
      </OrderlyAppProvider>
    </ConnectorProvider>
  );
}