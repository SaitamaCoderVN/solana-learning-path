import { Question } from './practice-questions-phase1'

export const phase3PracticeQuestions: Question[] = [
  // Token List Display (25 questions)
  {
    id: 1,
    category: 'Token List Display',
    difficulty: 'easy',
    question: 'What is the main purpose of displaying a wallet\'s token list?',
    options: [
      'To store tokens',
      'To show all tokens owned by a wallet',
      'To mine new tokens',
      'To validate transactions'
    ],
    correctAnswer: 1,
    explanation: 'Displaying a wallet\'s token list shows all tokens owned by that wallet, helping users understand their holdings.'
  },
  {
    id: 2,
    category: 'Token List Display',
    difficulty: 'medium',
    question: 'What is an SPL token in Solana?',
    options: [
      'A type of wallet',
      'A token created using the SPL Token program',
      'A network fee',
      'A validator node'
    ],
    correctAnswer: 1,
    explanation: 'An SPL token is a token created using the SPL Token program, which is Solana\'s standard for creating and managing tokens.'
  },
  {
    id: 3,
    category: 'Token List Display',
    difficulty: 'easy',
    question: 'What is the purpose of a token account in Solana?',
    options: [
      'To store the actual tokens',
      'To display the interface',
      'To manage user accounts',
      'To validate transactions'
    ],
    correctAnswer: 0,
    explanation: 'A token account stores the actual tokens and their metadata, separate from the main wallet account.'
  },
  {
    id: 4,
    category: 'Token List Display',
    difficulty: 'medium',
    question: 'How do you fetch all token accounts for a wallet in JavaScript?',
    options: [
      'connection.getTokenAccountsByOwner(owner)',
      'connection.getAccounts(owner)',
      'connection.getTokens(owner)',
      'connection.getTokenList(owner)'
    ],
    correctAnswer: 0,
    explanation: 'connection.getTokenAccountsByOwner(owner) returns all token accounts owned by a specific wallet address.'
  },
  {
    id: 5,
    category: 'Token List Display',
    difficulty: 'easy',
    question: 'What is token metadata in Solana?',
    options: [
      'The token\'s private key',
      'Information about the token (name, symbol, decimals)',
      'The token\'s balance',
      'The token\'s owner'
    ],
    correctAnswer: 1,
    explanation: 'Token metadata includes information about the token such as name, symbol, decimals, and other descriptive data.'
  },
  {
    id: 6,
    category: 'Token List Display',
    difficulty: 'medium',
    question: 'What is the purpose of token decimals in Solana?',
    options: [
      'To store data',
      'To determine the smallest unit of the token',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Token decimals determine the smallest unit of the token, affecting how balances are displayed and calculated.'
  },
  {
    id: 7,
    category: 'Token List Display',
    difficulty: 'easy',
    question: 'What is the purpose of a mint account in Solana?',
    options: [
      'To store tokens',
      'To define token properties and supply',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'A mint account defines token properties and supply, serving as the source of truth for token information.'
  },
  {
    id: 8,
    category: 'Token List Display',
    difficulty: 'medium',
    question: 'How do you get token account balance in JavaScript?',
    options: [
      'connection.getTokenAccountBalance(account)',
      'connection.getBalance(account)',
      'connection.getTokenBalance(account)',
      'connection.getAccountBalance(account)'
    ],
    correctAnswer: 0,
    explanation: 'connection.getTokenAccountBalance(account) returns the balance of a specific token account.'
  },
  {
    id: 9,
    category: 'Token List Display',
    difficulty: 'easy',
    question: 'What is the purpose of filtering tokens in a wallet display?',
    options: [
      'To store data',
      'To help users find specific tokens',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Filtering tokens helps users find specific tokens by criteria like name, symbol, or balance.'
  },
  {
    id: 10,
    category: 'Token List Display',
    difficulty: 'medium',
    question: 'What is the purpose of sorting tokens in a wallet display?',
    options: [
      'To store data',
      'To organize tokens in a meaningful order',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Sorting tokens organizes them in a meaningful order, such as by balance, name, or recent activity.'
  },

  // Anchor Vault (25 questions)
  {
    id: 11,
    category: 'Anchor Vault',
    difficulty: 'easy',
    question: 'What is the main purpose of a vault in Solana?',
    options: [
      'To store cryptocurrency securely',
      'To display the interface',
      'To manage user accounts',
      'To validate transactions'
    ],
    correctAnswer: 0,
    explanation: 'A vault stores cryptocurrency securely, often with additional security features like multi-signature requirements.'
  },
  {
    id: 12,
    category: 'Anchor Vault',
    difficulty: 'medium',
    question: 'What is multi-signature security in a vault?',
    options: [
      'Multiple passwords',
      'Requiring multiple private keys to approve transactions',
      'Multiple accounts',
      'Multiple networks'
    ],
    correctAnswer: 1,
    explanation: 'Multi-signature security requires multiple private keys to approve transactions, providing enhanced security.'
  },
  {
    id: 13,
    category: 'Anchor Vault',
    difficulty: 'easy',
    question: 'What is the purpose of time locks in a vault?',
    options: [
      'To store data',
      'To delay transaction execution for security',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Time locks delay transaction execution for security, allowing time for review or cancellation of suspicious transactions.'
  },
  {
    id: 14,
    category: 'Anchor Vault',
    difficulty: 'medium',
    question: 'What is the purpose of emergency functions in a vault?',
    options: [
      'To store data',
      'To provide immediate access in critical situations',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Emergency functions provide immediate access to vault funds in critical situations, bypassing normal security measures.'
  },
  {
    id: 15,
    category: 'Anchor Vault',
    difficulty: 'easy',
    question: 'What is the purpose of withdrawal mechanisms in a vault?',
    options: [
      'To store data',
      'To allow users to remove funds from the vault',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Withdrawal mechanisms allow users to remove funds from the vault according to the vault\'s security rules.'
  },
  {
    id: 16,
    category: 'Anchor Vault',
    difficulty: 'medium',
    question: 'What is the purpose of deposit mechanisms in a vault?',
    options: [
      'To store data',
      'To allow users to add funds to the vault',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Deposit mechanisms allow users to add funds to the vault, often with validation and security checks.'
  },
  {
    id: 17,
    category: 'Anchor Vault',
    difficulty: 'easy',
    question: 'What is the purpose of access control in a vault?',
    options: [
      'To store data',
      'To control who can access vault functions',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Access control determines who can access various vault functions, ensuring only authorized users can perform actions.'
  },
  {
    id: 18,
    category: 'Anchor Vault',
    difficulty: 'medium',
    question: 'What is the purpose of audit trails in a vault?',
    options: [
      'To store data',
      'To track all vault activities for security',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Audit trails track all vault activities, providing transparency and security monitoring.'
  },
  {
    id: 19,
    category: 'Anchor Vault',
    difficulty: 'easy',
    question: 'What is the purpose of vault configuration in Solana?',
    options: [
      'To store data',
      'To set vault parameters and security rules',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Vault configuration sets parameters and security rules, defining how the vault operates and who can access it.'
  },
  {
    id: 20,
    category: 'Anchor Vault',
    difficulty: 'medium',
    question: 'What is the purpose of vault recovery mechanisms?',
    options: [
      'To store data',
      'To restore access when normal methods fail',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Vault recovery mechanisms restore access to vault funds when normal access methods fail or are compromised.'
  },

  // Anchor Escrow (25 questions)
  {
    id: 21,
    category: 'Anchor Escrow',
    difficulty: 'easy',
    question: 'What is the main purpose of an escrow in Solana?',
    options: [
      'To store cryptocurrency temporarily',
      'To hold funds until conditions are met',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'An escrow holds funds temporarily until specific conditions are met, providing security for transactions between parties.'
  },
  {
    id: 22,
    category: 'Anchor Escrow',
    difficulty: 'medium',
    question: 'What is the purpose of escrow logic in Solana?',
    options: [
      'To store data',
      'To define when and how funds are released',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Escrow logic defines the conditions and mechanisms for when and how funds are released from the escrow.'
  },
  {
    id: 23,
    category: 'Anchor Escrow',
    difficulty: 'easy',
    question: 'What is the purpose of token deposits in an escrow?',
    options: [
      'To store data',
      'To place tokens into the escrow for safekeeping',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Token deposits place tokens into the escrow for safekeeping until the escrow conditions are met.'
  },
  {
    id: 24,
    category: 'Anchor Escrow',
    difficulty: 'medium',
    question: 'What is the purpose of release mechanisms in an escrow?',
    options: [
      'To store data',
      'To transfer funds to the intended recipient',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Release mechanisms transfer funds from the escrow to the intended recipient when conditions are met.'
  },
  {
    id: 25,
    category: 'Anchor Escrow',
    difficulty: 'easy',
    question: 'What is the purpose of dispute resolution in an escrow?',
    options: [
      'To store data',
      'To handle conflicts between parties',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Dispute resolution handles conflicts between parties when there are disagreements about escrow conditions.'
  },
  {
    id: 26,
    category: 'Anchor Escrow',
    difficulty: 'medium',
    question: 'What is the purpose of timeouts in an escrow?',
    options: [
      'To store data',
      'To automatically resolve escrow after a period',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Timeouts automatically resolve escrow after a specified period, preventing funds from being locked indefinitely.'
  },
  {
    id: 27,
    category: 'Anchor Escrow',
    difficulty: 'easy',
    question: 'What is the purpose of escrow conditions in Solana?',
    options: [
      'To store data',
      'To define when funds can be released',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Escrow conditions define the specific requirements that must be met before funds can be released from the escrow.'
  },
  {
    id: 28,
    category: 'Anchor Escrow',
    difficulty: 'medium',
    question: 'What is the purpose of escrow validation in Solana?',
    options: [
      'To store data',
      'To ensure escrow operations are valid and safe',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Escrow validation ensures that all escrow operations are valid and safe, preventing errors and security issues.'
  },
  {
    id: 29,
    category: 'Anchor Escrow',
    difficulty: 'easy',
    question: 'What is the purpose of escrow testing in Solana?',
    options: [
      'To store data',
      'To ensure the escrow program works correctly',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Escrow testing ensures the escrow program works correctly by verifying all functionality operates as expected.'
  },
  {
    id: 30,
    category: 'Anchor Escrow',
    difficulty: 'medium',
    question: 'What is the purpose of escrow documentation in Solana?',
    options: [
      'To store data',
      'To explain how the escrow works and how to use it',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Escrow documentation explains how the escrow works and how to use it, making it easier for developers to understand and maintain.'
  }
]
