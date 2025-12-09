import React from 'react'
import {cn} from "@/lib/utils"
function Container({children, className}:{children: React.ReactNode, className?: String}) {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7xl py-8", className)}>{children}</div>
  )
}

export default Container