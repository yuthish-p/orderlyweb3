import { useWeb3Modal } from '@web3modal/wagmi/react'

export default function Page() {

    const { open } = useWeb3Modal()

    return (
      <>
        <button onClick={() => open()}>Open Connect Modal</button>
        <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
      </>
    )

}