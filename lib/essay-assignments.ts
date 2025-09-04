export interface EssayAssignment {
  id: string
  title: string
  description: string
  phase: 'Phase 1' | 'Phase 2' | 'Phase 3'
  category: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedTime: string
  githubRepo: string
  githubIssues: string[]
  requirements: string[]
  learningObjectives: string[]
  submissionDeadline?: string
  participants: number
  stars: number
  forks: number
  lastUpdated: string
}

export const essayAssignments: EssayAssignment[] = [
  // Phase 1 - Solana Basic
  {
    id: 'phase1-1',
    title: 'Create & Transact with Wallet using JavaScript',
    description: 'Build a JavaScript application that can create Solana wallets, generate keypairs, and perform basic SOL transactions. This project covers fundamental wallet operations and transaction handling.',
    phase: 'Phase 1',
    category: 'Wallet Development',
    difficulty: 'Beginner',
    estimatedTime: '2-3 days',
    githubRepo: 'https://github.com/solana-labs/example-helloworld',
    githubIssues: [
      'https://github.com/solana-labs/example-helloworld/issues/1',
      'https://github.com/solana-labs/example-helloworld/issues/2'
    ],
    requirements: [
      'Create new Solana wallet using JavaScript',
      'Generate and display keypairs',
      'Display wallet balance',
      'Send SOL transactions',
      'Handle transaction confirmation',
      'Implement proper error handling'
    ],
    learningObjectives: [
      'Understand Solana account model',
      'Learn keypair generation and management',
      'Master basic transaction creation',
      'Implement proper error handling',
      'Use Solana Web3.js library'
    ],
    participants: 156,
    stars: 89,
    forks: 34,
    lastUpdated: '2024-01-15'
  },
  // Phase 2 - Coding with Solana
  {
    id: 'phase2-1',
    title: 'On-chain Todo App Program + UI',
    description: 'Build a complete todo application with Solana smart contract and web interface. This project covers program development, state management, and frontend integration.',
    phase: 'Phase 2',
    category: 'Full-Stack DApp',
    difficulty: 'Intermediate',
    estimatedTime: '1-2 weeks',
    githubRepo: 'https://github.com/coral-xyz/anchor',
    githubIssues: [
      'https://github.com/coral-xyz/anchor/issues/2001',
      'https://github.com/coral-xyz/anchor/issues/2002'
    ],
    requirements: [
      'Create Anchor program for todo management',
      'Implement CRUD operations for todos',
      'Build React/Next.js frontend',
      'Connect frontend to program',
      'Handle program state updates',
      'Add comprehensive testing'
    ],
    learningObjectives: [
      'Master Anchor framework',
      'Learn program state management',
      'Implement CRUD operations',
      'Build frontend integration',
      'Master testing strategies'
    ],
    participants: 145,
    stars: 234,
    forks: 89,
    lastUpdated: '2024-01-22'
  },
  {
    id: 'phase2-2',
    title: 'Wall of Wish',
    description: 'Create a decentralized wish wall where users can post and view wishes. This project teaches social dApp development and user interaction.',
    phase: 'Phase 2',
    category: 'Social DApp',
    difficulty: 'Intermediate',
    estimatedTime: '1-2 weeks',
    githubRepo: 'https://github.com/metaplex-foundation/metaplex',
    githubIssues: [
      'https://github.com/metaplex-foundation/metaplex/issues/3001',
      'https://github.com/metaplex-foundation/metaplex/issues/3002'
    ],
    requirements: [
      'Create wish posting program',
      'Implement wish viewing system',
      'Add user authentication',
      'Build responsive UI',
      'Handle program interactions',
      'Add moderation features'
    ],
    learningObjectives: [
      'Learn social dApp design',
      'Implement user interactions',
      'Master program interactions',
      'Build responsive interfaces',
      'Handle user-generated content'
    ],
    participants: 189,
    stars: 312,
    forks: 123,
    lastUpdated: '2024-01-25'
  },
  {
    id: 'phase2-3',
    title: 'PDA Counter Program',
    description: 'Build a counter program using Program Derived Addresses (PDA). This project teaches advanced Solana concepts and PDA implementation.',
    phase: 'Phase 2',
    category: 'Advanced Programs',
    difficulty: 'Advanced',
    estimatedTime: '1 week',
    githubRepo: 'https://github.com/solana-labs/solana-program-library',
    githubIssues: [
      'https://github.com/solana-labs/solana-program-library/issues/4001',
      'https://github.com/solana-labs/solana-program-library/issues/4002'
    ],
    requirements: [
      'Implement PDA counter logic',
      'Create deterministic addresses',
      'Handle counter increments',
      'Add counter resets',
      'Implement proper validation',
      'Add comprehensive testing'
    ],
    learningObjectives: [
      'Master PDA concepts',
      'Learn deterministic addressing',
      'Implement counter logic',
      'Master validation patterns',
      'Understand program security'
    ],
    participants: 67,
    stars: 89,
    forks: 34,
    lastUpdated: '2024-01-28'
  },

  // Phase 3 - Ready for Internship
  {
    id: 'phase3-1',
    title: 'Display Token List of a Wallet',
    description: 'Create an application that displays all SPL tokens held by a Solana wallet. This project covers token account management and data display.',
    phase: 'Phase 3',
    category: 'Token Management',
    difficulty: 'Intermediate',
    estimatedTime: '1-2 weeks',
    githubRepo: 'https://github.com/solana-labs/solana-program-library',
    githubIssues: [
      'https://github.com/solana-labs/solana-program-library/issues/5001',
      'https://github.com/solana-labs/solana-program-library/issues/5002'
    ],
    requirements: [
      'Connect to Solana network',
      'Fetch wallet token accounts',
      'Display token balances',
      'Show token metadata',
      'Handle multiple tokens',
      'Implement search/filter'
    ],
    learningObjectives: [
      'Master token account queries',
      'Learn metadata handling',
      'Implement data display',
      'Handle multiple accounts',
      'Build user interfaces'
    ],
    participants: 89,
    stars: 156,
    forks: 67,
    lastUpdated: '2024-01-30'
  },
  {
    id: 'phase3-2',
    title: 'Anchor Vault',
    description: 'Build a secure vault program using Anchor framework. This project teaches advanced security patterns and vault management.',
    phase: 'Phase 3',
    category: 'Security & Vaults',
    difficulty: 'Advanced',
    estimatedTime: '2-3 weeks',
    githubRepo: 'https://github.com/solana-labs/solana-program-library',
    githubIssues: [
      'https://github.com/solana-labs/solana-program-library/issues/6001',
      'https://github.com/solana-labs/solana-program-library/issues/6002'
    ],
    requirements: [
      'Implement secure vault logic',
      'Add multi-signature support',
      'Create withdrawal mechanisms',
      'Implement time locks',
      'Add emergency functions',
      'Comprehensive security testing'
    ],
    learningObjectives: [
      'Master vault security',
      'Learn multi-signature patterns',
      'Implement time locks',
      'Master security testing',
      'Understand attack vectors'
    ],
    participants: 76,
    stars: 134,
    forks: 45,
    lastUpdated: '2024-02-01'
  },
  {
    id: 'phase3-3',
    title: 'Anchor Escrow',
    description: 'Create an escrow program for secure token exchanges. This project covers complex financial logic and escrow mechanisms.',
    phase: 'Phase 3',
    category: 'Financial Protocols',
    difficulty: 'Advanced',
    estimatedTime: '2-3 weeks',
    githubRepo: 'https://github.com/solana-labs/solana-program-library',
    githubIssues: [
      'https://github.com/solana-labs/solana-program-library/issues/7001',
      'https://github.com/solana-labs/solana-program-library/issues/7002'
    ],
    requirements: [
      'Implement escrow logic',
      'Handle token deposits',
      'Create release mechanisms',
      'Add dispute resolution',
      'Implement timeouts',
      'Add comprehensive testing'
    ],
    learningObjectives: [
      'Master escrow mechanisms',
      'Learn financial protocols',
      'Implement dispute resolution',
      'Master timeout handling',
      'Understand protocol security'
    ],
    participants: 45,
    stars: 89,
    forks: 23,
    lastUpdated: '2024-02-05'
  }
]
