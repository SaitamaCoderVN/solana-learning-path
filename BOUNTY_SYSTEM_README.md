# Simple Bounty System

A clean and simple bounty management system for the Solana Learning Path website.

## Overview

The bounty system displays coding assignments and rewards for each learning phase in a simple, easy-to-manage format.

### 1. Configuration File: `lib/bounty-config.ts`
The central configuration file that manages all bounty data and settings.

### 2. Integration Location: Interactive Tab
The bounty system is integrated into the **Interactive** tab of each phase, replacing the simple `EarnBountyWebsite` component.

#### Structure:
```typescript
export interface BountyItem {
  id: string                    // Unique identifier
  title: string                 // Bounty title
  reward: string               // Reward amount (e.g., "50 USDC")
  deadline: string             // Deadline date (e.g., "2024-02-15")
}

export interface BountyConfig {
  phase: 'Phase 1' | 'Phase 2' | 'Phase 3'
  requiredBounties: number    // Required bounties to complete phase
  bountyLink: string          // Link to bounty platform
  description: string         // Phase description
  isActive: boolean          // Whether phase is active
  lastUpdated: string         // Last update date
  bounties: BountyItem[]      // Array of bounties for this phase
}
```

### 3. UI Components

#### `BountySection` - Main Bounty Display (Interactive Tab)
- **Simple wrapper**: Just passes phase to SimpleBounties
- **Location**: Interactive tab of each phase

#### `SimpleBounties` - Complete Bounty Display
- **Phase Header**: Shows phase name and requirements
- **Bounties List**: Simple list of all bounties
- **Each Bounty Shows**:
  - **Number**: #1, #2, #3, etc.
  - **Title**: Bounty name
  - **Reward**: Amount in USDC with dollar icon
  - **Deadline**: Due date with calendar icon
  - **View Button**: Opens external platform
- **External Link**: Button to visit all bounties

## How to Access Bounties

### Navigation
1. Go to any phase page (Phase 1, 2, or 3)
2. Click on the **Interactive** tab
3. View all bounties for that phase
4. Click "View" on any bounty to open external platform

## How to Manage Bounties

### Adding New Bounties
1. Open `lib/bounty-config.ts`
2. Find the appropriate phase section
3. Add new bounty object to the `bounties` array:

```typescript
{
  id: 'phase1-bounty-5',
  title: 'Your New Bounty Title',
  reward: '75 USDC',
  deadline: '2024-03-15'
}
```

### Updating Existing Bounties
1. Find the bounty by ID in the configuration
2. Update any fields as needed
3. Update `lastUpdated` date

### Changing Phase Requirements
1. Update `requiredBounties` for the phase
2. Update `description` if needed
3. Update `lastUpdated` date

## Sample Data

### Phase 1 (4 bounties)
- Create Your First Solana Wallet - 50 USDC - 2024-02-15
- Connect to Solana Devnet - 30 USDC - 2024-02-20
- Build a Transaction Explorer - 75 USDC - 2024-02-25
- SPL Token Manager - 100 USDC - 2024-02-28

### Phase 2 (4 bounties)
- Todo dApp with Anchor - 150 USDC - 2024-03-15
- Wall of Wishes dApp - 120 USDC - 2024-03-20
- PDA Counter Program - 200 USDC - 2024-03-25
- Cross-Program Invocation Demo - 180 USDC - 2024-03-30

### Phase 3 (5 bounties)
- Token Portfolio Dashboard - 125 USDC - 2024-04-15
- Multi-Signature Vault - 250 USDC - 2024-04-20
- Escrow Trading System - 300 USDC - 2024-04-25
- Governance DAO System - 400 USDC - 2024-04-30
- Cross-Chain Bridge Protocol - 500 USDC - 2024-05-05

## Features

- **Phase-based Organization**: Bounties grouped by learning phases
- **Required Bounties**: Each phase has a specific number of required bounties
- **External Integration**: Links to Superteam's bounty platform
- **Simple Design**: Clean, minimal interface with just essential info
- **Easy Management**: Boss can edit one file to update all bounties
- **No Complex UI**: No filters, search, or complex interactions

## File Structure

```
lib/
  bounty-config.ts          # Main configuration file
components/
  bounty-section.tsx        # Simple wrapper component
  simple-bounties.tsx       # Main bounty display component
content/docs/
  solana-basic.mdx         # Phase 1 with bounty integration
  coding-with-solana.mdx   # Phase 2 with bounty integration
  ready-for-internship.mdx # Phase 3 with bounty integration
```

## Usage

The bounty system is automatically integrated into each phase's Interactive tab. No additional setup required - just edit the configuration file to manage bounties.

## Benefits

- **Simple**: Only 3 pieces of information per bounty
- **Clean**: Minimal UI without complex features
- **Fast**: Lightweight components load quickly
- **Manageable**: Easy for boss to update via GitHub
- **Focused**: Users see only what they need