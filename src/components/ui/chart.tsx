"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Simplified chart exports for now - full recharts integration can be added later
export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("w-full h-full", className)} {...props}>
    {children}
  </div>
))
ChartContainer.displayName = "ChartContainer"

export const ChartTooltip = ({ children }: { children?: React.ReactNode }) => (
  <>{children}</>
)

export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-background p-2 shadow-md",
      className
    )}
    {...props}
  />
))
ChartTooltipContent.displayName = "ChartTooltipContent"