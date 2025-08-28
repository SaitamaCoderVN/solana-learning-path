import { Question } from './practice-questions-phase1'

export const phase2PracticeQuestions: Question[] = [
  // Todo App Development (25 questions)
  {
    id: 1,
    category: 'Todo App Development',
    difficulty: 'easy',
    question: 'What is the main purpose of a todo application?',
    options: [
      'To store cryptocurrency',
      'To manage tasks and reminders',
      'To mine new blocks',
      'To validate transactions'
    ],
    correctAnswer: 1,
    explanation: 'A todo application is designed to manage tasks and reminders, helping users organize their work and personal activities.'
  },
  {
    id: 2,
    category: 'Todo App Development',
    difficulty: 'medium',
    question: 'What does CRUD stand for in application development?',
    options: [
      'Create, Read, Update, Delete',
      'Create, Remove, Update, Display',
      'Copy, Read, Update, Delete',
      'Create, Read, Upload, Download'
    ],
    correctAnswer: 0,
    explanation: 'CRUD stands for Create, Read, Update, Delete - the four basic operations for persistent storage.'
  },
  {
    id: 3,
    category: 'Todo App Development',
    difficulty: 'easy',
    question: 'What is the purpose of a frontend in a todo application?',
    options: [
      'To store data permanently',
      'To provide user interface and interaction',
      'To process business logic',
      'To secure the application'
    ],
    correctAnswer: 1,
    explanation: 'The frontend provides the user interface and handles user interactions in a todo application.'
  },
  {
    id: 4,
    category: 'Todo App Development',
    difficulty: 'medium',
    question: 'What is the purpose of a backend in a todo application?',
    options: [
      'To display the user interface',
      'To handle user interactions',
      'To process business logic and manage data',
      'To style the application'
    ],
    correctAnswer: 2,
    explanation: 'The backend processes business logic, manages data, and handles the core functionality of the application.'
  },
  {
    id: 5,
    category: 'Todo App Development',
    difficulty: 'easy',
    question: 'What is state management in a todo application?',
    options: [
      'Managing user accounts',
      'Managing the application\'s data and UI state',
      'Managing network connections',
      'Managing file storage'
    ],
    correctAnswer: 1,
    explanation: 'State management involves managing the application\'s data and UI state, such as the list of todos and their completion status.'
  },
  {
    id: 6,
    category: 'Todo App Development',
    difficulty: 'medium',
    question: 'What is the purpose of a database in a todo application?',
    options: [
      'To display the user interface',
      'To store and retrieve todo data permanently',
      'To handle user interactions',
      'To style the application'
    ],
    correctAnswer: 1,
    explanation: 'A database stores and retrieves todo data permanently, ensuring data persistence across application sessions.'
  },
  {
    id: 7,
    category: 'Todo App Development',
    difficulty: 'easy',
    question: 'What is the purpose of an API in a todo application?',
    options: [
      'To display the user interface',
      'To provide communication between frontend and backend',
      'To store data permanently',
      'To style the application'
    ],
    correctAnswer: 1,
    explanation: 'An API provides communication between the frontend and backend, allowing them to exchange data and instructions.'
  },
  {
    id: 8,
    category: 'Todo App Development',
    difficulty: 'medium',
    question: 'What is the purpose of authentication in a todo application?',
    options: [
      'To store todos',
      'To verify user identity and control access',
      'To display the interface',
      'To manage the database'
    ],
    correctAnswer: 1,
    explanation: 'Authentication verifies user identity and controls access to personal todo data and features.'
  },
  {
    id: 9,
    category: 'Todo App Development',
    difficulty: 'easy',
    question: 'What is the purpose of validation in a todo application?',
    options: [
      'To store data',
      'To ensure data quality and prevent errors',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Validation ensures data quality and prevents errors by checking that input data meets required criteria.'
  },
  {
    id: 10,
    category: 'Todo App Development',
    difficulty: 'medium',
    question: 'What is the purpose of testing in a todo application?',
    options: [
      'To store data',
      'To ensure the application works correctly',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Testing ensures the application works correctly by verifying that all features and functionality operate as expected.'
  },

  // Wall of Wish Development (25 questions)
  {
    id: 11,
    category: 'Wall of Wish Development',
    difficulty: 'easy',
    question: 'What is the main purpose of a Wall of Wish application?',
    options: [
      'To store cryptocurrency',
      'To allow users to post and view wishes',
      'To mine new blocks',
      'To validate transactions'
    ],
    correctAnswer: 1,
    explanation: 'A Wall of Wish application allows users to post and view wishes, creating a social platform for sharing aspirations.'
  },
  {
    id: 12,
    category: 'Wall of Wish Development',
    difficulty: 'medium',
    question: 'What is user-generated content in a Wall of Wish application?',
    options: [
      'Content created by developers',
      'Content created by users (wishes, comments)',
      'Content from external sources',
      'System-generated content'
    ],
    correctAnswer: 1,
    explanation: 'User-generated content refers to content created by users, such as wishes, comments, and interactions in the application.'
  },
  {
    id: 13,
    category: 'Wall of Wish Development',
    difficulty: 'easy',
    question: 'What is the purpose of moderation in a Wall of Wish application?',
    options: [
      'To store wishes',
      'To ensure appropriate content and prevent abuse',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Moderation ensures appropriate content and prevents abuse by monitoring and filtering user-generated content.'
  },
  {
    id: 14,
    category: 'Wall of Wish Development',
    difficulty: 'medium',
    question: 'What is the purpose of user authentication in a Wall of Wish application?',
    options: [
      'To store wishes',
      'To identify users and control access to features',
      'To display the interface',
      'To manage the database'
    ],
    correctAnswer: 1,
    explanation: 'User authentication identifies users and controls access to features like posting wishes and managing profiles.'
  },
  {
    id: 15,
    category: 'Wall of Wish Development',
    difficulty: 'easy',
    question: 'What is the purpose of a wish in a Wall of Wish application?',
    options: [
      'To store data',
      'To express user aspirations or desires',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'A wish expresses user aspirations or desires, which is the core content of the Wall of Wish application.'
  },
  {
    id: 16,
    category: 'Wall of Wish Development',
    difficulty: 'medium',
    question: 'What is the purpose of social features in a Wall of Wish application?',
    options: [
      'To store data',
      'To enable user interaction and engagement',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Social features enable user interaction and engagement, such as liking, commenting, and sharing wishes.'
  },
  {
    id: 17,
    category: 'Wall of Wish Development',
    difficulty: 'easy',
    question: 'What is the purpose of a profile in a Wall of Wish application?',
    options: [
      'To store wishes',
      'To display user information and activity',
      'To display the interface',
      'To manage the database'
    ],
    correctAnswer: 1,
    explanation: 'A profile displays user information and activity, allowing users to showcase their wishes and interact with others.'
  },
  {
    id: 18,
    category: 'Wall of Wish Development',
    difficulty: 'medium',
    question: 'What is the purpose of privacy settings in a Wall of Wish application?',
    options: [
      'To store data',
      'To control who can see user content',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Privacy settings control who can see user content, allowing users to manage their visibility and data sharing preferences.'
  },
  {
    id: 19,
    category: 'Wall of Wish Development',
    difficulty: 'easy',
    question: 'What is the purpose of a feed in a Wall of Wish application?',
    options: [
      'To store data',
      'To display a stream of wishes from various users',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'A feed displays a stream of wishes from various users, allowing users to discover and engage with content from the community.'
  },
  {
    id: 20,
    category: 'Wall of Wish Development',
    difficulty: 'medium',
    question: 'What is the purpose of search functionality in a Wall of Wish application?',
    options: [
      'To store data',
      'To help users find specific wishes or users',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Search functionality helps users find specific wishes or users, improving the discoverability of content in the application.'
  },

  // PDA Counter Program (25 questions)
  {
    id: 21,
    category: 'PDA Counter Program',
    difficulty: 'easy',
    question: 'What does PDA stand for in Solana?',
    options: [
      'Program Derived Address',
      'Public Data Account',
      'Private Data Address',
      'Program Data Account'
    ],
    correctAnswer: 0,
    explanation: 'PDA stands for Program Derived Address, which is a deterministic address derived from a program ID and seeds.'
  },
  {
    id: 22,
    category: 'PDA Counter Program',
    difficulty: 'medium',
    question: 'What is the purpose of a PDA in Solana?',
    options: [
      'To store private keys',
      'To create deterministic addresses that programs can control',
      'To encrypt data',
      'To validate transactions'
    ],
    correctAnswer: 1,
    explanation: 'A PDA creates deterministic addresses that programs can control without needing private keys.'
  },
  {
    id: 23,
    category: 'PDA Counter Program',
    difficulty: 'easy',
    question: 'What is the purpose of a counter in a PDA program?',
    options: [
      'To store data',
      'To track and increment numerical values',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'A counter tracks and increments numerical values, which is useful for various applications like vote counting or usage tracking.'
  },
  {
    id: 24,
    category: 'PDA Counter Program',
    difficulty: 'medium',
    question: 'How do you create a PDA in Solana?',
    options: [
      'Using Keypair.generate()',
      'Using Pubkey.find_program_address()',
      'Using Account.create()',
      'Using Program.new()'
    ],
    correctAnswer: 1,
    explanation: 'Pubkey.find_program_address() is used to derive a PDA from a program ID and seeds.'
  },
  {
    id: 25,
    category: 'PDA Counter Program',
    difficulty: 'easy',
    question: 'What is the purpose of seeds in PDA generation?',
    options: [
      'To store data',
      'To provide input for deterministic address generation',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Seeds provide input for deterministic address generation, ensuring the same seeds always produce the same PDA.'
  },
  {
    id: 26,
    category: 'PDA Counter Program',
    difficulty: 'medium',
    question: 'What is the purpose of a bump seed in PDA generation?',
    options: [
      'To store data',
      'To ensure the generated address is valid',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'A bump seed ensures the generated address is valid by providing a byte that makes the address fall on the ed25519 curve.'
  },
  {
    id: 27,
    category: 'PDA Counter Program',
    difficulty: 'easy',
    question: 'What is the purpose of validation in a PDA counter program?',
    options: [
      'To store data',
      'To ensure data integrity and prevent errors',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Validation ensures data integrity and prevents errors by checking that operations are valid and safe.'
  },
  {
    id: 28,
    category: 'PDA Counter Program',
    difficulty: 'medium',
    question: 'What is the purpose of error handling in a PDA counter program?',
    options: [
      'To store data',
      'To gracefully handle and respond to errors',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Error handling gracefully handles and responds to errors, improving program reliability and user experience.'
  },
  {
    id: 29,
    category: 'PDA Counter Program',
    difficulty: 'easy',
    question: 'What is the purpose of testing in a PDA counter program?',
    options: [
      'To store data',
      'To ensure the program works correctly',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Testing ensures the program works correctly by verifying that all functionality operates as expected.'
  },
  {
    id: 30,
    category: 'PDA Counter Program',
    difficulty: 'medium',
    question: 'What is the purpose of documentation in a PDA counter program?',
    options: [
      'To store data',
      'To explain how the program works and how to use it',
      'To display the interface',
      'To manage user accounts'
    ],
    correctAnswer: 1,
    explanation: 'Documentation explains how the program works and how to use it, making it easier for developers to understand and maintain.'
  }
]
