"use client";

export function FaucetWebsite() {
  return (
    <div className="my-8">
      <iframe 
        src="https://faucet.solana.com/" 
        width="100%" 
        height="600px"
        className="border border-gray-200 rounded-lg shadow-sm"
        title="Solana Faucet Website"
      />
    </div>
  );
}
