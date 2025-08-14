"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, Clock, Trophy, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

interface Question {
  id: number
  category: 'Development Environment' | 'JavaScript/Web3.js' | 'Rust Programming' | 'Anchor Framework' | 'Git & Version Control'
  difficulty: 'Easy' | 'Medium' | 'Hard'
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  // Development Environment (5 questions)
  {
    id: 1,
    category: 'Development Environment',
    difficulty: 'Easy',
    question: 'What is the primary purpose of Solana\'s local validator?',
    options: [
      'To mine cryptocurrency',
      'To test programs locally without network fees',
      'To earn staking rewards',
      'To validate mainnet transactions'
    ],
    correctAnswer: 1,
    explanation: 'Local validators allow developers to test Solana programs locally without spending real SOL on network fees, making development and testing more efficient.'
  },
  {
    id: 2,
    category: 'Development Environment',
    difficulty: 'Medium',
    question: 'Which command starts a local Solana validator?',
    options: [
      'solana start',
      'solana-test-validator',
      'solana validator start',
      'solana local-validator'
    ],
    correctAnswer: 1,
    explanation: 'The `solana-test-validator` command starts a local validator for development and testing purposes.'
  },
  {
    id: 3,
    category: 'Development Environment',
    difficulty: 'Medium',
    question: 'What is the default RPC endpoint for local validator?',
    options: [
      'http://localhost:8899',
      'http://127.0.0.1:8080',
      'https://api.mainnet-beta.solana.com',
      'https://api.devnet.solana.com'
    ],
    correctAnswer: 0,
    explanation: 'Local validators run on port 8899 by default, accessible at http://localhost:8899.'
  },
  {
    id: 4,
    category: 'Development Environment',
    difficulty: 'Hard',
    question: 'What is the purpose of the Solana CLI tool?',
    options: [
      'Only for wallet management',
      'Only for program deployment',
      'For interacting with Solana networks and managing accounts',
      'Only for transaction signing'
    ],
    correctAnswer: 2,
    explanation: 'The Solana CLI tool is a comprehensive command-line interface for interacting with Solana networks, managing accounts, deploying programs, and more.'
  },
  {
    id: 5,
    category: 'Development Environment',
    difficulty: 'Easy',
    question: 'Which network should you use for development and testing?',
    options: [
      'Mainnet-beta',
      'Devnet',
      'Testnet',
      'Local validator'
    ],
    correctAnswer: 3,
    explanation: 'Local validators are best for development and testing as they provide instant finality and no real costs.'
  },

  // JavaScript/Web3.js (8 questions)
  {
    id: 6,
    category: 'JavaScript/Web3.js',
    difficulty: 'Easy',
    question: 'What is the primary library for Solana development in JavaScript?',
    options: [
      'web3.js',
      '@solana/web3.js',
      'ethers.js',
      'solana.js'
    ],
    correctAnswer: 1,
    explanation: '@solana/web3.js is the official JavaScript library for interacting with Solana blockchain.'
  },
  {
    id: 7,
    category: 'JavaScript/Web3.js',
    difficulty: 'Medium',
    question: 'How do you create a connection to Solana network in JavaScript?',
    options: [
      'new Connection(url)',
      'Connection.connect(url)',
      'Solana.connect(url)',
      'Web3.connect(url)'
    ],
    correctAnswer: 0,
    explanation: 'You create a connection using `new Connection(url)` where url is the RPC endpoint of the network.'
  },
  {
    id: 8,
    category: 'JavaScript/Web3.js',
    difficulty: 'Medium',
    question: 'What is the purpose of async/await in Solana JavaScript development?',
    options: [
      'To make code run faster',
      'To handle asynchronous operations like network requests',
      'To reduce memory usage',
      'To improve code readability only'
    ],
    correctAnswer: 1,
    explanation: 'Async/await is essential for handling asynchronous operations like RPC calls to the Solana network, ensuring proper handling of promises.'
  },
  {
    id: 9,
    category: 'JavaScript/Web3.js',
    difficulty: 'Hard',
    question: 'How do you handle errors in Solana JavaScript transactions?',
    options: [
      'Only use try-catch blocks',
      'Only check transaction status',
      'Use try-catch and check transaction confirmation status',
      'Ignore errors as they are handled automatically'
    ],
    correctAnswer: 2,
    explanation: 'Proper error handling requires both try-catch blocks for immediate errors and checking transaction confirmation status for on-chain failures.'
  },
  {
    id: 10,
    category: 'JavaScript/Web3.js',
    difficulty: 'Easy',
    question: 'What is a Keypair in Solana JavaScript?',
    options: [
      'A pair of public keys',
      'A public key and private key combination',
      'Two private keys',
      'A wallet address'
    ],
    correctAnswer: 1,
    explanation: 'A Keypair consists of a public key (for receiving) and a private key (for signing transactions).'
  },
  {
    id: 11,
    category: 'JavaScript/Web3.js',
    difficulty: 'Medium',
    question: 'How do you send a transaction in Solana JavaScript?',
    options: [
      'connection.sendTransaction(transaction)',
      'wallet.send(transaction)',
      'transaction.send()',
      'solana.send(transaction)'
    ],
    correctAnswer: 0,
    explanation: 'Transactions are sent using `connection.sendTransaction(transaction)` where connection is the network connection and transaction is the prepared transaction.'
  },
  {
    id: 12,
    category: 'JavaScript/Web3.js',
    difficulty: 'Hard',
    question: 'What is the purpose of a recent blockhash in transactions?',
    options: [
      'To identify the transaction',
      'To prevent replay attacks and ensure transaction freshness',
      'To specify the target block',
      'To set transaction priority'
    ],
    correctAnswer: 1,
    explanation: 'Recent blockhashes prevent replay attacks by ensuring transactions are processed within a specific time window and are not reused.'
  },
  {
    id: 13,
    category: 'JavaScript/Web3.js',
    difficulty: 'Medium',
    question: 'How do you get account balance in Solana JavaScript?',
    options: [
      'connection.getBalance(publicKey)',
      'account.getBalance()',
      'wallet.getBalance()',
      'solana.getBalance(publicKey)'
    ],
    correctAnswer: 0,
    explanation: 'Account balances are retrieved using `connection.getBalance(publicKey)` where publicKey is the account\'s public key.'
  },

  // Rust Programming (8 questions)
  {
    id: 14,
    category: 'Rust Programming',
    difficulty: 'Easy',
    question: 'What is ownership in Rust?',
    options: [
      'A way to share data between threads',
      'A system that ensures each value has exactly one owner',
      'A method for memory allocation',
      'A type of variable declaration'
    ],
    correctAnswer: 1,
    explanation: 'Ownership is Rust\'s memory management system where each value has exactly one owner, and the value is dropped when the owner goes out of scope.'
  },
  {
    id: 15,
    category: 'Rust Programming',
    difficulty: 'Medium',
    question: 'What is borrowing in Rust?',
    options: [
      'Taking ownership of a value',
      'Creating a reference to a value without taking ownership',
      'Copying a value',
      'Moving a value to another variable'
    ],
    correctAnswer: 1,
    explanation: 'Borrowing allows you to create references to values without taking ownership, enabling multiple references to the same data.'
  },
  {
    id: 16,
    category: 'Rust Programming',
    difficulty: 'Hard',
    question: 'What are the borrowing rules in Rust?',
    options: [
      'You can have any number of references',
      'You can have one mutable reference OR any number of immutable references',
      'You can have multiple mutable references',
      'References are not allowed'
    ],
    correctAnswer: 1,
    explanation: 'Rust\'s borrowing rules state you can have either one mutable reference OR any number of immutable references, but not both simultaneously.'
  },
  {
    id: 17,
    category: 'Rust Programming',
    difficulty: 'Medium',
    question: 'What is a lifetime in Rust?',
    options: [
      'How long a program runs',
      'How long a value exists in memory',
      'A generic parameter that specifies how long references are valid',
      'A measure of program performance'
    ],
    correctAnswer: 2,
    explanation: 'Lifetimes are generic parameters that specify how long references are valid, ensuring references don\'t outlive the data they refer to.'
  },
  {
    id: 18,
    category: 'Rust Programming',
    difficulty: 'Easy',
    question: 'What is the difference between String and &str in Rust?',
    options: [
      'String is owned, &str is borrowed',
      'String is borrowed, &str is owned',
      'They are the same type',
      'String is mutable, &str is immutable'
    ],
    correctAnswer: 0,
    explanation: 'String is an owned, growable string type, while &str is a borrowed string slice that references existing string data.'
  },
  {
    id: 19,
    category: 'Rust Programming',
    difficulty: 'Hard',
    question: 'What is the purpose of the Clone trait in Rust?',
    options: [
      'To create deep copies of values',
      'To create shallow copies of values',
      'To move values between variables',
      'To borrow values'
    ],
    correctAnswer: 0,
    explanation: 'The Clone trait allows you to create deep copies of values, useful when you need to duplicate data instead of moving it.'
  },
  {
    id: 20,
    category: 'Rust Programming',
    difficulty: 'Medium',
    question: 'What is a Result type in Rust?',
    options: [
      'A type that can only succeed',
      'A type that can only fail',
      'A type that can either succeed or fail',
      'A type for boolean values'
    ],
    correctAnswer: 2,
    explanation: 'Result is an enum that represents either success (Ok) or failure (Err), commonly used for error handling in Rust.'
  },
  {
    id: 21,
    category: 'Rust Programming',
    difficulty: 'Medium',
    question: 'How do you handle errors with Result in Rust?',
    options: [
      'Only use unwrap()',
      'Use match expressions or ? operator',
      'Ignore errors completely',
      'Use try-catch blocks'
    ],
    correctAnswer: 1,
    explanation: 'Result errors are typically handled using match expressions or the ? operator, which propagates errors up the call stack.'
  },

  // Anchor Framework (10 questions)
  {
    id: 22,
    category: 'Anchor Framework',
    difficulty: 'Easy',
    question: 'What is Anchor?',
    options: [
      'A Solana wallet',
      'A framework for developing Solana programs',
      'A programming language',
      'A blockchain network'
    ],
    correctAnswer: 1,
    explanation: 'Anchor is a framework that simplifies Solana program development by providing macros, types, and tools for building secure programs.'
  },
  {
    id: 23,
    category: 'Anchor Framework',
    difficulty: 'Medium',
    question: 'What is the purpose of the #[program] macro in Anchor?',
    options: [
      'To define program instructions',
      'To mark the main program module',
      'To create accounts',
      'To handle errors'
    ],
    correctAnswer: 1,
    explanation: 'The #[program] macro marks the main program module and generates the necessary program entry points and instruction handlers.'
  },
  {
    id: 24,
    category: 'Anchor Framework',
    difficulty: 'Medium',
    question: 'What is an Account struct in Anchor?',
    options: [
      'A user\'s wallet',
      'A data structure that represents on-chain state',
      'A transaction type',
      'A program instruction'
    ],
    correctAnswer: 1,
    explanation: 'Account structs in Anchor represent the data structure of accounts that store state on the Solana blockchain.'
  },
  {
    id: 25,
    category: 'Anchor Framework',
    difficulty: 'Hard',
    question: 'What is the purpose of the #[account] macro?',
    options: [
      'To create new accounts',
      'To mark a struct as an account and generate serialization code',
      'To validate account data',
      'To handle account errors'
    ],
    correctAnswer: 1,
    explanation: 'The #[account] macro marks a struct as an account and automatically generates serialization/deserialization code for Solana account data.'
  },
  {
    id: 26,
    category: 'Anchor Framework',
    difficulty: 'Medium',
    question: 'What is the #[derive(Accounts)] macro used for?',
    options: [
      'To create new accounts',
      'To validate and deserialize account data in instruction handlers',
      'To handle program errors',
      'To define program state'
    ],
    correctAnswer: 1,
    explanation: 'The #[derive(Accounts)] macro is used to validate and deserialize account data passed to instruction handlers, ensuring proper account constraints.'
  },
  {
    id: 27,
    category: 'Anchor Framework',
    difficulty: 'Hard',
    question: 'What is a PDA (Program Derived Address) in Anchor?',
    options: [
      'A user\'s wallet address',
      'An address derived from a program and seeds',
      'A validator address',
      'A transaction address'
    ],
    correctAnswer: 1,
    explanation: 'A PDA is an address derived from a program ID and seeds, allowing programs to create and control accounts without requiring a private key.'
  },
  {
    id: 28,
    category: 'Anchor Framework',
    difficulty: 'Medium',
    question: 'How do you create a PDA in Anchor?',
    options: [
      'Pubkey::new()',
      'Pubkey::find_program_address()',
      'Pubkey::create()',
      'Pubkey::generate()'
    ],
    correctAnswer: 1,
    explanation: 'PDAs are created using `Pubkey::find_program_address()` which takes seeds and a program ID to derive the address.'
  },
  {
    id: 29,
    category: 'Anchor Framework',
    difficulty: 'Hard',
    question: 'What is the purpose of account validation in Anchor?',
    options: [
      'To check account balances',
      'To ensure accounts meet program requirements and constraints',
      'To create new accounts',
      'To handle program errors'
    ],
    correctAnswer: 1,
    explanation: 'Account validation ensures that accounts passed to instruction handlers meet the program\'s requirements and constraints, preventing invalid operations.'
  },
  {
    id: 30,
    category: 'Anchor Framework',
    difficulty: 'Easy',
    question: 'What is the #[error_code] macro used for?',
    options: [
      'To define custom error types',
      'To handle program errors',
      'To create error accounts',
      'To validate error data'
    ],
    correctAnswer: 0,
    explanation: 'The #[error_code] macro allows you to define custom error types for your Anchor program, providing better error handling and debugging.'
  },
  {
    id: 31,
    category: 'Anchor Framework',
    difficulty: 'Medium',
    question: 'What is the purpose of the #[instruction] macro?',
    options: [
      'To define program instructions',
      'To mark instruction handler functions',
      'To create instruction accounts',
      'To validate instruction data'
    ],
    correctAnswer: 1,
    explanation: 'The #[instruction] macro marks functions as instruction handlers, automatically generating the necessary code to process specific instructions.'
  },

  // Git & Version Control (4 questions)
  {
    id: 32,
    category: 'Git & Version Control',
    difficulty: 'Easy',
    question: 'What is the purpose of Git in Solana development?',
    options: [
      'To compile programs',
      'To deploy programs',
      'To track code changes and collaborate with others',
      'To test programs'
    ],
    correctAnswer: 2,
    explanation: 'Git is used for version control, tracking code changes, and enabling collaboration between developers working on Solana programs.'
  },
  {
    id: 33,
    category: 'Git & Version Control',
    difficulty: 'Medium',
    question: 'What is a branch in Git?',
    options: [
      'A separate copy of the repository',
      'A separate line of development',
      'A backup of your code',
      'A different programming language'
    ],
    correctAnswer: 1,
    explanation: 'A branch in Git is a separate line of development that allows you to work on features or fixes without affecting the main codebase.'
  },
  {
    id: 34,
    category: 'Git & Version Control',
    difficulty: 'Medium',
    question: 'What is the purpose of a pull request?',
    options: [
      'To download code from a remote repository',
      'To propose changes and request code review',
      'To delete code from a repository',
      'To backup your local changes'
    ],
    correctAnswer: 1,
    explanation: 'A pull request is a way to propose changes to a repository and request that others review your code before merging it.'
  },
  {
    id: 35,
    category: 'Git & Version Control',
    difficulty: 'Easy',
    question: 'What command stages changes in Git?',
    options: [
      'git commit',
      'git add',
      'git push',
      'git pull'
    ],
    correctAnswer: 1,
    explanation: 'The `git add` command stages changes, preparing them to be committed to the repository.'
  }
]

export default function SolanaCodingExamQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(45 * 60) // 45 minutes in seconds
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)
  const [randomizedQuestions, setRandomizedQuestions] = useState<Array<{
    question: Question
    shuffledOptions: string[]
    correctAnswerIndex: number
  }>>([])

  // Function to shuffle array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Function to randomize questions and options
  const randomizeQuestions = () => {
    const randomized = questions.map(question => {
      const shuffledOptions = shuffleArray(question.options)
      const correctAnswerIndex = shuffledOptions.findIndex(
        option => option === question.options[question.correctAnswer]
      )
      return {
        question,
        shuffledOptions,
        correctAnswerIndex
      }
    })
    setRandomizedQuestions(randomized)
  }

  useEffect(() => {
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setQuizCompleted(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [quizStarted, quizCompleted, timeLeft])

  const startQuiz = () => {
    randomizeQuestions() // Randomize questions when starting
    setQuizStarted(true)
    setTimeLeft(45 * 60)
    setCurrentQuestionIndex(0)
    setScore(0)
    setAnswers(new Array(questions.length).fill(null))
    setQuizCompleted(false)
    setShowResults(false)
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return // Prevent changing answer after selection
    setSelectedAnswer(answerIndex)
    setAnswers(prev => {
      const newAnswers = [...prev]
      newAnswers[currentQuestionIndex] = answerIndex
      return newAnswers
    })
  }

  const handleNext = () => {
    if (selectedAnswer === randomizedQuestions[currentQuestionIndex].correctAnswerIndex) {
      setScore(prev => prev + 1)
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleFinish = () => {
    if (selectedAnswer === randomizedQuestions[currentQuestionIndex].correctAnswerIndex) {
      setScore(prev => prev + 1)
    }
    setQuizCompleted(true)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const getCategoryQuestions = (category: string) => {
    return questions.filter(q => q.category === category)
  }

  const getCategoryScore = (category: string) => {
    const categoryQuestions = getCategoryQuestions(category)
    const categoryAnswers = categoryQuestions.map(q => {
      const randomizedQ = randomizedQuestions.find(rq => rq.question.id === q.id)
      return randomizedQ ? answers[questions.indexOf(q)] : null
    })
    const correct = categoryAnswers.filter((answer, index) => {
      if (answer === null) return false
      const randomizedQ = randomizedQuestions.find(rq => rq.question.id === categoryQuestions[index].id)
      return randomizedQ && answer === randomizedQ.correctAnswerIndex
    }).length
    return { correct, total: categoryQuestions.length }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Hard': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  if (!quizStarted) {
    return (
      <div className="container mx-auto max-w-4xl p-6">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl">Solana Development Exam</CardTitle>
            <CardDescription>Test your knowledge of Solana development, Rust programming, and Anchor framework</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-xl">Exam Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="space-y-2">
                    <p><strong>Total Questions:</strong> 35</p>
                    <p><strong>Time Limit:</strong> 45 minutes</p>
                    <p><strong>Passing Score:</strong> 75% (26/35 correct)</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Categories:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Development Environment (5 questions)</li>
                      <li>• JavaScript/Web3.js (8 questions)</li>
                      <li>• Rust Programming (8 questions)</li>
                      <li>• Anchor Framework (10 questions)</li>
                      <li>• Git & Version Control (4 questions)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button onClick={startQuiz} size="lg">
              Start Exam
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (quizCompleted) {
    const passingScore = 26
    const percentage = Math.round((score / questions.length) * 100)
    const passed = score >= passingScore

    return (
      <div className="container mx-auto max-w-4xl p-6">
        <Card className="text-center">
          <CardHeader>
            <div className="text-6xl mb-4">
              {passed ? (
                <Trophy className="mx-auto text-primary" />
              ) : (
                <AlertCircle className="mx-auto text-destructive" />
              )}
            </div>
            <CardTitle className="text-3xl">
              {passed ? 'Congratulations! You Passed!' : 'Exam Completed'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{score}</p>
                    <p className="text-muted-foreground">Correct Answers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{questions.length}</p>
                    <p className="text-muted-foreground">Total Questions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{percentage}%</p>
                    <p className="text-muted-foreground">Score</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Performance by Category:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Development Environment', 'JavaScript/Web3.js', 'Rust Programming', 'Anchor Framework', 'Git & Version Control'].map(category => {
                      const { correct, total } = getCategoryScore(category)
                      const categoryPercentage = Math.round((correct / total) * 100)
                      return (
                        <div key={category} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{category}:</span>
                          <span className={`font-semibold ${categoryPercentage >= 75 ? 'text-green-600' : 'text-destructive'}`}>
                            {correct}/{total} ({categoryPercentage}%)
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex gap-3 justify-center">
              {!showResults && (
                <Button onClick={() => setShowResults(true)} variant="outline">
                  Review Results
                </Button>
              )}
              <Button onClick={startQuiz}>
                Retake Exam
              </Button>
            </div>
          </CardContent>
        </Card>

        {showResults && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Detailed Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {randomizedQuestions.map((randomizedQ, index) => {
                const userAnswer = answers[index]
                const isCorrect = userAnswer === randomizedQ.correctAnswerIndex
                return (
                  <Card key={randomizedQ.question.id} className={isCorrect ? 'border-green-200 bg-green-50/50' : 'border-destructive/20 bg-destructive/5'}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant={randomizedQ.question.difficulty === 'Easy' ? 'default' : randomizedQ.question.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                          {randomizedQ.question.difficulty}
                        </Badge>
                        <Badge variant="outline">{randomizedQ.question.category}</Badge>
                      </div>
                      <p className="font-medium mb-3">Q{index + 1}: {randomizedQ.question.question}</p>
                      <div className="space-y-2 mb-3">
                        {randomizedQ.shuffledOptions.map((option, optIndex) => (
                          <div key={optIndex} className={`p-2 rounded border ${
                            optIndex === randomizedQ.correctAnswerIndex 
                              ? 'border-green-300' 
                              : optIndex === userAnswer && !isCorrect
                              ? 'border-destructive/30'
                              : 'bg-muted border-border'
                          }`}>
                            <span className={`font-medium ${
                              optIndex === randomizedQ.correctAnswerIndex 
                                ? 'text-green-700' 
                                : optIndex === userAnswer && !isCorrect
                                ? 'text-destructive'
                                : 'text-foreground'
                            }`}>
                              {optIndex === randomizedQ.correctAnswerIndex && <CheckCircle className="inline w-4 h-4 mr-2" />}
                              {optIndex === userAnswer && !isCorrect && <XCircle className="inline w-4 h-4 mr-2" />}
                              {String.fromCharCode(65 + optIndex)}. {option}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Card className="bg-muted/50">
                        <CardContent className="pt-4">
                          <p className="text-sm"><strong>Explanation:</strong> {randomizedQ.question.explanation}</p>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                )
              })}
            </CardContent>
          </Card>
        )}
      </div>
    )
  }

  // Early return if no randomized questions yet
  if (randomizedQuestions.length === 0) {
    return null
  }

  const currentRandomizedQuestion = randomizedQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="container mx-auto max-w-4xl p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Solana Development Exam</CardTitle>
              <CardDescription>Question {currentQuestionIndex + 1} of {questions.length}</CardDescription>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-destructive font-medium">
                <Clock className="w-5 h-5" />
                <span>{formatTime(timeLeft)}</span>
              </div>
              <p className="text-sm text-muted-foreground">Time Remaining</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
          </div>

          {/* Question */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant={currentRandomizedQuestion.question.difficulty === 'Easy' ? 'default' : currentRandomizedQuestion.question.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                {currentRandomizedQuestion.question.difficulty}
              </Badge>
              <Badge variant="outline">{currentRandomizedQuestion.question.category}</Badge>
            </div>
            <h3 className="text-xl font-medium">{currentRandomizedQuestion.question.question}</h3>
            
            {/* Options */}
            <div className="space-y-3">
              {currentRandomizedQuestion.shuffledOptions.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className={`w-full justify-start h-auto p-4 ${
                    selectedAnswer === index
                      ? index === currentRandomizedQuestion.correctAnswerIndex
                        ? 'text-green-700 hover:text-green-700'
                        : 'text-destructive hover:text-destructive'
                      : ''
                  }`}
                >
                  <span className="font-medium">
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Explanation */}
          {selectedAnswer !== null && (
            <Card className="bg-muted/50">
              <CardContent className="pt-4">
                <h4 className="font-semibold mb-2">Explanation:</h4>
                <p className="text-muted-foreground">{currentRandomizedQuestion.question.explanation}</p>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              Score: {score}/{currentQuestionIndex + 1}
            </div>
            <div className="flex gap-3">
              {currentQuestionIndex < questions.length - 1 ? (
                <Button 
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                >
                  Next Question
                </Button>
              ) : (
                <Button 
                  onClick={handleFinish}
                  disabled={selectedAnswer === null}
                  variant="default"
                >
                  Finish Exam
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
