"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, Play, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GoogleSlidesEmbedProps {
  title: string
  description?: string
  slidesUrl: string
  thumbnailUrl?: string
}

export default function GoogleSlidesEmbed({ 
  title, 
  description, 
  slidesUrl, 
  thumbnailUrl 
}: GoogleSlidesEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [iframeKey, setIframeKey] = useState(0)
  
  // Convert regular Google Slides URL to embed URL
  const getEmbedUrl = (url: string) => {
    try {
      // Handle different Google Slides URL formats
      if (url.includes('/presentation/d/')) {
        const match = url.match(/\/presentation\/d\/([a-zA-Z0-9-_]+)/)
        if (match) {
          return `https://docs.google.com/presentation/d/e/${match[1]}/pubembed?start=false&loop=false&delayms=5000`
        }
      } else if (url.includes('/d/')) {
        const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/)
        if (match) {
          return `https://docs.google.com/presentation/d/e/${match[1]}/pubembed?start=false&loop=false&delayms=5000`
        }
      }
      
      return url
    } catch (error) {
      console.warn('Error parsing Google Slides URL:', error)
      return url
    }
  }

  const embedUrl = getEmbedUrl(slidesUrl)
  const canEmbed = embedUrl !== slidesUrl

  useEffect(() => {
    // Set loading to false after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleIframeLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const handleRetry = () => {
    setHasError(false)
    setIframeKey(prev => prev + 1) // Force iframe reload
  }

  // Prevent CORS issues by using a more secure approach
  const secureEmbedUrl = canEmbed ? embedUrl : slidesUrl

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
        {description && (
          <CardDescription className="text-sm">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="p-0">
        {canEmbed ? (
          <div className="relative">
            {isLoading && (
              <div className="absolute inset-0 bg-muted/50 flex items-center justify-center z-10">
                <div className="text-center p-4">
                  <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 mx-auto animate-spin mb-2" />
                  <p className="text-xs sm:text-sm text-muted-foreground">Loading presentation...</p>
                </div>
              </div>
            )}
            
            {hasError ? (
              <div className="p-4 sm:p-6 text-center">
                <AlertCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-destructive mb-4" />
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Failed to load presentation. This may be due to CORS restrictions.
                </p>
                <div className="space-y-2 sm:space-y-0 sm:space-x-2 sm:flex sm:justify-center">
                  <Button 
                    onClick={handleRetry}
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    Retry
                  </Button>
                  <Button 
                    onClick={() => window.open(slidesUrl, '_blank')}
                    variant="default"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Open in New Tab
                  </Button>
                </div>
              </div>
            ) : (
              <iframe
                key={iframeKey}
                src={secureEmbedUrl}
                width="100%"
                height="300"
                className="w-full sm:h-[600px]"
                allowFullScreen
                title={title}
                allow="autoplay; fullscreen; picture-in-picture"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                referrerPolicy="no-referrer"
              />
            )}

            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4">
              <Button 
                size="sm" 
                variant="secondary"
                onClick={() => window.open(embedUrl, '_blank')}
                className="bg-white/90 hover:bg-white shadow-lg text-xs sm:text-sm"
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Open in Slides</span>
                <span className="sm:hidden">Open</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-4 sm:p-6 text-center">
            <div className="mb-4">
              <AlertCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-muted-foreground" />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Google Slides presentation
            </p>
            <Button 
              onClick={() => window.open(slidesUrl, '_blank')}
              className="w-full"
              size="sm"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              View Presentation
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
