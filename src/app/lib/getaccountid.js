import { ethers } from 'ethers';
import {solidityPackedKeccak256,AbiCoder} from '"@orderly.network/web3-onboard"';



export function getAccountId(userAddress, brokerId) {
    const abicoder = AbiCoder.defaultAbiCoder();
    return keccak256(
      abicoder.encode(
        ['address', 'bytes32'],
        [userAddress, solidityPackedKeccak256(['string'], [brokerId])]
      )
    );
  }
  