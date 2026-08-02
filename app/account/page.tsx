"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNav } from "@/components/bottom-nav"
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main>
      <Header />

      <div className="px-4 lg:px-12 py-12 lg:py-24">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl lg:text-4xl text-foreground tracking-tight">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-sm text-muted-foreground font-sans mt-2">
              {isLogin
                ? "Sign in to access your account"
                : "Join Tiny Trends for exclusive access"}
            </p>
          </div>

          <form className="flex flex-col gap-5">
            {!isLogin && (
              <div>
                <label className="text-xs tracking-[0.1em] uppercase text-foreground/70 font-sans block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50"
                />
              </div>
            )}

            <div>
              <label className="text-xs tracking-[0.1em] uppercase text-foreground/70 font-sans block mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50"
                />
              </div>
            </div>

            <div>
              <label className="text-xs tracking-[0.1em] uppercase text-foreground/70 font-sans block mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-xs text-accent hover:underline font-sans"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="text-xs tracking-[0.1em] uppercase text-foreground/70 font-sans block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3.5 bg-secondary border border-border rounded-lg text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium font-sans rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 mt-2"
            >
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground font-sans">
              {isLogin ? "New to Tiny Trends?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-accent ml-1.5 hover:underline font-medium"
              >
                {isLogin ? "Create Account" : "Sign In"}
              </button>
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs text-center text-muted-foreground font-sans leading-relaxed">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="text-accent hover:underline">Terms of Service</Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <BottomNav />
    </main>
  )
}
