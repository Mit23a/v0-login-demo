"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex w-full flex-col items-center justify-center px-4 py-12 md:w-1/2">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
              <Mail className="h-12 w-12 text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">FORGOT PASSWORD</h1>
            <p className="text-center text-muted-foreground">Enter your email to receive a reset link</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-base font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" className="h-12 text-base" />
            </div>

            <Button
              className="h-12 w-full bg-purple-600 text-base hover:bg-purple-700"
              onClick={() => (window.location.href = "/enter-otp")}
            >
              Send Reset Link
            </Button>

            <div className="text-center">
              <Link href="/" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                Return to login
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden bg-purple-900 md:block md:w-1/2">
        <div className="relative h-full w-full overflow-hidden">
          {/* Animated stars background */}
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8 + 0.2,
                  animation: `twinkle ${Math.random() * 5 + 5}s infinite`,
                }}
              ></div>
            ))}
          </div>

          {/* Moon */}
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/90 shadow-[0_0_40px_20px_rgba(255,255,255,0.4)]"></div>

          {/* Falling snow */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 5 + 3}px`,
                  height: `${Math.random() * 5 + 3}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.7 + 0.3,
                  animation: `fall ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes fall {
          0% { transform: translateY(-10px); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  )
}
