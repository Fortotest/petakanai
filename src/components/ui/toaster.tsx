
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

        return (
          <Toast key={id} variant={variant} {...props} className="p-3">
            {/* Header */}
            <div className="flex items-center justify-between w-full mb-1">
                <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${iconColor}`} />
                    <span className="text-xs font-semibold uppercase text-gray-500">Petakan.ai</span>
                </div>
                <span className="text-xs text-gray-500">now</span>
            </div>
            
            {/* Body */}
            <div className="w-full pl-0">
              {title && <ToastTitle className="font-bold text-black">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-black">{description}</ToastDescription>
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
