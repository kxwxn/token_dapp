import { useState } from 'react'
import './App.css'
import WalletConnect from './components/WalletConnect'
import TokenClaim from './components/TokenClaim'

function App() {
  const [address, setAddress] = useState<string>('')

  const handleConnect = (connectedAddress: string) => {
    setAddress(connectedAddress)
  }

  return (
    <div className="App">
      <h1>시간 기반 토큰 DApp</h1>
      {!address ? (
        <WalletConnect onConnect={handleConnect} />
      ) : (
        <TokenClaim address={address} />
      )}
    </div>
  )
}

export default App
