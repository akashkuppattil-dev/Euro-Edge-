"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export const INTRO_CONFIG = {
  SHOW_INTRO: true,
  INTRO_DURATION: 5000,
  FADEOUT_DURATION: 800,
  REDUCED_MOTION_DURATION: 600,
  FAILSAFE_TIMEOUT: 6000,
  STORAGE_KEY: "euroedge_intro_completed",
  QUERY_OVERRIDE_KEY: "intro",
}

export function LogoIntro() {
  const [shouldRender, setShouldRender] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [step, setStep] = useState<"init" | "ring" | "blue" | "silver" | "sweep" | "settle" | "complete">("init")
  const timerRefs = useRef<NodeJS.Timeout[]>([])

  const cleanupTimers = () => {
    timerRefs.current.forEach((t) => clearTimeout(t))
    timerRefs.current = []
  }

  const handleComplete = () => {
    setIsFadingOut(true)
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(INTRO_CONFIG.STORAGE_KEY, "true")
      } catch {}
      document.body.style.overflow = ""
    }

    const unmountTimer = setTimeout(() => {
      setShouldRender(false)
    }, INTRO_CONFIG.FADEOUT_DURATION)
    timerRefs.current.push(unmountTimer)
  }

  useEffect(() => {
    if (!INTRO_CONFIG.SHOW_INTRO) return
    if (typeof window === "undefined") return

    ;(window as any).replayIntro = () => {
      try {
        localStorage.removeItem(INTRO_CONFIG.STORAGE_KEY)
      } catch {}
      window.location.search = "?intro=true"
    }

    const urlParams = new URLSearchParams(window.location.search)
    const hasQueryOverride = urlParams.has(INTRO_CONFIG.QUERY_OVERRIDE_KEY)

    let alreadySeen = false
    try {
      alreadySeen = localStorage.getItem(INTRO_CONFIG.STORAGE_KEY) === "true"
    } catch {
      alreadySeen = false
    }

    if (alreadySeen && !hasQueryOverride) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setIsReducedMotion(prefersReducedMotion)

    document.body.style.overflow = "hidden"
    setShouldRender(true)

    if (prefersReducedMotion) {
      const reducedTimer = setTimeout(() => {
        handleComplete()
      }, INTRO_CONFIG.REDUCED_MOTION_DURATION)
      timerRefs.current.push(reducedTimer)
      return () => cleanupTimers()
    }

    const t1 = setTimeout(() => setStep("ring"), 600)
    const t2 = setTimeout(() => setStep("blue"), 1500)
    const t3 = setTimeout(() => setStep("silver"), 2100)
    const t4 = setTimeout(() => setStep("sweep"), 2700)
    const t5 = setTimeout(() => setStep("settle"), 3700)
    const t6 = setTimeout(() => handleComplete(), INTRO_CONFIG.INTRO_DURATION)

    const tFailsafe = setTimeout(() => {
      handleComplete()
    }, INTRO_CONFIG.FAILSAFE_TIMEOUT)

    timerRefs.current = [t1, t2, t3, t4, t5, t6, tFailsafe]

    return () => {
      cleanupTimers()
      document.body.style.overflow = ""
    }
  }, [])

  if (!shouldRender) return null

  return (
    <aside
      aria-label="Euro Edge Brand Intro"
      aria-hidden={isFadingOut ? "true" : "false"}
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#040813] select-none transition-opacity duration-800 ease-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
      style={{ backgroundColor: "#040813" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, transparent 30%, #03060f 75%, #010206 100%)",
          }}
        />
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] sm:blur-[130px] transition-all duration-1000 ${
            step !== "init" ? "opacity-70 scale-100" : "opacity-25 scale-75"
          }`}
          style={{
            width: "clamp(300px, 50vw, 650px)",
            height: "clamp(300px, 50vw, 650px)",
            background: "radial-gradient(circle, rgba(29, 78, 216, 0.45) 0%, rgba(14, 38, 89, 0.25) 45%, transparent 70%)",
          }}
        />
        <div
          className={`absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] transition-opacity duration-1000 ${
            step === "sweep" || step === "settle" ? "opacity-30" : "opacity-0"
          }`}
          style={{
            width: "clamp(200px, 35vw, 450px)",
            height: "clamp(120px, 20vw, 250px)",
            background: "radial-gradient(ellipse, rgba(251, 176, 59, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div
          className="relative aspect-square flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            width: "clamp(260px, 34vw, 450px)",
            maxWidth: "85vw",
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ringStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <mask id="ringRevealMask">
                <circle
                  cx="512"
                  cy="512"
                  r="350"
                  fill="none"
                  stroke="white"
                  strokeWidth="320"
                  strokeDasharray="2200"
                  strokeDashoffset={isReducedMotion || step !== "init" ? "0" : "2200"}
                  strokeLinecap="round"
                  transform="rotate(-90 512 512)"
                  style={{
                    transition: isReducedMotion ? "none" : "stroke-dashoffset 0.95s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                />
              </mask>
            </defs>
          </svg>

          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              maskImage: isReducedMotion ? "none" : "url(#ringRevealMask)",
              WebkitMaskImage: isReducedMotion ? "none" : "url(#ringRevealMask)",
              opacity: step === "init" ? 0 : 1,
              transform: step === "init" ? "scale(0.96)" : "scale(1)",
              transition: isReducedMotion ? "none" : "opacity 0.6s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Image
              src="/images/logo-ring.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 300px, 450px"
              className="object-contain"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              opacity: isReducedMotion || step === "blue" || step === "silver" || step === "sweep" || step === "settle" ? 1 : 0,
              transform:
                step === "init" || step === "ring"
                  ? "scale(0.92) translateY(8px)"
                  : "scale(1) translateY(0)",
              transition: isReducedMotion ? "none" : "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Image
              src="/images/logo-blue-e.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 300px, 450px"
              className="object-contain"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              opacity: isReducedMotion || step === "silver" || step === "sweep" || step === "settle" ? 1 : 0,
              transform:
                step === "init" || step === "ring" || step === "blue"
                  ? "translateX(18px) scale(0.96)"
                  : "translateX(0) scale(1)",
              transition: isReducedMotion ? "none" : "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Image
              src="/images/logo-silver-wings.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 300px, 450px"
              className="object-contain"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              opacity: isReducedMotion || step === "sweep" || step === "settle" ? 1 : 0,
              transform: step === "settle" ? "scale(1)" : "scale(0.985)",
              transition: isReducedMotion ? "none" : "opacity 0.4s ease-out, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
              filter: "drop-shadow(0 20px 45px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 35px rgba(29, 78, 216, 0.25))",
            }}
          >
            <Image
              src="/images/logo-clean.png"
              alt="Euro Edge Technical Services"
              fill
              priority
              sizes="(max-width: 768px) 300px, 450px"
              className="object-contain"
            />
          </div>

          {!isReducedMotion && (
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden rounded-full z-30"
              style={{
                maskImage: "url(/images/logo-clean.png)",
                WebkitMaskImage: "url(/images/logo-clean.png)",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                opacity: step === "sweep" || step === "settle" ? 1 : 0,
              }}
            >
              <div
                className={`absolute top-0 bottom-0 w-[60%] -skew-x-[25deg] transition-all ${
                  step === "sweep" || step === "settle" ? "translate-x-[280%]" : "-translate-x-[150%]"
                }`}
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.65) 48%, rgba(224,242,254,0.95) 50%, rgba(255,255,255,0.65) 52%, rgba(255,255,255,0.02) 75%, transparent 100%)",
                  mixBlendMode: "overlay",
                  transitionDuration: "1000ms",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            </div>
          )}
        </div>

        <div
          className="text-center mt-6 space-y-1.5 transition-all duration-700 ease-out"
          style={{
            opacity: isReducedMotion || step === "sweep" || step === "settle" ? 1 : 0,
            transform:
              isReducedMotion || step === "settle"
                ? "translateY(0)"
                : "translateY(8px)",
          }}
        >
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-[0.2em] sm:tracking-[0.25em] uppercase">
            Euro Edge
          </h2>
          <p className="font-mono text-[10px] sm:text-xs text-[#fbb03b] tracking-[0.35em] sm:tracking-[0.4em] uppercase font-medium">
            Technical Services L.L.C
          </p>
        </div>
      </div>

      <button
        onClick={handleComplete}
        className="absolute top-6 right-6 z-40 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white/80 font-mono text-[10px] tracking-widest uppercase transition-all border border-white/5 hover:border-white/20"
      >
        Skip Intro
      </button>
    </aside>
  )
}
