
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { CheckCircle, AlertTriangle } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        const isDestructive = variant === 'destructive';
        const Icon = isDestructive ? AlertTriangle : CheckCircle;
        
        return (
          <Toast key={id} variant={variant} {...props} className="p-3 w-full">
            <div className="flex flex-col gap-2 w-full">
              {/* Header */}
              <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${isDestructive ? 'text-destructive' : 'text-green-500'}`} />
                      <span className="text-xs font-bold uppercase text-foreground">Petakan</span>
                  </div>
                  <span className="text-xs text-muted-foreground">now</span>
              </div>
              
              {/* Body */}
              <div className="w-full pl-1">
                {title && <ToastTitle className={`font-semibold ${isDestructive ? 'text-destructive' : 'text-foreground'}`}>{title}</ToastTitle>}
                {description && (
                  <ToastDescription className={isDestructive ? 'text-destructive/90' : 'text-foreground/90'}>{description}</ToastDescription>
                )}
              </div>
              {action}
            </div>
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
