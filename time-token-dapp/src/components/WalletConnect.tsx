import { useState } from 'react';
import { ethers } from 'ethers';

interface WalletConnectProps {
  onConnect: (address: string) => void;
}

const WalletConnect = ({ onConnect }: WalletConnectProps) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      
      // Kaia 지갑 연결
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const address = accounts[0];
        onConnect(address);
      } else {
        alert('Kaia 지갑이 설치되어 있지 않습니다.');
      }
    } catch (error) {
      console.error('지갑 연결 중 오류 발생:', error);
      alert('지갑 연결에 실패했습니다.');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <button 
      onClick={connectWallet}
      disabled={isConnecting}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {isConnecting ? '연결 중...' : '지갑 연결'}
    </button>
  );
};

export default WalletConnect; 