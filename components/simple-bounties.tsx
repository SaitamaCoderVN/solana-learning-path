"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trophy, ExternalLink, Calendar, DollarSign } from 'lucide-react'
import { getBountyConfig } from '@/lib/bounty-config'

interface SimpleBountiesProps {
  phase: 'Phase 1' | 'Phase 2' | 'Phase 3'
}

export default function SimpleBounties({ phase }: SimpleBountiesProps) {
  const bountyConfig = getBountyConfig(phase)

  if (!bountyConfig) {
    return null
  }

  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="space-y-4">
      {/* Phase Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          🏆 {phase} Bounties
        </h3>
        <p className="text-muted-foreground">
          Complete {bountyConfig.requiredBounties} bounties to finish this phase
        </p>
      </div>

      {/* Bounties List */}
      <div className="space-y-3">
        {bountyConfig.bounties.map((bounty, index) => (
          <Card key={bounty.id} className="border border-border hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {/* Number */}
                  <div className="mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      #{index + 1}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div className="mb-3">
                    <h4 className="font-bold text-foreground text-lg">
                      {bounty.title}
                    </h4>
                  </div>
                  
                  {/* Reward and Deadline */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-bold text-green-600 text-base">
                        {bounty.reward}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-muted-foreground text-base">
                        {formatDeadline(bounty.deadline)}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* View Button */}
                <Button 
                  size="sm"
                  className="bg-foreground text-background hover:bg-foreground/90 px-4 py-2 ml-4"
                  onClick={() => window.open(bountyConfig.bountyLink, '_blank')}
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  View
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* External Link */}
      <div className="text-center pt-4">
        <Button 
          variant="outline"
          onClick={() => window.open(bountyConfig.bountyLink, '_blank')}
          className="text-foreground border-foreground hover:bg-foreground hover:text-background"
        >
          <Trophy className="w-4 h-4 mr-2" />
          Visit All Bounties
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
