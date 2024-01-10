import { useWalletConnector } from "./connectwallet";

export const WalletButton = () => {
  const wallet = useWalletConnector();
  return (
    <button
      onClick={() => {
        wallet.connect();
      }}
    >
      Wallet connect
    </button>
  );
};
