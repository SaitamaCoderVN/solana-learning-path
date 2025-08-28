export interface Question {
  id: number
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export const phase1PracticeQuestions: Question[] = [
  // Wallet Creation & Management (25 questions)
  {
    id: 1,
    category: 'Wallet Creation',
    difficulty: 'easy',
    question: 'What is the primary purpose of a Solana wallet?',
    options: [
      'To store SOL tokens',
      'To manage keypairs and sign transactions',
      'To connect to the internet',
      'To mine new blocks'
    ],
    correctAnswer: 1,
    explanation: 'A Solana wallet primarily manages keypairs and signs transactions, allowing users to interact with the blockchain.'
  },
  {
    id: 2,
    category: 'Wallet Creation',
    difficulty: 'easy',
    question: 'How do you generate a new keypair in JavaScript using @solana/web3.js?',
    options: [
      'Keypair.generate()',
      'new Keypair()',
      'Keypair.create()',
      'Keypair.new()'
    ],
    correctAnswer: 0,
    explanation: 'Keypair.generate() creates a new random keypair in the @solana/web3.js library.'
  },
  {
    id: 3,
    category: 'Wallet Creation',
    difficulty: 'medium',
    question: 'What is the purpose of a seed phrase in Solana wallets?',
    options: [
      'To encrypt private keys',
      'To generate public addresses',
      'To recover private keys from backup',
      'To sign transactions'
    ],
    correctAnswer: 2,
    explanation: 'A seed phrase is used to recover private keys from backup, allowing wallet restoration.'
  },
  {
    id: 4,
    category: 'Wallet Creation',
    difficulty: 'easy',
    question: 'What is the relationship between a private key and public key in Solana?',
    options: [
      'They are the same',
      'Public key is derived from private key',
      'Private key is derived from public key',
      'They are unrelated'
    ],
    correctAnswer: 1,
    explanation: 'The public key is mathematically derived from the private key using elliptic curve cryptography.'
  },
  {
    id: 5,
    category: 'Wallet Creation',
    difficulty: 'medium',
    question: 'How do you create a keypair from a seed phrase in JavaScript?',
    options: [
      'Keypair.fromSeed(seed)',
      'Keypair.fromPhrase(phrase)',
      'Keypair.fromMnemonic(phrase)',
      'Keypair.fromSeedPhrase(phrase)'
    ],
    correctAnswer: 2,
    explanation: 'Keypair.fromMnemonic(phrase) creates a keypair from a seed phrase (mnemonic).'
  },
  {
    id: 6,
    category: 'Wallet Creation',
    difficulty: 'easy',
    question: 'What is the purpose of a keypair in Solana?',
    options: [
      'To store multiple keys',
      'To encrypt data',
      'To sign transactions and identify accounts',
      'To generate addresses'
    ],
    correctAnswer: 2,
    explanation: 'A keypair contains both private and public keys, where the private key signs transactions and the public key identifies accounts.'
  },
  {
    id: 7,
    category: 'Wallet Creation',
    difficulty: 'medium',
    question: 'How do you export a keypair to JSON format in JavaScript?',
    options: [
      'keypair.toJSON()',
      'keypair.export()',
      'keypair.toArray()',
      'keypair.serialize()'
    ],
    correctAnswer: 0,
    explanation: 'keypair.toJSON() exports the keypair to JSON format for storage or backup.'
  },
  {
    id: 8,
    category: 'Wallet Creation',
    difficulty: 'easy',
    question: 'What is the purpose of a wallet address in Solana?',
    options: [
      'To identify the wallet',
      'To encrypt transactions',
      'To store private keys',
      'To generate seed phrases'
    ],
    correctAnswer: 0,
    explanation: 'A wallet address (public key) is used to identify and receive funds to a specific wallet on the Solana network.'
  },
  {
    id: 9,
    category: 'Wallet Creation',
    difficulty: 'medium',
    question: 'How do you import a keypair from JSON in JavaScript?',
    options: [
      'Keypair.fromJSON(json)',
      'Keypair.import(json)',
      'Keypair.fromSecretKey(json)',
      'Keypair.fromArray(json)'
    ],
    correctAnswer: 0,
    explanation: 'Keypair.fromJSON(json) imports a keypair from JSON format.'
  },
  {
    id: 10,
    category: 'Wallet Creation',
    difficulty: 'easy',
    question: 'What is the purpose of a backup in Solana wallets?',
    options: [
      'To restore the wallet',
      'To increase security',
      'To reduce fees',
      'To speed up transactions'
    ],
    correctAnswer: 0,
    explanation: 'A backup (usually the seed phrase) allows users to restore their wallet and access their funds if the original wallet is lost or damaged.'
  },

  // Transaction Handling (25 questions)
  {
    id: 11,
    category: 'Transaction Handling',
    difficulty: 'easy',
    question: 'What is the purpose of a transaction in Solana?',
    options: [
      'To store data',
      'To execute instructions on the blockchain',
      'To create new accounts',
      'To mine blocks'
    ],
    correctAnswer: 1,
    explanation: 'A transaction executes instructions on the Solana blockchain, such as transferring SOL or calling programs.'
  },
  {
    id: 12,
    category: 'Transaction Handling',
    difficulty: 'medium',
    question: 'How do you create a new transaction in JavaScript?',
    options: [
      'new Transaction()',
      'Transaction.create()',
      'Transaction.new()',
      'Transaction.build()'
    ],
    correctAnswer: 0,
    explanation: 'new Transaction() creates a new empty transaction object in JavaScript.'
  },
  {
    id: 13,
    category: 'Transaction Handling',
    difficulty: 'easy',
    question: 'What is the purpose of a recent blockhash in Solana transactions?',
    options: [
      'To identify the latest block',
      'To prevent transaction replay',
      'To set transaction priority',
      'To reduce transaction fees'
    ],
    correctAnswer: 1,
    explanation: 'A recent blockhash prevents transaction replay attacks by ensuring each transaction can only be processed once.'
  },
  {
    id: 14,
    category: 'Transaction Handling',
    difficulty: 'medium',
    question: 'How do you add an instruction to a transaction in JavaScript?',
    options: [
      'transaction.add(instruction)',
      'transaction.append(instruction)',
      'transaction.include(instruction)',
      'transaction.insert(instruction)'
    ],
    correctAnswer: 0,
    explanation: 'transaction.add(instruction) adds an instruction to the transaction that will be executed when processed.'
  },
  {
    id: 15,
    category: 'Transaction Handling',
    difficulty: 'easy',
    question: 'What is the correct way to sign a transaction in JavaScript?',
    options: [
      'transaction.sign(signer)',
      'transaction.signWith(signer)',
      'transaction.addSignature(signer)',
      'transaction.signBy(signer)'
    ],
    correctAnswer: 0,
    explanation: 'transaction.sign(signer) signs the transaction with the specified keypair or signer.'
  },
  {
    id: 16,
    category: 'Transaction Handling',
    difficulty: 'medium',
    question: 'How do you send a transaction in JavaScript?',
    options: [
      'connection.sendTransaction(transaction)',
      'connection.submitTransaction(transaction)',
      'connection.processTransaction(transaction)',
      'connection.executeTransaction(transaction)'
    ],
    correctAnswer: 1,
    explanation: 'connection.submitTransaction(transaction) sends the transaction to the Solana network.'
  },
  {
    id: 17,
    category: 'Transaction Handling',
    difficulty: 'easy',
    question: 'What is the purpose of a transaction signature?',
    options: [
      'To identify the sender',
      'To prove transaction authenticity',
      'To encrypt transaction data',
      'To reduce transaction fees'
    ],
    correctAnswer: 1,
    explanation: 'A transaction signature proves that the transaction was authorized by the owner of the private key.'
  },
  {
    id: 18,
    category: 'Transaction Handling',
    difficulty: 'medium',
    question: 'How do you confirm a transaction in JavaScript?',
    options: [
      'connection.confirmTransaction(signature)',
      'connection.waitForConfirmation(signature)',
      'connection.verifyTransaction(signature)',
      'connection.checkTransaction(signature)'
    ],
    correctAnswer: 0,
    explanation: 'connection.confirmTransaction(signature) waits for the transaction to be confirmed and returns the confirmation status.'
  },
  {
    id: 19,
    category: 'Transaction Handling',
    difficulty: 'easy',
    question: 'What is the default transaction fee on Solana?',
    options: [
      '0.000005 SOL',
      '0.0005 SOL',
      '0.005 SOL',
      '0.05 SOL'
    ],
    correctAnswer: 0,
    explanation: 'The default transaction fee on Solana is 0.000005 SOL, which is significantly lower than most other blockchains.'
  },
  {
    id: 20,
    category: 'Transaction Handling',
    difficulty: 'medium',
    question: 'How do you get the current transaction fee in JavaScript?',
    options: [
      'connection.getFeeForMessage(message)',
      'connection.getTransactionFee()',
      'connection.getFee()',
      'connection.getCurrentFee()'
    ],
    correctAnswer: 0,
    explanation: 'connection.getFeeForMessage(message) returns the fee for a specific transaction message.'
  },

  // Devnet & Faucet (25 questions)
  {
    id: 21,
    category: 'Devnet & Faucet',
    difficulty: 'easy',
    question: 'Which network should you use for testing Solana applications?',
    options: [
      'Mainnet',
      'Testnet',
      'Devnet',
      'Localnet'
    ],
    correctAnswer: 2,
    explanation: 'Devnet is the recommended network for testing Solana applications as it provides free SOL for testing and is more stable than testnet.'
  },
  {
    id: 22,
    category: 'Devnet & Faucet',
    difficulty: 'medium',
    question: 'How do you connect to Solana devnet in JavaScript?',
    options: [
      'new Connection("https://devnet.solana.com")',
      'new Connection("https://testnet.solana.com")',
      'new Connection("https://mainnet.solana.com")',
      'new Connection("https://local.solana.com")'
    ],
    correctAnswer: 0,
    explanation: 'new Connection("https://devnet.solana.com") connects to the Solana devnet for testing purposes.'
  },
  {
    id: 23,
    category: 'Devnet & Faucet',
    difficulty: 'easy',
    question: 'What is the purpose of a faucet in Solana?',
    options: [
      'To store tokens',
      'To provide free test tokens',
      'To mine new tokens',
      'To validate transactions'
    ],
    correctAnswer: 1,
    explanation: 'A faucet provides free test tokens (usually SOL) for development and testing purposes.'
  },
  {
    id: 24,
    category: 'Devnet & Faucet',
    difficulty: 'medium',
    question: 'How do you request an airdrop from the faucet in JavaScript?',
    options: [
      'connection.requestAirdrop(publicKey, amount)',
      'connection.airdrop(publicKey, amount)',
      'connection.getAirdrop(publicKey, amount)',
      'connection.sendAirdrop(publicKey, amount)'
    ],
    correctAnswer: 0,
    explanation: 'connection.requestAirdrop(publicKey, amount) requests SOL from the faucet on devnet or testnet.'
  },
  {
    id: 25,
    category: 'Devnet & Faucet',
    difficulty: 'easy',
    question: 'What is the typical airdrop amount on Solana devnet?',
    options: [
      '1 SOL',
      '2 SOL',
      '5 SOL',
      '10 SOL'
    ],
    correctAnswer: 1,
    explanation: 'The typical airdrop amount on Solana devnet is 2 SOL, which is sufficient for testing and development.'
  },
  {
    id: 26,
    category: 'Devnet & Faucet',
    difficulty: 'medium',
    question: 'How do you check if an airdrop was successful in JavaScript?',
    options: [
      'connection.getBalance(publicKey)',
      'connection.checkAirdrop(publicKey)',
      'connection.verifyAirdrop(publicKey)',
      'connection.getAirdropStatus(publicKey)'
    ],
    correctAnswer: 0,
    explanation: 'connection.getBalance(publicKey) returns the current balance, allowing you to verify if the airdrop was successful.'
  },
  {
    id: 27,
    category: 'Devnet & Faucet',
    difficulty: 'easy',
    question: 'What happens if an airdrop request fails?',
    options: [
      'The wallet is deleted',
      'You lose your existing SOL',
      'You can retry the request',
      'The network crashes'
    ],
    correctAnswer: 2,
    explanation: 'If an airdrop request fails, you can simply retry the request. Failed airdrops do not affect existing funds.'
  },
  {
    id: 28,
    category: 'Devnet & Faucet',
    difficulty: 'medium',
    question: 'How do you handle airdrop rate limiting in JavaScript?',
    options: [
      'Use setTimeout to delay requests',
      'Ignore rate limiting errors',
      'Use a different network',
      'Increase transaction fees'
    ],
    correctAnswer: 0,
    explanation: 'Use setTimeout to delay requests when hitting airdrop rate limits, as faucets have restrictions to prevent abuse.'
  },
  {
    id: 29,
    category: 'Devnet & Faucet',
    difficulty: 'easy',
    question: 'What is the purpose of using devnet for development?',
    options: [
      'To earn real money',
      'To test applications safely',
      'To mine new tokens',
      'To validate the network'
    ],
    correctAnswer: 1,
    explanation: 'Devnet allows developers to test applications safely without using real funds or affecting the main network.'
  },
  {
    id: 30,
    category: 'Devnet & Faucet',
    difficulty: 'medium',
    question: 'How do you switch between different Solana networks in JavaScript?',
    options: [
      'Create a new Connection object',
      'Use connection.switchNetwork()',
      'Use connection.setNetwork()',
      'Use connection.changeNetwork()'
    ],
    correctAnswer: 0,
    explanation: 'To switch networks, you create a new Connection object with the desired network URL.'
  }
]
