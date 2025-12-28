"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  openItems: string[]
  toggle: (value: string) => void
  type: "single" | "multiple"
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null)

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  collapsible?: boolean
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", defaultValue, children, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<string[]>(
      Array.isArray(defaultValue)
        ? defaultValue
        : defaultValue
        ? [defaultValue]
        : []
    )

    const toggle = React.useCallback(
      (value: string) => {
        setOpenItems((prev) => {
          if (type === "single") {
            return prev.includes(value) ? [] : [value]
          }
          return prev.includes(value)
            ? prev.filter((v) => v !== value)
            : [...prev, value]
        })
      },
      [type]
    )

    return (
      <AccordionContext.Provider value={{ openItems, toggle, type }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext)
    const isOpen = context?.openItems.includes(value) ?? false

    return (
      <div
        ref={ref}
        data-state={isOpen ? "open" : "closed"}
        className={cn("border-b", className)}
        {...props}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<{ value?: string; isOpen?: boolean }>, {
                value,
                isOpen,
              })
            : child
        )}
      </div>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string
  isOpen?: boolean
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, value, isOpen, ...props }, ref) => {
  const context = React.useContext(AccordionContext)

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => value && context?.toggle(value)}
      className={cn(
        "flex flex-1 w-full items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, isOpen, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden text-sm transition-all duration-200",
          isOpen ? "animate-accordion-down" : "animate-accordion-up hidden",
          className
        )}
        {...props}
      >
        <div className="pb-4 pt-0">{children}</div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
