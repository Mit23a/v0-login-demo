"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EnterOTP() {
  const router = useRouter()
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6)
  }, [])

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return

    // Update OTP state for the current cell only
    const newOtp = [...otp]
    newOtp[index] = value.substring(0, 1)
    setOtp(newOtp)

    // Move to next input if value is entered and it's a number
    if (value && /^\d$/.test(value) && index < 5) {
      // Focus the next input but don't fill it
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("")
      setOtp(digits)

      // Focus the last input
      inputRefs.current[5]?.focus()
    }
  }

  const verifyOtp = () => {
    const otpValue = otp.join("")

    // Check if OTP is complete
    if (otpValue.length === 6) {
      // In a real app, you would verify the OTP with your backend
      // For now, we'll just redirect to the dashboard
      router.push("/dashboard")
    }
  }

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex w-full flex-col items-center justify-center px-4 py-12 md:w-1/2">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
              <Lock className="h-12 w-12 text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">ENTER OTP</h1>
            <p className="text-center text-muted-foreground">
              Enter the verification code sent to
              <br />
              <span className="font-medium">johndoe@gmail.com</span>
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between gap-2">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={otp[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="h-14 w-14 rounded-md border border-input bg-background px-3 py-2 text-center text-xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  autoFocus={index === 0}
                  aria-label={`OTP digit ${index + 1}`}
                />
              ))}
            </div>

            <Button className="h-12 w-full bg-purple-600 text-base hover:bg-purple-700" onClick={verifyOtp}>
              Verify OTP
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Didn&apos;t receive the code?{" "}
                <Link href="#" className="font-medium text-purple-600 hover:text-purple-500">
                  Resend
                </Link>
              </p>
            </div>

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
