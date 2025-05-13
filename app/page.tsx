"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex w-full flex-col items-center justify-center px-4 py-12 md:w-1/2">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tight">WELCOME BACK</h1>
            <p className="text-lg text-muted-foreground">Please enter your email</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-base font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" className="h-12 text-base" />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-base font-medium">
                Password
              </label>
              <Input id="password" type="password" placeholder="••••••••••" className="h-12 text-base" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm font-medium">
                  Remember account
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                Forgot password?
              </Link>
            </div>

            <Button className="h-12 w-full bg-blue-600 text-base hover:bg-blue-700">Sign in</Button>

            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 flex-shrink text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <Button
              variant="outline"
              className="h-12 w-full text-base"
              onClick={() => (window.location.href = "/google-signin")}
            >
              <div className="mr-2 flex h-5 w-5 items-center justify-center">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              Sign in with Google
            </Button>
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
