"use client";

export function SolanaBeachWebsite() {
  return (
    <div className="my-4 sm:my-8">
      <iframe 
        src="https://solanabeach.io/" 
        width="100%" 
        height="500px"
        className="border border-gray-200 rounded-lg shadow-sm w-full h-[400px] sm:h-[500px] md:h-[600px]"
        title="Solana Beach Website"
      />
    </div>
  );
}
