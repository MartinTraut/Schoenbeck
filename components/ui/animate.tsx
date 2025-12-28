"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AnimateProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale"
  delay?: number
  duration?: number
  once?: boolean
}

const Animate = React.forwardRef<HTMLDivElement, AnimateProps>(
  (
    {
      className,
      animation = "fade-up",
      delay = 0,
      duration = 500,
      once = true,
      children,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const elementRef = React.useRef<HTMLDivElement>(null)

    React.useImperativeHandle(ref, () => elementRef.current!)

    React.useEffect(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches

      if (prefersReducedMotion) {
        setIsVisible(true)
        return
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay)
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      )

      if (elementRef.current) {
        observer.observe(elementRef.current)
      }

      return () => observer.disconnect()
    }, [delay, once])

    const animationClasses = {
      "fade-up": isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8",
      "fade-in": isVisible ? "opacity-100" : "opacity-0",
      "slide-left": isVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-8",
      "slide-right": isVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-8",
      scale: isVisible
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95",
    }

    return (
      <div
        ref={elementRef}
        className={cn(
          "transition-all ease-out",
          animationClasses[animation],
          className
        )}
        style={{ transitionDuration: `${duration}ms` }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Animate.displayName = "Animate"

export { Animate }
