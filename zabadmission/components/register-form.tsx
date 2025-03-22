"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

export default function RegisterForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "student",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeToTerms: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, userType: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
    if (errors.agreeToTerms) {
      setErrors((prev) => ({ ...prev, agreeToTerms: "" }))
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreeToTerms: "",
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
      valid = false
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
      valid = false
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
      valid = false
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
      valid = false
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to dashboard based on user role
      router.push("/dashboard")
    } catch (error) {
      console.error("Registration failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={cn(errors.firstName && "border-destructive")}
            disabled={isLoading}
          />
          {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={cn(errors.lastName && "border-destructive")}
            disabled={isLoading}
          />
          {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          className={cn(errors.email && "border-destructive")}
          disabled={isLoading}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className={cn(errors.password && "border-destructive")}
            disabled={isLoading}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
            onClick={() => setShowPassword(!showPassword)}
            disabled={isLoading}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
          </Button>
        </div>
        {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
      </div>

      <div className="space-y-3">
        <Label>I am a</Label>
        <RadioGroup value={formData.userType} onValueChange={handleRadioChange} className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="student" id="student" disabled={isLoading} />
            <Label htmlFor="student" className="cursor-pointer">
              Student
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="admin" id="admin" disabled={isLoading} />
            <Label htmlFor="admin" className="cursor-pointer">
              Administrator
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="faculty" id="faculty" disabled={isLoading} />
            <Label htmlFor="faculty" className="cursor-pointer">
              Faculty Member
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={handleCheckboxChange}
            disabled={isLoading}
          />
          <Label htmlFor="terms" className="text-sm cursor-pointer">
            I agree to the{" "}
            <Button variant="link" className="p-0 h-auto text-primary" type="button">
              Terms of Service
            </Button>{" "}
            and{" "}
            <Button variant="link" className="p-0 h-auto text-primary" type="button">
              Privacy Policy
            </Button>
          </Label>
        </div>
        {errors.agreeToTerms && <p className="text-sm text-destructive">{errors.agreeToTerms}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create account"
        )}
      </Button>
    </form>
  )
}

