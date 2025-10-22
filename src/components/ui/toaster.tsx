
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
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
        const Icon = variant === 'destructive' ? AlertTriangle : CheckCircle;
        const iconColor = variant === 'destructive' ? 'text-red-500' : 'text-green-500';

        return (
          <Toast key={id} variant={variant} {...props}>
            <div className="flex items-center justify-between w-full mb-2">
                <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${iconColor}`} />
                    <span className="text-xs font-semibold uppercase text-gray-500">Petakan.ai</span>
                </div>
                <span className="text-xs text-gray-500">now</span>
            </div>
            <div className="w-full pl-0">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
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
