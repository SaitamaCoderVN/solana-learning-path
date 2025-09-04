export interface BountyItem {
  id: string
  title: string
  reward: string
  deadline: string
}

export interface BountyConfig {
  phase: 'Phase 1' | 'Phase 2' | 'Phase 3'
  requiredBounties: number
  bountyLink: string
  description: string
  isActive: boolean
  lastUpdated: string
  bounties: BountyItem[]
}

export const bountyConfig: BountyConfig[] = [
  {
    phase: 'Phase 1',
    requiredBounties: 3,
    bountyLink: 'https://earn.superteam.fun/',
    description: 'Complete 3 bounties related to Solana basics, wallet creation, and devnet interactions',
    isActive: true,
    lastUpdated: '2025-01-15',
    bounties: [
      {
        id: 'phase1-bounty-1',
        title: 'Create Your First Solana Wallet',
        reward: '50 USDC',
        deadline: '2025-02-15'
      },
      {
        id: 'phase1-bounty-2',
        title: 'Connect to Solana Devnet',
        reward: '30 USDC',
        deadline: '2025-02-20'
      },
      {
        id: 'phase1-bounty-3',
        title: 'Build a Transaction Explorer',
        reward: '75 USDC',
        deadline: '2025-02-25'
      },
    ]
  },
  {
    phase: 'Phase 2', 
    requiredBounties: 4,
    bountyLink: 'https://earn.superteam.fun/',
    description: 'Complete 4 bounties related to Solana development, smart contracts, and dApp building',
    isActive: true,
    lastUpdated: '2025-01-15',
    bounties: [
      {
        id: 'phase2-bounty-1',
        title: 'Todo dApp with Anchor',
        reward: '150 USDC',
        deadline: '2025-03-15'
      },
      {
        id: 'phase2-bounty-2',
        title: 'Wall of Wishes dApp',
        reward: '120 USDC',
        deadline: '2025-03-20'
      },
      {
        id: 'phase2-bounty-3',
        title: 'PDA Counter Program',
        reward: '200 USDC',
        deadline: '2025-03-25'
      },
      {
        id: 'phase2-bounty-4',
        title: 'Cross-Program Invocation Demo',
        reward: '180 USDC',
        deadline: '2025-03-30'
      }
    ]
  },
  {
    phase: 'Phase 3',
    requiredBounties: 5,
    bountyLink: 'https://earn.superteam.fun/',
    description: 'Complete 5 bounties related to advanced Solana concepts, vaults, and escrow systems',
    isActive: true,
    lastUpdated: '2025-01-15',
    bounties: [
      {
        id: 'phase3-bounty-1',
        title: 'Token Portfolio Dashboard',
        reward: '125 USDC',
        deadline: '2025-04-15'
      },
      {
        id: 'phase3-bounty-2',
        title: 'Multi-Signature Vault',
        reward: '250 USDC',
        deadline: '2025-04-20'
      },
      {
        id: 'phase3-bounty-3',
        title: 'Escrow Trading System',
        reward: '300 USDC',
        deadline: '2025-04-25'
      },
      {
        id: 'phase3-bounty-4',
        title: 'Governance DAO System',
        reward: '400 USDC',
        deadline: '2025-04-30'
      },
      {
        id: 'phase3-bounty-5',
        title: 'Cross-Chain Bridge Protocol',
        reward: '500 USDC',
        deadline: '2025-05-05'
      }
    ]
  }
]

// Helper function to get bounty config for a specific phase
export function getBountyConfig(phase: 'Phase 1' | 'Phase 2' | 'Phase 3'): BountyConfig | undefined {
  return bountyConfig.find(config => config.phase === phase)
}

// Helper function to get all active bounty configs
export function getActiveBountyConfigs(): BountyConfig[] {
  return bountyConfig.filter(config => config.isActive)
}

// Helper function to get total required bounties across all phases
export function getTotalRequiredBounties(): number {
  return bountyConfig
    .filter(config => config.isActive)
    .reduce((total, config) => total + config.requiredBounties, 0)
}
