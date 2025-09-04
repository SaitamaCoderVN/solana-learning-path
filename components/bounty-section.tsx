"use client"

import React from 'react'
import SimpleBounties from './simple-bounties'

interface BountySectionProps {
  phase: 'Phase 1' | 'Phase 2' | 'Phase 3'
}

export default function BountySection({ phase }: BountySectionProps) {
  return <SimpleBounties phase={phase} />
}