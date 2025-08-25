"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, BookOpen, Video, FileText, Code, Globe } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface Resource {
  id: string
  title: string
  description: string
  type: 'video' | 'document' | 'tutorial' | 'code' | 'website'
  url: string
  duration?: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  tags: string[]
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Solana Architecture Overview',
    description: 'Comprehensive overview of Solana\'s blockchain architecture and design principles',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=vrO6cjdPUOs',
    duration: '15 min',
    difficulty: 'Beginner',
    tags: ['Architecture', 'Blockchain', 'Overview']
  },
  {
    id: '2',
    title: 'Cryptography Fundamentals',
    description: 'Learn the basics of cryptography used in Solana including key generation and digital signatures',
    type: 'tutorial',
    url: 'https://solana.com/en/developers/courses/intro-to-solana/intro-to-cryptography',
    duration: '20 min',
    difficulty: 'Beginner',
    tags: ['Cryptography', 'Security', 'Keys']
  },
  {
    id: '3',
    title: 'Transaction Lifecycle',
    description: 'Understanding how transactions flow through the Solana network from creation to confirmation',
    type: 'document',
    url: 'https://solana.com/en/developers/guides/advanced/confirmation',
    duration: '25 min',
    difficulty: 'Intermediate',
    tags: ['Transactions', 'Network', 'Confirmation']
  },
  {
    id: '4',
    title: 'Solana Development Setup',
    description: 'Step-by-step guide to set up your Solana development environment',
    type: 'tutorial',
    url: 'https://solana.com/en/developers/guides/getstarted',
    duration: '30 min',
    difficulty: 'Beginner',
    tags: ['Setup', 'Development', 'Environment']
  },
  {
    id: '5',
    title: 'Wallet Integration Guide',
    description: 'Learn how to integrate wallets with your Solana applications',
    type: 'code',
    url: 'https://solana.com/en/developers/guides/wallet-integration',
    duration: '45 min',
    difficulty: 'Intermediate',
    tags: ['Wallets', 'Integration', 'DApps']
  },
  {
    id: '6',
    title: 'Solana Program Development',
    description: 'Introduction to developing smart contracts (programs) on Solana',
    type: 'tutorial',
    url: 'https://solana.com/en/developers/guides/program-development',
    duration: '60 min',
    difficulty: 'Advanced',
    tags: ['Smart Contracts', 'Programs', 'Development']
  }
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'video':
      return <Video className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
    case 'document':
      return <FileText className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
    case 'tutorial':
      return <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
    case 'code':
      return <Code className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
    case 'website':
      return <Globe className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
    default:
      return <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
  }
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'Advanced':
      return 'bg-red-100 text-red-800 border-red-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export default function LearningResources() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('')

  const allTags = Array.from(new Set(resources.flatMap(r => r.tags)))
  const allDifficulties = ['Beginner', 'Intermediate', 'Advanced']

  const filteredResources = resources.filter(resource => {
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => resource.tags.includes(tag))
    const matchesDifficulty = selectedDifficulty === '' || 
      resource.difficulty === selectedDifficulty
    return matchesTags && matchesDifficulty
  })

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSelectedTags([])
    setSelectedDifficulty('')
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm sm:text-base">Filter Resources</CardTitle>
          <CardDescription className="text-xs sm:text-sm">Find the learning materials that match your needs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Difficulty Filter */}
          <div>
            <h4 className="font-medium mb-2 text-xs sm:text-sm">Difficulty Level</h4>
            <div className="flex flex-wrap gap-2">
              {allDifficulties.map(difficulty => (
                <Button
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "default" : "outline"}
                  size="sm"
                  className="text-xs px-3 py-1 h-8 min-w-fit"
                  onClick={() => setSelectedDifficulty(
                    selectedDifficulty === difficulty ? '' : difficulty
                  )}
                >
                  {difficulty}
                </Button>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div>
            <h4 className="font-medium mb-2 text-xs sm:text-sm">Topics</h4>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  size="sm"
                  className="text-xs px-3 py-1 h-8 min-w-fit"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(selectedTags.length > 0 || selectedDifficulty !== '') && (
            <Button variant="ghost" onClick={clearFilters} size="sm" className="text-xs h-8">
              Clear All Filters
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredResources.map(resource => (
          <Card key={resource.id} className="h-full flex flex-col overflow-hidden">
            <CardHeader className="pb-3 flex-shrink-0">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2 text-muted-foreground min-w-0 flex-1">
                  {getTypeIcon(resource.type)}
                  <span className="text-xs capitalize">{resource.type}</span>
                </div>
                {resource.difficulty && (
                  <Badge className={`${getDifficultyColor(resource.difficulty)} text-xs border px-3 py-1 flex-shrink-0 whitespace-nowrap`}>
                    {resource.difficulty}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-sm sm:text-base leading-tight mb-2 break-words">
                {resource.title}
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm leading-relaxed break-words">
                {resource.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex-1 flex flex-col min-w-0">
              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                {resource.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs px-2 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Duration */}
              {resource.duration && (
                <div className="text-xs text-muted-foreground mb-3 sm:mb-4 flex items-center gap-1">
                  <span>⏱️</span>
                  <span>{resource.duration}</span>
                </div>
              )}

              {/* Action Button */}
              <div className="mt-auto pt-2">
                <Button 
                  onClick={() => window.open(resource.url, '_blank')}
                  className="w-full text-xs h-8"
                  size="sm"
                >
                  <ExternalLink className="w-3 h-3 mr-2 flex-shrink-0" />
                  Open Resource
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredResources.length === 0 && (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              No resources match your current filters.
            </p>
            <Button variant="outline" onClick={clearFilters} size="sm" className="text-xs h-8">
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
