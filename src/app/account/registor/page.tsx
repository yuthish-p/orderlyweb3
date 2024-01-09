import { registerAccount,getRegistrationNonce } from '/home/yuthish7812/project1/orderly/ordery-trade/src/app/lib/reg.ts';

export default function Page() {


    // getRegistrationNonce()
    console.log(registerAccount())
    
    return <p>registor home Page</p>;
}

