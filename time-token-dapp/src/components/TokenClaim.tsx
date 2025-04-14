import { useState } from 'react';
import { ethers } from 'ethers';

interface TokenClaimProps {
  address: string;
}

const TokenClaim = ({ address }: TokenClaimProps) => {
  const [isClaiming, setIsClaiming] = useState(false);
  const [lastClaimTime, setLastClaimTime] = useState<number | null>(null);

  const claimTokens = async () => {
    try {
      setIsClaiming(true);
      
      // TODO: 스마트 컨트랙트와 상호작용하여 토큰 클레임
      // const provider = new ethers.BrowserProvider(window.ethereum);
      // const signer = await provider.getSigner();
      // const contract = new ethers.Contract(contractAddress, abi, signer);
      // await contract.claimTokens();
      
      setLastClaimTime(Date.now());
      alert('토큰이 성공적으로 클레임되었습니다!');
    } catch (error) {
      console.error('토큰 클레임 중 오류 발생:', error);
      alert('토큰 클레임에 실패했습니다.');
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>토큰 클레임</h2>
      <p>연결된 주소: {address}</p>
      <button
        onClick={claimTokens}
        disabled={isClaiming}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        {isClaiming ? '클레임 중...' : '토큰 받기'}
      </button>
      {lastClaimTime && (
        <p style={{ marginTop: '10px' }}>
          마지막 클레임 시간: {new Date(lastClaimTime).toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default TokenClaim; 