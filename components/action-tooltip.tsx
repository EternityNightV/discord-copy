'use client'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'

interface ActionTooltipProps {
    label : string ,
    childern : React.ReactNode,
    side ?: 'top' | 'right' | 'bottom' | 'left'
    align?: "start" | "center" | "end";
}