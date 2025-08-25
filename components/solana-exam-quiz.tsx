"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { GoogleCalendarEmbed } from "@/components/ui/google-calendar-embed"

interface Question {
  id: number
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface ExamResult {
  totalQuestions: number
  correctAnswers: number
  score: number
  passed: boolean
  categoryScores: Record<string, { correct: number; total: number; percentage: number }>
  timeTaken: number
  completedAt: string
}

const questions: Question[] = [
  // Solana Basics (8 questions)
  {
    id: 1,
    category: 'Solana Basics',
    difficulty: 'easy',
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
    difficulty: 'easy',
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
    difficulty: 'medium',
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
    difficulty: 'medium',
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
    difficulty: 'hard',
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
    difficulty: 'easy',
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
    difficulty: 'medium',
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
    difficulty: 'hard',
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
    difficulty: 'easy',
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
    difficulty: 'medium',
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
    difficulty: 'medium',
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
    difficulty: 'hard',
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
    difficulty: 'easy',
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
    difficulty: 'hard',
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
    difficulty: 'easy',
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
    difficulty: 'medium',
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
    difficulty: 'medium',
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
    difficulty: 'hard',
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
    difficulty: 'easy',
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
    difficulty: 'medium',
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
    difficulty: 'easy',
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
    difficulty: 'medium',
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
    difficulty: 'medium',
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
    difficulty: 'hard',
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
    difficulty: 'easy',
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
    difficulty: 'hard',
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
    difficulty: 'easy',
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
    difficulty: 'medium',
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
    difficulty: 'hard',
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
    difficulty: 'medium',
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

// Fireworks component for celebration
const Fireworks = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number, color: string}>>([])

  useEffect(() => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd']
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: window.innerHeight,
      vx: (Math.random() - 0.5) * 8,
      vy: -Math.random() * 15 - 5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    setParticles(newParticles)

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        vy: particle.vy + 0.3, // gravity
        vx: particle.vx * 0.99 // air resistance
      })).filter(particle => particle.y < window.innerHeight + 100))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </div>
  )
}

export default function SolanaExamQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const [timeLeft, setTimeLeft] = useState(45 * 60) // 45 minutes in seconds
  const [examStarted, setExamStarted] = useState(false)
  const [examCompleted, setExamCompleted] = useState(false)
  const [examResult, setExamResult] = useState<ExamResult | null>(null)
  const [showReview, setShowReview] = useState(false)
  const [showBookingLink, setShowBookingLink] = useState(false)
  const [currentScore, setCurrentScore] = useState(0)

  // Check localStorage for existing exam results on component mount
  useEffect(() => {
    const savedResult = localStorage.getItem('solana-exam-result')
    if (savedResult) {
      const result = JSON.parse(savedResult)
      setExamResult(result)
      setExamCompleted(true)
      setShowBookingLink(result.passed)
    }
  }, [])

  // Timer effect
  useEffect(() => {
    if (!examStarted || examCompleted) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleExamComplete()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [examStarted, examCompleted])

  // Calculate current score whenever answers change
  useEffect(() => {
    if (examStarted && !examCompleted) {
      const answeredQuestions = answers.filter(answer => answer !== null)
      if (answeredQuestions.length > 0) {
        const correctCount = answeredQuestions.filter((answer, index) => {
          const questionIndex = answers.findIndex((_, i) => answers[i] !== null && i === index)
          return answer === questions[questionIndex]?.correctAnswer
        }).length
        const currentPercentage = (correctCount / answeredQuestions.length) * 100
        setCurrentScore(currentPercentage)
        
        // Show booking link if score reaches 70%
        if (currentPercentage >= 70 && !showBookingLink) {
          setShowBookingLink(true)
        }
      }
    }
  }, [answers, examStarted, examCompleted, showBookingLink])

  const handleExamComplete = () => {
    const correctAnswers = answers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length

    const score = (correctAnswers / questions.length) * 100
    const passed = score >= 70

    // Calculate category scores
    const categoryScores: Record<string, { correct: number; total: number; percentage: number }> = {}
    questions.forEach((question) => {
      if (!categoryScores[question.category]) {
        categoryScores[question.category] = { correct: 0, total: 0, percentage: 0 }
      }
      categoryScores[question.category].total++
      
      if (answers[question.id - 1] === question.correctAnswer) {
        categoryScores[question.category].correct++
      }
    })

    // Calculate percentages
    Object.keys(categoryScores).forEach(category => {
      categoryScores[category].percentage = 
        (categoryScores[category].correct / categoryScores[category].total) * 100
    })

    const result: ExamResult = {
      totalQuestions: questions.length,
      correctAnswers,
      score,
      passed,
      categoryScores,
      timeTaken: 45 * 60 - timeLeft,
      completedAt: new Date().toISOString()
    }

    setExamResult(result)
    setExamCompleted(true)
    setShowBookingLink(passed)

    // Save to localStorage
    localStorage.setItem('solana-exam-result', JSON.stringify(result))
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers]
      newAnswers[currentQuestion] = selectedAnswer
      setAnswers(newAnswers)

      if (currentQuestion === questions.length - 1) {
        handleExamComplete()
      } else {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      }
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answers[currentQuestion - 1])
    }
  }

  const startExam = () => {
    setExamStarted(true)
    setTimeLeft(45 * 60)
    setCurrentQuestion(0)
    setAnswers(new Array(questions.length).fill(null))
    setSelectedAnswer(null)
    setExamCompleted(false)
    setExamResult(null)
    setShowReview(false)
    setShowBookingLink(false)
    setCurrentScore(0)
  }

  const resetExam = () => {
    setExamStarted(false)
    setCurrentQuestion(0)
    setAnswers(new Array(questions.length).fill(null))
    setSelectedAnswer(null)
    setExamCompleted(false)
    setExamResult(null)
    setShowReview(false)
    setShowBookingLink(false)
    setCurrentScore(0)
    localStorage.removeItem('solana-exam-result')
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  if (!examStarted && !examCompleted) {
    return (
      <Card className="p-6 max-w-4xl mx-auto border border-border">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Solana Fundamentals Exam</h2>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Test your knowledge of Solana blockchain fundamentals
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-muted p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground">Exam Details</h3>
                <p className="text-sm text-muted-foreground">30 questions • 45 minutes • 70% to pass</p>
              </div>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground">🎯 Categories</h3>
                <p className="text-sm text-muted-foreground">Solana Basics, Cryptography, Wallets, Transactions, Network</p>
              </div>
            </div>
          </div>
          <Button onClick={startExam} size="lg" className="bg-foreground text-background hover:bg-foreground/90">
            Start Exam
          </Button>
        </div>
      </Card>
    )
  }

  if (examCompleted && examResult) {
    return (
      <>
        {examResult.passed && <Fireworks />}
        <Card className="p-6 max-w-4xl mx-auto border border-border">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                {examResult.passed ? '🎉 Congratulations!' : '📚 Keep Learning!'}
              </h2>
              
              {examResult.passed && (
                <div className="mb-6 p-6 bg-muted rounded-lg border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">🎊 Phase 1 Complete!</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    You are absolutely amazing for completing Phase 1 of the course! If you have any questions, 
                    please book a meeting with Mr. Hieu K2 to get them answered!
                  </p>
                </div>
              )}
              
              <div className={`text-2xl font-bold mb-2 ${
                examResult.passed ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                Score: {examResult.score.toFixed(1)}%
              </div>
              <p className={`text-lg ${
                examResult.passed 
                  ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {examResult.passed 
                  ? `You passed! (${examResult.correctAnswers}/${examResult.totalQuestions} correct)`
                  : `You need ${Math.ceil(examResult.totalQuestions * 0.7) - examResult.correctAnswers} more correct answers to pass`
                }
              </p>
            </div>

            {/* Booking Link - Show immediately when passed */}
            {showBookingLink && (
              <div className="mb-6">
                <GoogleCalendarEmbed
                  calendarUrl="https://calendar.app.google/emhsULXSy1cNFW7Q8"
                  title="📅 Ready for the Next Step? - Trung Hiếu Bùi"
                  className="bg-muted border-border"
                />
              </div>
            )}

            {/* Category Performance */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Category Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(examResult.categoryScores).map(([category, scores]) => (
                  <div key={category} className="bg-muted p-4 rounded-lg border border-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{category}</span>
                      <span className={`font-bold ${
                        scores.percentage >= 70 ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {scores.percentage.toFixed(1)}%
                      </span>
                    </div>
                    <Progress 
                      value={scores.percentage} 
                      className="h-2"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      {scores.correct}/{scores.total} correct
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowReview(!showReview)}
                variant="outline"
                className="border-border text-foreground hover:bg-muted"
              >
                {showReview ? 'Hide Review' : 'Review Answers'}
              </Button>
              <Button 
                onClick={resetExam}
                variant="outline"
                className="border-border text-foreground hover:bg-muted"
              >
                Retake Exam
              </Button>
            </div>

            {/* Review Section */}
            {showReview && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Answer Review</h3>
                {questions.map((question, index) => (
                  <div key={question.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <span className={`font-bold text-sm px-2 py-1 rounded ${
                        answers[index] === question.correctAnswer
                          ? 'bg-muted text-foreground border border-border'
                          : 'bg-muted text-muted-foreground border border-border'
                      }`}>
                        Q{question.id}
                      </span>
                      <span className="text-sm text-muted-foreground">{question.category}</span>
                      <span className="text-sm text-muted-foreground">({question.difficulty})</span>
                    </div>
                    <p className="font-medium mb-3 text-foreground">{question.question}</p>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className={`p-2 rounded border ${
                            optionIndex === question.correctAnswer
                              ? 'bg-muted border-border'
                              : optionIndex === answers[index] && answers[index] !== question.correctAnswer
                              ? 'bg-muted border-border'
                              : 'bg-background border-border'
                          }`}
                        >
                          <span className={`font-medium ${
                            optionIndex === question.correctAnswer
                              ? 'text-foreground'
                              : optionIndex === answers[index] && answers[index] !== question.correctAnswer
                              ? 'text-muted-foreground'
                              : 'text-foreground'
                          }`}>
                            {String.fromCharCode(65 + optionIndex)}. {option}
                          </span>
                          {optionIndex === question.correctAnswer && (
                            <span className="ml-2 text-foreground font-semibold">✓ Correct</span>
                          )}
                          {optionIndex === answers[index] && answers[index] !== question.correctAnswer && (
                            <span className="ml-2 text-muted-foreground font-semibold">✗ Your Answer</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 p-3 bg-muted rounded border border-border">
                      <p className="text-sm text-foreground">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      </>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <Card className="p-6 max-w-4xl mx-auto border border-border">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Question {currentQuestion + 1} of {questions.length}</h2>
          <p className="text-muted-foreground">{currentQ.category} • {currentQ.difficulty}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-foreground">{formatTime(timeLeft)}</div>
          <div className="text-sm text-muted-foreground">Time Remaining</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-3" />
      </div>

      {/* Current Score Display */}
      <div className="mb-6 p-4 bg-muted rounded-lg border border-border">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-foreground">Current Score</span>
          <span className={`text-lg font-bold ${
            currentScore >= 70 ? 'text-foreground' : 'text-muted-foreground'
          }`}>
            {currentScore.toFixed(1)}%
          </span>
        </div>
        <div className="mt-2">
          <Progress 
            value={currentScore} 
            className="h-2"
          />
        </div>
      </div>

      {/* Booking Link - Show during exam if score >= 70% */}
      {showBookingLink && (
        <div className="mb-6">
          <GoogleCalendarEmbed
            calendarUrl="https://calendar.app.google/emhsULXSy1cNFW7Q8"
            title="📅 K2 Lounge - Trung Hiếu Bùi"
            className="bg-muted border-border"
          />
        </div>
      )}

      {/* Question */}
      <div className="mb-6">
        <p className="text-lg font-medium mb-6 text-foreground">{currentQ.question}</p>
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedAnswer === index
                  ? 'border-foreground bg-muted'
                  : 'border-border hover:border-foreground/50 hover:bg-muted/50'
              }`}
            >
              <span className="font-medium text-foreground">
                {String.fromCharCode(65 + index)}. {option}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
          variant="outline"
          className="border-border text-foreground hover:bg-muted"
        >
          ← Previous
        </Button>
        <Button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className="bg-foreground text-background hover:bg-foreground/90"
        >
          {currentQuestion === questions.length - 1 ? 'Finish Exam' : 'Next →'}
        </Button>
      </div>
    </Card>
  )
}
