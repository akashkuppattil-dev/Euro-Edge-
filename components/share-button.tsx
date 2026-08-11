"use client"

import { useState } from "react"
import { Share2, Check } from "lucide-react"

interface ServiceShareButtonProps {
  slug: string
  title: string
  shortDesc: string
}

export function ServiceShareButton({ slug, title, shortDesc }: ServiceShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const shareUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/services/${slug}`
        : `https://euroedgets.com/services/${slug}`

    const shareData = {
      title: `${title} | Euro Edge Technical Services Dubai`,
      text: shortDesc,
      url: shareUrl,
    }

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch (err) {
        // User cancelled or share API unavailable
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      } catch (err) {
        console.error("Failed to copy URL:", err)
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      title="Share service"
      aria-label={`Share ${title}`}
      className="relative p-2.5 sm:p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0a2540] hover:text-[#fbb03b] text-slate-700 dark:text-slate-200 font-bold transition-all duration-200 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center flex-shrink-0 group/share shadow-2xs"
    >
      {copied ? (
        <Check className="w-4 h-4 text-emerald-500" />
      ) : (
        <Share2 className="w-4 h-4 group-hover/share:scale-110 transition-transform" />
      )}
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0a2540] text-white text-[10px] font-mono rounded-lg shadow-md whitespace-nowrap z-20 animate-in fade-in zoom-in-95 duration-150">
          Copied!
        </span>
      )}
    </button>
  )
}
