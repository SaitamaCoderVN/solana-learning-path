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

// Import the JSON data
import bountyData from './bounty-config.json'

// Export the bounty config from JSON
export const bountyConfig: BountyConfig[] = bountyData as BountyConfig[]

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
