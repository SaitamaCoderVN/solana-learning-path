"use client"

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'

interface GoogleCalendarEmbedProps {
  calendarUrl: string
  title?: string
  className?: string
}

export function GoogleCalendarEmbed({ 
  calendarUrl, 
  title = "📅 K2 Lounge - Trung Hiếu Bùi",
  className = "" 
}: GoogleCalendarEmbedProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center">
          {!imageError ? (
            <img 
              src="https://lh3.googleusercontent.com/a-/ALV-UjUUWQV_y9JeQ9wVch3vQ7zQFLEz50lT3tPWpQX5bvulXHlFBTAdeg=s40-c-mo"
              alt="Trung Hiếu Bùi"
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground font-semibold text-lg">TH</span>
            </div>
          )}
        </div>
        
        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-foreground text-base mb-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
          You are awesome for completing part 1 of the course and if you have any questions, please make an appointment with Mr. Hieu K2 to get them answered!
          </p>
          <a 
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 text-sm break-all transition-colors"
          >
            {calendarUrl}
          </a>
        </div>
      </div>
    </Card>
  )
}
