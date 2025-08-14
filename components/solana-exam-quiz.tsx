"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, Clock, Trophy, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

interface Question {
  id: number
  category: 'Solana Basics' | 'Cryptography' | 'Wallets' | 'Transactions' | 'Network Architecture'
  difficulty: 'Easy' | 'Medium' | 'Hard'
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  // Solana Basics (8 questions)
  {
    id: 1,
    category: 'Solana Basics',
    difficulty: 'Easy',
    question: 'What is Solana primarily designed for?',
    options: [
      'Decentralized storage',
      'High-performance blockchain applications',
      'Smart contract privacy',
      'Cross-chain interoperability'
    ],
    correctAnswer: 1,
    explanation: 'Solana is designed as a high-performance blockchain platform that can handle thousands of transactions per second with low fees.'
  },
  {
    id: 2,
    category: 'Solana Basics',
    difficulty: 'Easy',
    question: 'What consensus mechanism does Solana use?',
    options: [
      'Proof of Work (PoW)',
      'Proof of Stake (PoS)',
      'Proof of History (PoH) + Proof of Stake',
      'Delegated Proof of Stake (DPoS)'
    ],
    correctAnswer: 2,
    explanation: 'Solana uses Proof of History (PoH) combined with Proof of Stake (PoS) to achieve high throughput and fast finality.'
  },
  {
    id: 3,
    category: 'Solana Basics',
    difficulty: 'Medium',
    question: 'What is the maximum theoretical throughput of Solana?',
    options: [
      '1,000 TPS',
      '10,000 TPS',
      '65,000 TPS',
      '100,000+ TPS'
    ],
    correctAnswer: 3,
    explanation: 'Solana can theoretically handle over 100,000 transactions per second, though real-world performance varies based on network conditions.'
  },
  {
    id: 4,
    category: 'Solana Basics',
    difficulty: 'Medium',
    question: 'What programming language are Solana programs written in?',
    options: [
      'Solidity',
      'Rust',
      'JavaScript',
      'Python'
    ],
    correctAnswer: 1,
    explanation: 'Solana programs are primarily written in Rust, which provides memory safety and performance benefits.'
  },
  {
    id: 5,
    category: 'Solana Basics',
    difficulty: 'Hard',
    question: 'What is a Solana program?',
    options: [
      'A type of wallet',
      'A smart contract that runs on Solana',
      'A validator node',
      'A transaction type'
    ],
    correctAnswer: 1,
    explanation: 'A Solana program is a smart contract that runs on the Solana blockchain, similar to Ethereum smart contracts but with different architecture.'
  },
  {
    id: 6,
    category: 'Solana Basics',
    difficulty: 'Easy',
    question: 'What is the native token of Solana?',
    options: [
      'ETH',
      'SOL',
      'USDC',
      'BTC'
    ],
    correctAnswer: 1,
    explanation: 'SOL is the native token of the Solana blockchain, used for transaction fees and staking.'
  },
  {
    id: 7,
    category: 'Solana Basics',
    difficulty: 'Medium',
    question: 'What is the purpose of SOL tokens?',
    options: [
      'Only for trading',
      'Transaction fees and staking',
      'Governance only',
      'Privacy protection'
    ],
    correctAnswer: 1,
    explanation: 'SOL tokens are used for paying transaction fees and for staking to secure the network through validator participation.'
  },
  {
    id: 8,
    category: 'Solana Basics',
    difficulty: 'Hard',
    question: 'What is Solana\'s block time?',
    options: [
      '10 seconds',
      '1 second',
      '400 milliseconds',
      '15 seconds'
    ],
    correctAnswer: 2,
    explanation: 'Solana has a block time of approximately 400 milliseconds, making it one of the fastest blockchains.'
  },

  // Cryptography (6 questions)
  {
    id: 9,
    category: 'Cryptography',
    difficulty: 'Easy',
    question: 'What cryptographic algorithm does Solana use for key generation?',
    options: [
      'RSA',
      'Ed25519',
      'ECDSA',
      'AES'
    ],
    correctAnswer: 1,
    explanation: 'Solana uses Ed25519 for key generation, which provides high security and performance.'
  },
  {
    id: 10,
    category: 'Cryptography',
    difficulty: 'Medium',
    question: 'What is a keypair in Solana?',
    options: [
      'Two public keys',
      'A public key and private key',
      'Two private keys',
      'A seed phrase'
    ],
    correctAnswer: 1,
    explanation: 'A keypair consists of a public key (for receiving) and a private key (for signing transactions).'
  },
  {
    id: 11,
    category: 'Cryptography',
    difficulty: 'Medium',
    question: 'How are Solana addresses generated?',
    options: [
      'From a private key using Ed25519',
      'From a public key using SHA256',
      'From a seed phrase using BIP39',
      'Randomly generated'
    ],
    correctAnswer: 0,
    explanation: 'Solana addresses are derived from the public key, which is generated from the private key using the Ed25519 algorithm.'
  },
  {
    id: 12,
    category: 'Cryptography',
    difficulty: 'Hard',
    question: 'What is the relationship between a private key and public key in Solana?',
    options: [
      'They are mathematically unrelated',
      'Public key is derived from private key',
      'Private key is derived from public key',
      'They are the same key'
    ],
    correctAnswer: 1,
    explanation: 'The public key is mathematically derived from the private key using elliptic curve cryptography, but the private key cannot be derived from the public key.'
  },
  {
    id: 13,
    category: 'Cryptography',
    difficulty: 'Easy',
    question: 'What is the purpose of a private key?',
    options: [
      'To receive transactions',
      'To sign transactions',
      'To view balances',
      'To connect to the network'
    ],
    correctAnswer: 1,
    explanation: 'Private keys are used to sign transactions, proving ownership and authorizing transfers.'
  },
  {
    id: 14,
    category: 'Cryptography',
    difficulty: 'Hard',
    question: 'What is a seed phrase?',
    options: [
      'A type of public key',
      'A mnemonic representation of a private key',
      'A transaction hash',
      'A validator address'
    ],
    correctAnswer: 1,
    explanation: 'A seed phrase is a human-readable mnemonic representation of a private key, making it easier to backup and restore wallets.'
  },

  // Wallets (6 questions)
  {
    id: 15,
    category: 'Wallets',
    difficulty: 'Easy',
    question: 'What is a Solana wallet?',
    options: [
      'A physical device',
      'A software that manages keys and interacts with the blockchain',
      'A type of transaction',
      'A validator node'
    ],
    correctAnswer: 1,
    explanation: 'A Solana wallet is software that manages cryptographic keys and allows users to interact with the Solana blockchain.'
  },
  {
    id: 16,
    category: 'Wallets',
    difficulty: 'Medium',
    question: 'What are the main types of Solana wallets?',
    options: [
      'Hot wallets and cold wallets',
      'Hardware and software wallets',
      'Custodial and non-custodial wallets',
      'All of the above'
    ],
    correctAnswer: 3,
    explanation: 'Solana wallets can be categorized as hot/cold, hardware/software, and custodial/non-custodial, each with different security characteristics.'
  },
  {
    id: 17,
    category: 'Wallets',
    difficulty: 'Medium',
    question: 'What is a hot wallet?',
    options: [
      'A wallet connected to the internet',
      'A hardware wallet',
      'A wallet with high fees',
      'A wallet for hot tokens only'
    ],
    correctAnswer: 0,
    explanation: 'A hot wallet is connected to the internet, making it convenient but potentially less secure than cold wallets.'
  },
  {
    id: 18,
    category: 'Wallets',
    difficulty: 'Hard',
    question: 'What is the purpose of a wallet\'s derivation path?',
    options: [
      'To generate multiple addresses from one seed',
      'To connect to different networks',
      'To set transaction fees',
      'To choose validators'
    ],
    correctAnswer: 0,
    explanation: 'A derivation path allows a single seed phrase to generate multiple keypairs and addresses, following BIP44 standards.'
  },
  {
    id: 19,
    category: 'Wallets',
    difficulty: 'Easy',
    question: 'What should you never share?',
    options: [
      'Your public key',
      'Your private key',
      'Your wallet address',
      'Your transaction history'
    ],
    correctAnswer: 1,
    explanation: 'Never share your private key as it gives full control over your wallet and funds.'
  },
  {
    id: 20,
    category: 'Wallets',
    difficulty: 'Medium',
    question: 'What is a custodial wallet?',
    options: [
      'A wallet you control completely',
      'A wallet managed by a third party',
      'A hardware wallet',
      'A wallet for institutions only'
    ],
    correctAnswer: 1,
    explanation: 'A custodial wallet is managed by a third party (like an exchange), meaning you don\'t have full control over your private keys.'
  },

  // Transactions (6 questions)
  {
    id: 21,
    category: 'Transactions',
    difficulty: 'Easy',
    question: 'What is a Solana transaction?',
    options: [
      'A block of data',
      'A transfer of value or execution of a program',
      'A network message',
      'A validator update'
    ],
    correctAnswer: 1,
    explanation: 'A Solana transaction is a transfer of value or execution of a program on the blockchain.'
  },
  {
    id: 22,
    category: 'Transactions',
    difficulty: 'Medium',
    question: 'What are the main components of a Solana transaction?',
    options: [
      'Header, body, and footer',
      'Instructions, signers, and recent blockhash',
      'From, to, and amount',
      'Block number and timestamp'
    ],
    correctAnswer: 1,
    explanation: 'Solana transactions contain instructions (what to do), signers (who authorizes), and a recent blockhash (for security).'
  },
  {
    id: 23,
    category: 'Transactions',
    difficulty: 'Medium',
    question: 'What is a transaction fee in Solana?',
    options: [
      'A percentage of the transaction amount',
      'A fixed fee paid in SOL',
      'A voluntary tip to validators',
      'A network maintenance fee'
    ],
    correctAnswer: 1,
    explanation: 'Transaction fees in Solana are fixed fees paid in SOL to compensate validators for processing transactions.'
  },
  {
    id: 24,
    category: 'Transactions',
    difficulty: 'Hard',
    question: 'What is a recent blockhash?',
    options: [
      'The hash of the latest block',
      'A security feature to prevent replay attacks',
      'A transaction identifier',
      'A validator signature'
    ],
    correctAnswer: 1,
    explanation: 'A recent blockhash is a security feature that prevents replay attacks by ensuring transactions are processed within a specific time window.'
  },
  {
    id: 25,
    category: 'Transactions',
    difficulty: 'Easy',
    question: 'What happens when a transaction fails?',
    options: [
      'The fee is refunded',
      'The fee is lost and the transaction is rejected',
      'The transaction is retried automatically',
      'The network compensates the user'
    ],
    correctAnswer: 1,
    explanation: 'When a transaction fails, the fee is lost and the transaction is rejected from the blockchain.'
  },
  {
    id: 26,
    category: 'Transactions',
    difficulty: 'Hard',
    question: 'What is transaction confirmation in Solana?',
    options: [
      'When the transaction is sent',
      'When the transaction is included in a block',
      'When the transaction has enough confirmations for finality',
      'When the recipient receives the funds'
    ],
    correctAnswer: 2,
    explanation: 'Transaction confirmation occurs when the transaction has enough confirmations (typically 32-64) to achieve finality.'
  },

  // Network Architecture (4 questions)
  {
    id: 27,
    category: 'Network Architecture',
    difficulty: 'Easy',
    question: 'What is a Solana validator?',
    options: [
      'A user who sends transactions',
      'A node that participates in consensus and block production',
      'A wallet address',
      'A smart contract'
    ],
    correctAnswer: 1,
    explanation: 'Validators are nodes that participate in the network\'s consensus mechanism and produce blocks.'
  },
  {
    id: 28,
    category: 'Network Architecture',
    difficulty: 'Medium',
    question: 'What is the difference between mainnet and devnet?',
    options: [
      'Mainnet is for testing, devnet is for production',
      'Mainnet is for production, devnet is for testing',
      'They are the same network',
      'Mainnet has higher fees'
    ],
    correctAnswer: 1,
    explanation: 'Mainnet is the production network with real value, while devnet is for testing and development with no real value.'
  },
  {
    id: 29,
    category: 'Network Architecture',
    difficulty: 'Hard',
    question: 'What is Proof of History (PoH)?',
    options: [
      'A consensus mechanism',
      'A cryptographic clock that orders events',
      'A type of validator',
      'A transaction type'
    ],
    correctAnswer: 1,
    explanation: 'Proof of History is a cryptographic clock that creates a historical record proving that an event occurred before another event.'
  },
  {
    id: 30,
    category: 'Network Architecture',
    difficulty: 'Medium',
    question: 'What is the role of stake in Solana?',
    options: [
      'To pay for transactions',
      'To participate in consensus and earn rewards',
      'To create new tokens',
      'To validate transactions only'
    ],
    correctAnswer: 1,
    explanation: 'Stake allows validators to participate in consensus and earn rewards for securing the network.'
  }
]

export default function SolanaExamQuiz() {
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
            <CardTitle className="text-3xl">Solana Fundamentals Exam</CardTitle>
            <CardDescription>Test your knowledge of Solana blockchain fundamentals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-xl">Exam Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="space-y-2">
                    <p><strong>Total Questions:</strong> 30</p>
                    <p><strong>Time Limit:</strong> 45 minutes</p>
                    <p><strong>Passing Score:</strong> 70% (21/30)</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Categories:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Solana Basics (8 questions)</li>
                      <li>• Cryptography (6 questions)</li>
                      <li>• Wallets (6 questions)</li>
                      <li>• Transactions (6 questions)</li>
                      <li>• Network Architecture (4 questions)</li>
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
    const passingScore = 21
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
                    {['Solana Basics', 'Cryptography', 'Wallets', 'Transactions', 'Network Architecture'].map(category => {
                      const { correct, total } = getCategoryScore(category)
                      const categoryPercentage = Math.round((correct / total) * 100)
                      return (
                        <div key={category} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{category}:</span>
                          <span className={`font-semibold ${categoryPercentage >= 70 ? 'text-green-600' : 'text-destructive'}`}>
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
              <CardTitle>Solana Fundamentals Exam</CardTitle>
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
