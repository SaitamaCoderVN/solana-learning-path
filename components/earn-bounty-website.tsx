"use client";

export function EarnBountyWebsite() {
  return (
    <div className="my-4 sm:my-8 p-4 sm:p-6 border border-gray-200 rounded-lg bg-gray-50">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Earn Bounties</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
        Complete tasks and earn rewards on Superteam's bounty platform.
      </p>
      <a 
        href="https://earn.superteam.fun/listing/emerald-card-travel" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
      >
        Visit Earn Platform →
      </a>
    </div>
  );
}
