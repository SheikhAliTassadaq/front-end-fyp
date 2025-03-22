import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import LoginForm from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md px-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground mt-2">Sign in to your ZabAdmission account</p>
          </div>

          <LoginForm />

          <div className="mt-8 text-center text-sm">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

