"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface Safari_01Props {
  children?: React.ReactNode
  className?: string
  contentPadding?: string
  minHeight?: string
  minWidth?: string
}

const Safari_01: React.FC<Safari_01Props> = ({ children, className, contentPadding = "pt-32", minHeight = "min-h-[450px]", minWidth = "min-w-[700px]" }) => {
  return (
    <div
      className={cn(
        minWidth + " rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden",
        className
      )}
    >
      {/* Browser top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-white/10">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="flex-1 mx-4 bg-white/5 rounded-full h-7 max-w-md flex items-center px-3">
          <div className="w-2 h-2 rounded-full bg-green-400 mr-2" />
          <span className="text-xs text-gray-500">devsync.ai</span>
        </div>
        <div className="w-4 h-4" /> {/* Placeholder for right side icons */}
      </div>

      {/* Content area */}
      <div className={`bg-[#0a0a0a] px-8 overflow-hidden ${minHeight} ${contentPadding}`}>
        {children || (
          <div className="text-sm text-gray-500">
            No content
          </div>
        )}
      </div>
    </div>
  )
}

export default Safari_01
