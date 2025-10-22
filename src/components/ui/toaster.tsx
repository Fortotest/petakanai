
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
        const iconColor = isDestructive ? 'text-destructive' : 'text-green-500';
        const titleColor = isDestructive ? 'text-destructive' : 'text-foreground';

        return (
          <Toast key={id} variant={variant} {...props} className="p-3">
            {/* Header */}
            <div className="flex items-center justify-between w-full mb-1">
                <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${iconColor}`} />
                    <span className="text-xs font-semibold uppercase text-muted-foreground">Petakan.ai</span>
                </div>
                <span className="text-xs text-muted-foreground">now</span>
            </div>
            
            {/* Body */}
            <div className="w-full pl-0">
              {title && <ToastTitle className={`font-bold ${titleColor}`}>{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-foreground/90">{description}</ToastDescription>
              )}
            </div>
            {action}
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
