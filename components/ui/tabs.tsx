"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const TabsContext = React.createContext<{
  activeTab: string
  setActiveTab: (tab: string) => void
}>({
  activeTab: "",
  setActiveTab: () => {},
})

export function TabbedContent({
  children,
  defaultTab,
  className,
}: {
  children: React.ReactNode
  defaultTab?: string
  className?: string
}) {
  const [activeTab, setActiveTab] = React.useState(defaultTab || "")
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export function TabList({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn(
      "flex border-b border-gray-200 dark:border-gray-700",
      className
    )}>
      {children}
    </div>
  )
}

export function Tab({
  value,
  children,
  className,
}: {
  value: string
  children: React.ReactNode
  className?: string
}) {
  const { activeTab, setActiveTab } = React.useContext(TabsContext)
  const isActive = activeTab === value
  
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn(
        "px-6 py-3 text-sm font-medium transition-all duration-200 ease-in-out",
        "border-b-2 border-transparent",
        "hover:text-blue-600 hover:border-blue-300",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        isActive && "text-blue-600 border-blue-600",
        !isActive && "text-gray-500 hover:text-gray-700",
        className
      )}
    >
      {children}
    </button>
  )
}

export function TabContent({
  value,
  children,
  className,
}: {
  value: string
  children: React.ReactNode
  className?: string
}) {
  const { activeTab } = React.useContext(TabsContext)
  
  if (activeTab !== value) return null
  
  return (
    <div
      className={cn(
        "animate-in fade-in-0 slide-in-from-top-2 duration-300",
        "py-6",
        className
      )}
    >
      {children}
    </div>
  )
}
