import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "dark"
  size?: "sm" | "default" | "lg" | "xl"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "w-full",
          {
            "bg-background": variant === "default",
            "bg-muted/50": variant === "muted",
            "bg-foreground text-background": variant === "dark",
          },
          {
            "py-12 md:py-16": size === "sm",
            "py-16 md:py-24": size === "default",
            "py-20 md:py-32": size === "lg",
            "py-24 md:py-40": size === "xl",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Section }
