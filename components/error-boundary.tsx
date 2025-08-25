"use client"

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <Card className="max-w-md mx-auto mt-4 sm:mt-8 mx-4 sm:mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
              Something went wrong
            </CardTitle>
            <CardDescription className="text-sm">
              An error occurred while rendering this component.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {this.state.error && (
              <details className="text-xs sm:text-sm text-muted-foreground">
                <summary className="cursor-pointer hover:text-foreground">
                  Error details
                </summary>
                <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <Button onClick={this.handleRetry} className="w-full text-sm">
              <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Try again
            </Button>
          </CardContent>
        </Card>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
