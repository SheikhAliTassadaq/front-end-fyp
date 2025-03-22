"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Bell,
  Menu,
  X,
  LogOut,
  ChevronDown,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Applications",
      href: "/dashboard/applications",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: "Students",
      href: "/dashboard/students",
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 border-r bg-background transition-transform duration-300 ease-in-out",
          isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0",
        )}
      >
        <div className="h-16 flex items-center gap-2 px-4 border-b">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ZabAdmission</span>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div
        className={cn(
          "flex-1 flex flex-col transition-all duration-300 ease-in-out",
          sidebarOpen && !isMobile ? "ml-64" : "ml-0",
        )}
      >
        {/* Header */}
        <header className="h-16 border-b bg-background sticky top-0 z-30">
          <div className="h-full px-4 flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <div className="flex items-center ml-auto gap-2">
              <ThemeToggle />

              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline-block">John Doe</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

