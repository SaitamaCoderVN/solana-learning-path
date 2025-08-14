"use client";

export function EarnBountyWebsite() {
  return (
    <div className="my-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-4">Earn Bounties</h3>
      <p className="text-gray-600 mb-4">
        Complete tasks and earn rewards on Superteam's bounty platform.
      </p>
      <a 
        href="https://earn.superteam.fun/listing/emerald-card-travel" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Visit Earn Platform →
      </a>
    </div>
  );
}
