
import { ethers } from 'ethers';


interface ApiResponse {
  data: string; 
}


// check the A/C 
export async function checkAcc(address:String,brokerID:String): Promise<void> {
  const options: RequestInit = { method: 'GET' };

  try {
    const response = await fetch(`https://api-evm.orderly.org/v1/get_account?address=${address}&broker_id=${brokerID}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData: ApiResponse = await response.json();
    console.log(responseData);
  } catch (err) {
    console.error(err);
  }
}

//Get Registration Nonce

export async function getRegistrationNonce(): Promise<void> {
  const options: RequestInit = { method: 'GET' };

  try {
    const response = await fetch(`https://testnet-api-evm.orderly.network/v1/registration_nonce`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData: ApiResponse = await response.json();
    console.log(responseData);
  } catch (err) {
    console.error(err);
  }
}



const MESSAGE_TYPES = {
  EIP712Domain: [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    { name: 'chainId', type: 'uint256' },
    { name: 'verifyingContract', type: 'address' }
  ],
  Registration: [
    { name: 'brokerId', type: 'string' },
    { name: 'chainId', type: 'uint256' },
    { name: 'timestamp', type: 'uint64' },
    { name: 'registrationNonce', type: 'uint256' }
  ]
};

const OFF_CHAIN_DOMAIN = {
  name: 'Orderly',
  version: '1',
  chainId: 421613,
  verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
};

const BASE_URL = 'https://testnet-api-evm.orderly.org';
const BROKER_ID = 'woofi_dex';
const CHAIN_ID = 421613;



export async function registerAccount(): Promise<void> {
  const privatekey ="04ec45a186fb8f823c734e9a936810392fd4d04f33cb2bdbb6e2c17ff262b951";
  const wallet = new ethers.Wallet(privatekey);

  const nonceRes = await fetch(`${BASE_URL}/v1/registration_nonce`);
  const nonceJson = await nonceRes.json();
  var registrationNonce = nonceJson.data.registration_nonce as String;

  //console.log(nonceJson);

  //console.log("registrationNonce",registrationNonce)

  
  registrationNonce= "167299131485"
  
  

  const registerMessage = {
    brokerId: BROKER_ID,
    chainId: CHAIN_ID,
    timestamp: Date.now(),
    registrationNonce
  };

  //console.log("registerMessage-->",registerMessage)

  const signature = await wallet._signTypedData(
    OFF_CHAIN_DOMAIN,
    {
      Registration: MESSAGE_TYPES.Registration
    },
    registerMessage
  );

  const registerRes = await fetch(`${BASE_URL}/v1/register_account`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: registerMessage,
      signature,
      userAddress: await wallet.getAddress()
    })
  });
  const registerJson = await registerRes.json();
  console.log(registerJson)
  if (!registerJson.success) {
    throw new Error(registerJson.message);
  }
  const orderlyAccountId = registerJson.data.account_id;
  console.log('orderlyAccountId', registerJson);
}



