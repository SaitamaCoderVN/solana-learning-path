"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, Clock, Trophy, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

interface Question {
  id: number
  category: 'SPL Programs' | 'Testing' | 'Deployment' | 'Advanced Development' | 'Open Source'
  difficulty: 'Easy' | 'Medium' | 'Hard'
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  // SPL Programs (10 questions)
  {
    id: 1,
    category: 'SPL Programs',
    difficulty: 'Easy',
    question: 'What does SPL stand for in Solana?',
    options: [
      'Solana Program Library',
      'Solana Programming Language',
      'Solana Protocol Layer',
      'Solana Package Library'
    ],
    correctAnswer: 0,
    explanation: 'SPL stands for Solana Program Library, which provides a collection of on-chain programs for common use cases like tokens, NFTs, and governance.'
  },
  {
    id: 2,
    category: 'SPL Programs',
    difficulty: 'Medium',
    question: 'What is the SPL Token program used for?',
    options: [
      'Only for creating NFTs',
      'Creating and managing fungible and non-fungible tokens',
      'Only for governance tokens',
      'Only for stablecoins'
    ],
    correctAnswer: 1,
    explanation: 'The SPL Token program is used for creating and managing both fungible (like SOL) and non-fungible tokens (NFTs) on Solana.'
  },
  {
    id: 3,
    category: 'SPL Programs',
    difficulty: 'Medium',
    question: 'What is a mint account in SPL Token?',
    options: [
      'A user\'s wallet',
      'The account that defines token properties and supply',
      'A transaction account',
      'A validator account'
    ],
    correctAnswer: 1,
    explanation: 'A mint account defines the token\'s properties, including total supply, decimals, and authority, and is the source of truth for the token.'
  },
  {
    id: 4,
    category: 'SPL Programs',
    difficulty: 'Hard',
    question: 'What is the purpose of a token account in SPL?',
    options: [
      'To store the token program code',
      'To hold tokens for a specific mint and owner',
      'To validate transactions',
      'To manage token supply'
    ],
    correctAnswer: 1,
    explanation: 'A token account holds tokens for a specific mint and owner, allowing users to store and manage their token balances.'
  },
  {
    id: 5,
    category: 'SPL Programs',
    difficulty: 'Medium',
    question: 'What is Token-2022?',
    options: [
      'A new blockchain network',
      'An upgraded version of the SPL Token program with advanced features',
      'A new programming language',
      'A new wallet type'
    ],
    correctAnswer: 1,
    explanation: 'Token-2022 is an upgraded version of the SPL Token program that introduces advanced features like transfer fees, confidential transfers, and interest-bearing tokens.'
  },
  {
    id: 6,
    category: 'SPL Programs',
    difficulty: 'Hard',
    question: 'What is a transfer fee in Token-2022?',
    options: [
      'A fee paid to validators',
      'A fee that can be charged on token transfers and sent to a designated account',
      'A network transaction fee',
      'A gas fee'
    ],
    correctAnswer: 1,
    explanation: 'Transfer fees in Token-2022 allow token creators to charge fees on transfers, which are sent to a designated fee account.'
  },
  {
    id: 7,
    category: 'SPL Programs',
    difficulty: 'Medium',
    question: 'What is the SPL Associated Token Account (ATA) program?',
    options: [
      'A program for creating NFTs',
      'A program that creates and manages associated token accounts',
      'A program for staking tokens',
      'A program for governance'
    ],
    correctAnswer: 1,
    explanation: 'The ATA program creates and manages associated token accounts, which are deterministic addresses for holding tokens owned by a specific wallet.'
  },
  {
    id: 8,
    category: 'SPL Programs',
    difficulty: 'Hard',
    question: 'What is a multisig in SPL Token?',
    options: [
      'Multiple tokens in one account',
      'A token account that requires multiple signatures for transactions',
      'A type of NFT',
      'A governance token'
    ],
    correctAnswer: 1,
    explanation: 'A multisig token account requires multiple signatures to authorize transactions, providing enhanced security for token management.'
  },
  {
    id: 9,
    category: 'SPL Programs',
    difficulty: 'Easy',
    question: 'What is the SPL Governance program used for?',
    options: [
      'Managing token transfers',
      'Managing decentralized governance and voting',
      'Managing NFTs',
      'Managing staking'
    ],
    correctAnswer: 1,
    explanation: 'The SPL Governance program enables decentralized governance by allowing token holders to create proposals and vote on them.'
  },
  {
    id: 10,
    category: 'SPL Programs',
    difficulty: 'Medium',
    question: 'What is a proposal in SPL Governance?',
    options: [
      'A transaction',
      'A governance action that token holders can vote on',
      'A new token',
      'A validator update'
    ],
    correctAnswer: 1,
    explanation: 'A proposal is a governance action that token holders can vote on, such as parameter changes, treasury spending, or protocol upgrades.'
  },

  // Testing (8 questions)
  {
    id: 11,
    category: 'Testing',
    difficulty: 'Easy',
    question: 'What is unit testing in Solana development?',
    options: [
      'Testing the entire network',
      'Testing individual functions or components in isolation',
      'Testing only the UI',
      'Testing only deployment'
    ],
    correctAnswer: 1,
    explanation: 'Unit testing involves testing individual functions or components in isolation to ensure they work correctly before integration.'
  },
  {
    id: 12,
    category: 'Testing',
    difficulty: 'Medium',
    question: 'What is integration testing in Solana?',
    options: [
      'Testing only one component',
      'Testing how multiple components work together',
      'Testing only the network',
      'Testing only the wallet'
    ],
    correctAnswer: 1,
    explanation: 'Integration testing verifies that multiple components work together correctly, such as testing program interactions with accounts and other programs.'
  },
  {
    id: 13,
    category: 'Testing',
    difficulty: 'Medium',
    question: 'What is the purpose of test fixtures in Solana testing?',
    options: [
      'To make tests run faster',
      'To provide consistent test data and setup',
      'To reduce test coverage',
      'To skip tests'
    ],
    correctAnswer: 1,
    explanation: 'Test fixtures provide consistent test data and setup, ensuring tests run with predictable inputs and can be repeated reliably.'
  },
  {
    id: 14,
    category: 'Testing',
    difficulty: 'Hard',
    question: 'What is property-based testing in Solana?',
    options: [
      'Testing only specific properties',
      'Testing that properties hold for a range of inputs',
      'Testing only the main function',
      'Testing only error cases'
    ],
    correctAnswer: 1,
    explanation: 'Property-based testing verifies that certain properties hold for a range of inputs, helping catch edge cases and unexpected behavior.'
  },
  {
    id: 15,
    category: 'Testing',
    difficulty: 'Medium',
    question: 'What is the purpose of mocking in Solana testing?',
    options: [
      'To make tests run slower',
      'To replace real dependencies with controlled test versions',
      'To skip tests',
      'To reduce test coverage'
    ],
    correctAnswer: 1,
    explanation: 'Mocking replaces real dependencies with controlled test versions, allowing tests to focus on specific components without external dependencies.'
  },
  {
    id: 16,
    category: 'Testing',
    difficulty: 'Hard',
    question: 'What is test-driven development (TDD) in Solana?',
    options: [
      'Writing tests after code',
      'Writing tests before writing code',
      'Writing only integration tests',
      'Writing only unit tests'
    ],
    correctAnswer: 1,
    explanation: 'TDD involves writing tests before writing code, ensuring that the code meets the test requirements and improving code quality.'
  },
  {
    id: 17,
    category: 'Testing',
    difficulty: 'Easy',
    question: 'What is test coverage in Solana development?',
    options: [
      'The number of tests written',
      'The percentage of code that is tested',
      'The speed of tests',
      'The cost of testing'
    ],
    correctAnswer: 1,
    explanation: 'Test coverage measures the percentage of code that is executed during testing, helping identify untested areas.'
  },
  {
    id: 18,
    category: 'Testing',
    difficulty: 'Medium',
    question: 'What is the purpose of regression testing in Solana?',
    options: [
      'To test new features',
      'To ensure that previously working functionality still works',
      'To test only errors',
      'To test only the UI'
    ],
    correctAnswer: 1,
    explanation: 'Regression testing ensures that previously working functionality still works after changes, preventing new bugs from breaking existing features.'
  },

  // Deployment (8 questions)
  {
    id: 19,
    category: 'Deployment',
    difficulty: 'Easy',
    question: 'What is devnet in Solana?',
    options: [
      'The main network',
      'A test network for development and testing',
      'A private network',
      'A validator network'
    ],
    correctAnswer: 1,
    explanation: 'Devnet is a test network that mirrors mainnet but uses test tokens, allowing developers to test their programs without real costs.'
  },
  {
    id: 20,
    category: 'Deployment',
    difficulty: 'Medium',
    question: 'What is the purpose of program deployment on devnet?',
    options: [
      'To earn real tokens',
      'To test programs in a real network environment',
      'To mine cryptocurrency',
      'To validate transactions'
    ],
    correctAnswer: 1,
    explanation: 'Deploying on devnet allows developers to test their programs in a real network environment with test tokens before mainnet deployment.'
  },
  {
    id: 21,
    category: 'Deployment',
    difficulty: 'Medium',
    question: 'What is a program upgrade in Solana?',
    options: [
      'Updating the network',
      'Updating a deployed program with new code',
      'Updating the wallet',
      'Updating the validator'
    ],
    correctAnswer: 1,
    explanation: 'Program upgrades allow developers to update deployed programs with new code, fixing bugs or adding features.'
  },
  {
    id: 22,
    category: 'Deployment',
    difficulty: 'Hard',
    question: 'What is the purpose of a buffer account in program upgrades?',
    options: [
      'To store user data',
      'To store the new program code before activation',
      'To store transaction data',
      'To store account data'
    ],
    correctAnswer: 1,
    explanation: 'Buffer accounts store new program code before activation, allowing for seamless program upgrades without downtime.'
  },
  {
    id: 23,
    category: 'Deployment',
    difficulty: 'Medium',
    question: 'What is the difference between devnet and mainnet deployment?',
    options: [
      'There is no difference',
      'Devnet uses test tokens, mainnet uses real tokens',
      'Devnet is faster',
      'Mainnet is free'
    ],
    correctAnswer: 1,
    explanation: 'Devnet uses test tokens for free testing, while mainnet uses real tokens and incurs actual costs for deployment and transactions.'
  },
  {
    id: 24,
    category: 'Deployment',
    difficulty: 'Hard',
    question: 'What is program authority in Solana deployment?',
    options: [
      'The user who deploys the program',
      'The key that can upgrade or close the program',
      'The validator',
      'The network'
    ],
    correctAnswer: 1,
    explanation: 'Program authority is the key that has permission to upgrade or close the program, providing control over program modifications.'
  },
  {
    id: 25,
    category: 'Deployment',
    difficulty: 'Easy',
    question: 'What is the purpose of program ID in Solana?',
    options: [
      'To identify the program',
      'To identify the program uniquely on the network',
      'To identify the user',
      'To identify the transaction'
    ],
    correctAnswer: 1,
    explanation: 'Program ID uniquely identifies a program on the Solana network, allowing users and other programs to interact with it.'
  },
  {
    id: 26,
    category: 'Deployment',
    difficulty: 'Medium',
    question: 'What is the deployment cost on mainnet?',
    options: [
      'Free',
      'Variable cost based on program size',
      'Fixed cost',
      'No cost'
    ],
    correctAnswer: 1,
    explanation: 'Deployment costs on mainnet vary based on program size and network conditions, as they require real SOL for transaction fees.'
  },

  // Advanced Development (10 questions)
  {
    id: 27,
    category: 'Advanced Development',
    difficulty: 'Easy',
    question: 'What is program optimization in Solana?',
    options: [
      'Making programs run faster',
      'Reducing program size and improving efficiency',
      'Making programs larger',
      'Adding more features'
    ],
    correctAnswer: 1,
    explanation: 'Program optimization involves reducing program size and improving efficiency to minimize deployment and transaction costs.'
  },
  {
    id: 28,
    category: 'Advanced Development',
    difficulty: 'Medium',
    question: 'What are compute units in Solana?',
    options: [
      'CPU cores',
      'Units that measure program execution cost',
      'Memory units',
      'Storage units'
    ],
    correctAnswer: 1,
    explanation: 'Compute units measure the computational cost of program execution, directly affecting transaction fees.'
  },
  {
    id: 29,
    category: 'Advanced Development',
    difficulty: 'Hard',
    question: 'What is the purpose of program logs in Solana?',
    options: [
      'To store data',
      'To provide debugging information during program execution',
      'To validate transactions',
      'To manage accounts'
    ],
    correctAnswer: 1,
    explanation: 'Program logs provide debugging information during execution, helping developers understand program behavior and troubleshoot issues.'
  },
  {
    id: 30,
    category: 'Advanced Development',
    difficulty: 'Medium',
    question: 'What is cross-program invocation (CPI) in Solana?',
    options: [
      'A type of transaction',
      'One program calling another program',
      'A wallet feature',
      'A validator feature'
    ],
    correctAnswer: 1,
    explanation: 'CPI allows one program to call another program, enabling complex interactions and composability between different programs.'
  },
  {
    id: 31,
    category: 'Advanced Development',
    difficulty: 'Hard',
    question: 'What is the purpose of program-derived addresses (PDAs)?',
    options: [
      'To store user data',
      'To create deterministic addresses that programs can control',
      'To validate transactions',
      'To manage accounts'
    ],
    correctAnswer: 1,
    explanation: 'PDAs create deterministic addresses that programs can control without requiring private keys, enabling program-controlled accounts.'
  },
  {
    id: 32,
    category: 'Advanced Development',
    difficulty: 'Medium',
    question: 'What is the purpose of program state in Solana?',
    options: [
      'To store network data',
      'To store program-specific data and configuration',
      'To store user data',
      'To store transaction data'
    ],
    correctAnswer: 1,
    explanation: 'Program state stores program-specific data and configuration, allowing programs to maintain information between transactions.'
  },
  {
    id: 33,
    category: 'Advanced Development',
    difficulty: 'Hard',
    question: 'What is the purpose of program events in Solana?',
    options: [
      'To store data',
      'To notify external systems of program actions',
      'To validate transactions',
      'To manage accounts'
    ],
    correctAnswer: 1,
    explanation: 'Program events notify external systems of program actions, enabling off-chain applications to react to on-chain events.'
  },
  {
    id: 34,
    category: 'Advanced Development',
    difficulty: 'Medium',
    question: 'What is the purpose of program errors in Solana?',
    options: [
      'To crash programs',
      'To provide meaningful feedback about what went wrong',
      'To skip execution',
      'To ignore problems'
    ],
    correctAnswer: 1,
    explanation: 'Program errors provide meaningful feedback about what went wrong, helping users and developers understand and fix issues.'
  },
  {
    id: 35,
    category: 'Advanced Development',
    difficulty: 'Easy',
    question: 'What is the purpose of program documentation?',
    options: [
      'To make programs longer',
      'To explain how programs work and how to use them',
      'To hide program details',
      'To increase program size'
    ],
    correctAnswer: 1,
    explanation: 'Program documentation explains how programs work and how to use them, making them more accessible to developers and users.'
  },
  {
    id: 36,
    category: 'Advanced Development',
    difficulty: 'Hard',
    question: 'What is the purpose of program security audits?',
    options: [
      'To increase program cost',
      'To identify and fix security vulnerabilities',
      'To make programs slower',
      'To add features'
    ],
    correctAnswer: 1,
    explanation: 'Security audits identify and fix vulnerabilities, ensuring programs are safe to use and protecting user funds and data.'
  },

  // Open Source (4 questions)
  {
    id: 37,
    category: 'Open Source',
    difficulty: 'Easy',
    question: 'What is open source software?',
    options: [
      'Software that costs money',
      'Software whose source code is publicly available',
      'Software that only works offline',
      'Software that requires a license'
    ],
    correctAnswer: 1,
    explanation: 'Open source software has publicly available source code that anyone can view, modify, and distribute.'
  },
  {
    id: 38,
    category: 'Open Source',
    difficulty: 'Medium',
    question: 'What is the purpose of contributing to open source projects?',
    options: [
      'To earn money',
      'To improve software, learn, and collaborate with others',
      'To hide code',
      'To make software proprietary'
    ],
    correctAnswer: 1,
    explanation: 'Contributing to open source improves software quality, provides learning opportunities, and enables collaboration with the community.'
  },
  {
    id: 39,
    category: 'Open Source',
    difficulty: 'Medium',
    question: 'What is a pull request in open source development?',
    options: [
      'A request for money',
      'A proposed change to a project that others can review',
      'A bug report',
      'A feature request'
    ],
    correctAnswer: 1,
    explanation: 'A pull request is a proposed change to a project that others can review, discuss, and merge into the main codebase.'
  },
  {
    id: 40,
    category: 'Open Source',
    difficulty: 'Easy',
    question: 'What is the purpose of open source licenses?',
    options: [
      'To restrict software use',
      'To define how software can be used, modified, and distributed',
      'To hide source code',
      'To increase software cost'
    ],
    correctAnswer: 1,
    explanation: 'Open source licenses define how software can be used, modified, and distributed, providing legal clarity for contributors and users.'
  }
]

export default function SolanaInternshipExamQuiz() {
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
      <div className="container mx-auto max-w-4xl p-3 sm:p-6">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Solana Internship Readiness Exam</CardTitle>
            <CardDescription className="text-sm sm:text-base">Test your advanced knowledge of Solana development, SPL programs, testing, and deployment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Exam Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base"><strong>Total Questions:</strong> 40</p>
                    <p className="text-sm sm:text-base"><strong>Time Limit:</strong> 45 minutes</p>
                    <p className="text-sm sm:text-base"><strong>Passing Score:</strong> 80% (32/40 correct)</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2 text-sm sm:text-base">Categories:</p>
                    <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                      <li>• SPL Programs (10 questions)</li>
                      <li>• Testing (8 questions)</li>
                      <li>• Deployment (8 questions)</li>
                      <li>• Advanced Development (10 questions)</li>
                      <li>• Open Source (4 questions)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button onClick={startQuiz} size="lg" className="w-full sm:w-auto">
              Start Exam
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (quizCompleted) {
    const passingScore = 32
    const percentage = Math.round((score / questions.length) * 100)
    const passed = score >= passingScore

    return (
      <div className="container mx-auto max-w-4xl p-3 sm:p-6">
        <Card className="text-center">
          <CardHeader>
            <div className="text-4xl sm:text-6xl mb-4">
              {passed ? (
                <Trophy className="mx-auto text-primary" />
              ) : (
                <AlertCircle className="mx-auto text-destructive" />
              )}
            </div>
            <CardTitle className="text-2xl sm:text-3xl">
              {passed ? 'Congratulations! You Passed!' : 'Exam Completed'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-primary">{score}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Correct Answers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold">{questions.length}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Total Questions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-green-600">{percentage}%</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Score</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3 text-sm sm:text-base">Performance by Category:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['SPL Programs', 'Testing', 'Deployment', 'Advanced Development', 'Open Source'].map(category => {
                      const { correct, total } = getCategoryScore(category)
                      const categoryPercentage = Math.round((correct / total) * 100)
                      return (
                        <div key={category} className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm text-muted-foreground">{category}:</span>
                          <span className={`font-semibold text-xs sm:text-sm ${categoryPercentage >= 80 ? 'text-green-600' : 'text-destructive'}`}>
                            {correct}/{total} ({categoryPercentage}%)
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {!showResults && (
                <Button onClick={() => setShowResults(true)} variant="outline" className="w-full sm:w-auto">
                  Review Results
                </Button>
              )}
              <Button onClick={startQuiz} className="w-full sm:w-auto">
                Retake Exam
              </Button>
            </div>
          </CardContent>
        </Card>

        {showResults && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Detailed Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {randomizedQuestions.map((randomizedQ, index) => {
                const userAnswer = answers[index]
                const isCorrect = userAnswer === randomizedQ.correctAnswerIndex
                return (
                  <Card key={randomizedQ.question.id} className={isCorrect ? 'border-green-200 bg-green-50/50' : 'border-destructive/20 bg-destructive/5'}>
                    <CardContent className="pt-4 sm:pt-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <Badge variant={randomizedQ.question.difficulty === 'Easy' ? 'default' : randomizedQ.question.difficulty === 'Medium' ? 'secondary' : 'destructive'} className="text-xs w-fit">
                          {randomizedQ.question.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs w-fit">{randomizedQ.question.category}</Badge>
                      </div>
                      <p className="font-medium mb-3 text-sm sm:text-base">Q{index + 1}: {randomizedQ.question.question}</p>
                      <div className="space-y-2 mb-3">
                        {randomizedQ.shuffledOptions.map((option, optIndex) => (
                          <div key={optIndex} className={`p-2 rounded border text-sm ${
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
                              {optIndex === randomizedQ.correctAnswerIndex && <CheckCircle className="inline w-3 h-3 sm:w-4 sm:h-4 mr-2" />}
                              {optIndex === userAnswer && !isCorrect && <XCircle className="inline w-3 h-3 sm:w-4 sm:h-4 mr-2" />}
                              {String.fromCharCode(65 + optIndex)}. {option}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Card className="bg-muted/50">
                        <CardContent className="pt-4">
                          <p className="text-xs sm:text-sm"><strong>Explanation:</strong> {randomizedQ.question.explanation}</p>
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
    <div className="container mx-auto max-w-4xl p-3 sm:p-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <CardTitle className="text-lg sm:text-xl">Solana Internship Readiness Exam</CardTitle>
              <CardDescription className="text-sm">Question {currentQuestionIndex + 1} of {questions.length}</CardDescription>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-destructive font-medium">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{formatTime(timeLeft)}</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Time Remaining</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
          </div>

          {/* Question */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <Badge variant={currentRandomizedQuestion.question.difficulty === 'Easy' ? 'default' : currentRandomizedQuestion.question.difficulty === 'Medium' ? 'secondary' : 'destructive'} className="text-xs w-fit">
                {currentRandomizedQuestion.question.difficulty}
              </Badge>
              <Badge variant="outline" className="text-xs w-fit">{currentRandomizedQuestion.question.category}</Badge>
            </div>
            <h3 className="text-lg sm:text-xl font-medium">{currentRandomizedQuestion.question.question}</h3>
            
            {/* Options */}
            <div className="space-y-3">
              {currentRandomizedQuestion.shuffledOptions.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className={`w-full justify-start h-auto p-3 sm:p-4 text-sm sm:text-base ${
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
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Explanation:</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{currentRandomizedQuestion.question.explanation}</p>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-4 border-t">
            <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              Score: {score}/{currentQuestionIndex + 1}
            </div>
            <div className="flex gap-3 justify-center sm:justify-end">
              {currentQuestionIndex < questions.length - 1 ? (
                <Button 
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                  className="w-full sm:w-auto"
                >
                  Next Question
                </Button>
              ) : (
                <Button 
                  onClick={handleFinish}
                  disabled={selectedAnswer === null}
                  variant="default"
                  className="w-full sm:w-auto"
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
