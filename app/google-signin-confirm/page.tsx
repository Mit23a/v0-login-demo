"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { PandaLogo } from "@/components/panda-logo"
import { useRouter } from "next/navigation"

export default function GoogleSignInConfirm() {
  const router = useRouter()

  const handleCancel = () => {
    router.push("/google-signin")
  }

  const handleContinue = () => {
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center">
          <div className="h-6 w-6">
            <svg viewBox="0 0 24 24" width="24" height="24">
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
          <span className="ml-2 text-lg">Sign in with Google</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row">
        <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
          <div className="mb-8 flex justify-center">
            <PandaLogo width={100} height={100} />
          </div>

          <h1 className="mb-4 text-3xl font-bold">You are signing in to</h1>
          <h2 className="mb-8 text-2xl">taskmanagement.com</h2>

          {/* Account row moved below taskmanagement.com */}
          <div className="mb-8 w-full max-w-md rounded-lg p-4 hover:bg-gray-100">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
                <span className="text-lg font-medium">J</span>
              </div>
              <div className="ml-4 flex-1">
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-gray-500">johndoe@gmail.com</div>
              </div>
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 text-sm text-gray-600">
              <p>
                Before using taskmanagement.com, you can review the{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                to understand how taskmanagement.com will handle and protect your data.
              </p>
            </div>

            <div className="flex justify-between space-x-4">
              <button
                onClick={handleCancel}
                className="flex-1 rounded-full border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                onClick={handleContinue}
                className="flex-1 rounded-full bg-blue-600 py-3 px-6 text-base font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="text-sm">English</span>
            <ChevronDown className="ml-1 h-4 w-4" />
          </div>
          <div className="flex space-x-4 text-sm">
            <Link href="/help" className="text-gray-600 hover:text-gray-900">
              Help
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
