"use client"

import React, { useState, useEffect, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, XCircle, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react'

interface Question {
  id: number
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface PracticeQuizProps {
  questions: Question[]
  title: string
  description?: string
}

export default function SolanaPracticeQuiz({ questions, title, description }: PracticeQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())
  const [correctAnswers, setCorrectAnswers] = useState<Set<number>>(new Set())

  const currentQ = questions[currentQuestion]
  const isAnswered = answeredQuestions.has(currentQuestion)

  // Create unique storage keys based on title - use stable hash
  const storageKeyAnswered = useMemo(() => {
    const hash = title.split('').reduce((a, b) => {
      a = ((a << 5) - a + b.charCodeAt(0)) & 0xffffffff
      return a
    }, 0)
    return `practice-answered-${Math.abs(hash)}`
  }, [title])
  
  const storageKeyCorrect = useMemo(() => {
    const hash = title.split('').reduce((a, b) => {
      a = ((a << 5) - a + b.charCodeAt(0)) & 0xffffffff
      return a
    }, 0)
    return `practice-correct-${Math.abs(hash)}`
  }, [title])

  // Load saved progress from localStorage on component mount
  useEffect(() => {
    try {
      const savedAnswered = localStorage.getItem(storageKeyAnswered)
      const savedCorrect = localStorage.getItem(storageKeyCorrect)
      
      if (savedAnswered && savedAnswered !== '[]') {
        const parsedAnswered = JSON.parse(savedAnswered)
        if (Array.isArray(parsedAnswered) && parsedAnswered.length > 0) {
          setAnsweredQuestions(new Set(parsedAnswered))
        }
      }
      if (savedCorrect && savedCorrect !== '[]') {
        const parsedCorrect = JSON.parse(savedCorrect)
        if (Array.isArray(parsedCorrect) && parsedCorrect.length > 0) {
          setCorrectAnswers(new Set(parsedCorrect))
        }
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error)
    }
  }, [storageKeyAnswered, storageKeyCorrect])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (answeredQuestions.size > 0 || correctAnswers.size > 0) {
      try {
        localStorage.setItem(storageKeyAnswered, JSON.stringify([...answeredQuestions]))
        localStorage.setItem(storageKeyCorrect, JSON.stringify([...correctAnswers]))
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }
    }
  }, [answeredQuestions, correctAnswers, storageKeyAnswered, storageKeyCorrect])

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return
    
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    const newAnsweredQuestions = new Set([...answeredQuestions, currentQuestion])
    setAnsweredQuestions(newAnsweredQuestions)
    
    if (answerIndex === currentQ.correctAnswer) {
      const newCorrectAnswers = new Set([...correctAnswers, currentQuestion])
      setCorrectAnswers(newCorrectAnswers)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answeredQuestions.has(currentQuestion - 1) ? selectedAnswer : null)
      setShowExplanation(answeredQuestions.has(currentQuestion - 1))
    }
  }

  const handleReset = () => {
    setAnsweredQuestions(new Set())
    setCorrectAnswers(new Set())
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    
    try {
      localStorage.removeItem(storageKeyAnswered)
      localStorage.removeItem(storageKeyCorrect)
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  }

  const isCorrect = selectedAnswer === currentQ.correctAnswer

  return (
    <Card className="p-6 max-w-4xl mx-auto border border-border">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
        {description && (
          <p className="text-muted-foreground mb-4">{description}</p>
        )}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-medium text-foreground">
              Practice Question
            </p>
            <p className="text-muted-foreground">
              {currentQ.category} • {currentQ.difficulty}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Progress</p>
            <p className="text-lg font-bold text-foreground">
              {answeredQuestions.size}/{questions.length} Completed
            </p>
          </div>
        </div>
      </div>

      {/* Correct Answers Counter */}
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold">Correct Answers</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-green-700">
              {correctAnswers.size}/{questions.length}
            </span>
            <span className="text-green-600">
              ({Math.round((correctAnswers.size / questions.length) * 100)}%)
            </span>
          </div>
        </div>
        <div className="mt-2">
          <Progress 
            value={(correctAnswers.size / questions.length) * 100} 
            className="h-2 bg-green-100"
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <p className="text-lg font-medium mb-6 text-foreground">{currentQ.question}</p>
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                isAnswered
                  ? index === currentQ.correctAnswer
                    ? 'border-green-500 bg-green-50'
                    : index === selectedAnswer && index !== currentQ.correctAnswer
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 bg-gray-50'
                  : selectedAnswer === index
                  ? 'border-foreground bg-muted'
                  : 'border-border hover:border-foreground/50 hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">
                  {String.fromCharCode(65 + index)}. {option}
                </span>
                {isAnswered && (
                  <div className="flex items-center gap-2">
                    {index === currentQ.correctAnswer && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    {index === selectedAnswer && index !== currentQ.correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="mb-6 p-4 bg-muted rounded-lg border border-border">
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600" />
            )}
            <span className={`font-semibold ${
              isCorrect ? 'text-green-700' : 'text-red-700'
            }`}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          <p className="text-foreground">
            <strong>Explanation:</strong> {currentQ.explanation}
          </p>
        </div>
      )}

      {/* Navigation and Reset */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            variant="outline"
            className="border-border text-foreground hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={handleNextQuestion}
            disabled={currentQuestion === questions.length - 1}
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            Next
            <ArrowRight className="w-4 h-4 mr-2" />
          </Button>
        </div>
        
        <Button
          onClick={handleReset}
          variant="outline"
          className="border-red-200 text-red-700 hover:bg-red-50"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset All
        </Button>
      </div>

      {/* Completion Message */}
      {answeredQuestions.size === questions.length && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-lg font-semibold text-green-800">
              Congratulations! You've completed all practice questions.
            </span>
          </div>
          <p className="text-green-700 mt-2">
            You got {correctAnswers.size} out of {questions.length} questions correct ({Math.round((correctAnswers.size / questions.length) * 100)}%).
            {correctAnswers.size === questions.length 
              ? " Perfect score! You're ready for the exam."
              : " Review the questions you got wrong before taking the exam."
            }
          </p>
        </div>
      )}
    </Card>
  )
}
