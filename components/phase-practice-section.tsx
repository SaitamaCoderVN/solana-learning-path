"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ExternalLink, 
  Github, 
  Code2, 
  CheckCircle,
  Clock,
  BookOpen
} from 'lucide-react'
import SolanaPracticeQuiz from './solana-practice-quiz'
import { Question } from '@/lib/practice-questions-phase1'
import { essayAssignments } from '@/lib/essay-assignments'

interface PhasePracticeSectionProps {
  phase: 'Phase 1' | 'Phase 2' | 'Phase 3'
  practiceQuestions: Question[]
  title: string
  description?: string
}

export default function PhasePracticeSection({ 
  phase, 
  practiceQuestions, 
  title, 
  description 
}: PhasePracticeSectionProps) {
  // Filter essay assignments for this specific phase
  const phaseAssignments = essayAssignments.filter(
    assignment => assignment.phase === phase
  )

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-300'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-300'
      default: return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  return (
    <div className="space-y-8">
      {/* Practice Questions Section */}
      <div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            📝 {title} - Practice Questions
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground">{description}</p>
          )}
          <p className="text-muted-foreground mt-2">
            Test your knowledge with these practice questions. Complete all questions to prepare for the exam.
          </p>
        </div>
        
        <SolanaPracticeQuiz 
          questions={practiceQuestions}
          title={title}
          description={description}
        />
      </div>

      {/* Essay Assignments Section */}
      <div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            🚀 {title} - Hands-On Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Apply your knowledge with practical coding assignments and real-world projects.
          </p>
        </div>



        {/* Assignments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {phaseAssignments.map((assignment) => (
            <Card key={assignment.id} className="border border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {assignment.title}
                  </h3>
                  <Badge className={getDifficultyColor(assignment.difficulty)}>
                    {assignment.difficulty}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="border-border text-muted-foreground">
                    {assignment.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Description */}
                <p className="text-muted-foreground line-clamp-3">
                  {assignment.description}
                </p>

                {/* Learning Objectives */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Learning Objectives:</h4>
                  <ul className="space-y-1">
                    {assignment.learningObjectives.slice(0, 3).map((objective, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        {objective}
                      </li>
                    ))}
                    {assignment.learningObjectives.length > 3 && (
                      <li className="text-xs text-muted-foreground">
                        +{assignment.learningObjectives.length - 3} more objectives
                      </li>
                    )}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {assignment.requirements.slice(0, 2).map((requirement, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                        <Clock className="w-3 h-3 text-blue-600" />
                        {requirement}
                      </li>
                    ))}
                    {assignment.requirements.length > 2 && (
                      <li className="text-xs text-muted-foreground">
                        +{assignment.requirements.length - 2} more requirements
                      </li>
                    )}
                  </ul>
                </div>



                {/* Estimated Time */}
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-foreground font-medium">Estimated Time:</span>
                    <span className="text-muted-foreground">{assignment.estimatedTime}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-foreground text-background hover:bg-foreground/90"
                    onClick={() => window.open(assignment.githubRepo, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Repository
                  </Button>
                  
                  {assignment.githubIssues.length > 0 && (
                    <Button 
                      variant="outline" 
                      className="w-full border-border text-foreground hover:bg-muted"
                      onClick={() => window.open(assignment.githubIssues[0], '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Issues
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {phaseAssignments.length === 0 && (
          <Card>
            <CardContent className="pt-6 text-center">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No projects available yet</h3>
              <p className="text-muted-foreground">
                Projects for this phase are coming soon. Focus on the practice questions first!
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
