import * as React from 'react'

import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'relative flex h-auto min-h-12 w-full resize-none rounded-2xl border-2 border-gray-700 bg-background px-3 py-2 text-lg font-medium shadow-[0px_2px_0px_1px_#40403F] placeholder:text-gray-400 focus:translate-y-0.5 focus:shadow-[0px_1px_0px_1px_#40403F] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
