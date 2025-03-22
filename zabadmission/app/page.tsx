import Link from "next/link"
import { ArrowRight, BookOpen, Users, Award, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import FeatureCard from "@/components/feature-card"
import AIAssistant from "@/components/ai-assistant"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">ZabAdmission</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              AI-Powered Admissions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Streamline Your <span className="text-primary">Admission Process</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              ZabAdmission uses AI to simplify and automate the entire admission journey for students, administrators,
              and faculty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/register">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <HeroAnimation />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Intelligent Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform offers a comprehensive suite of tools designed to make the admission process seamless and
              efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Bot className="h-10 w-10 text-primary" />}
              title="AI-Powered Assistance"
              description="Get instant answers to your questions with our intelligent chatbot available 24/7."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Multi-User Platform"
              description="Dedicated portals for students, administrators, and faculty members."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-primary" />}
              title="Smart Application Tracking"
              description="Real-time updates and intelligent status tracking for all applications."
            />
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tailored for Everyone</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ZabAdmission provides specialized experiences for different user types.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Student Card */}
            <div className="bg-background rounded-xl border p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Students</h3>
              <p className="text-muted-foreground mb-4">
                Easy application submission, document uploads, and real-time status tracking.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/student-portal">Student Portal</Link>
              </Button>
            </div>

            {/* Admin Card */}
            <div className="bg-background rounded-xl border p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Administrators</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive dashboard for managing applications, analytics, and communication.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin-portal">Admin Portal</Link>
              </Button>
            </div>

            {/* Faculty Card */}
            <div className="bg-background rounded-xl border p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Faculty</h3>
              <p className="text-muted-foreground mb-4">
                Streamlined review process, applicant evaluation, and decision recommendations.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/faculty-portal">Faculty Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Demo */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Your AI Assistant</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience our intelligent chatbot that helps you navigate the admission process.
              </p>
            </div>
            <AIAssistant />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Admission Process?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of institutions that have streamlined their admissions with ZabAdmission.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">ZabAdmission</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="text-muted-foreground hover:text-primary">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-muted-foreground hover:text-primary">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/twitter" className="text-muted-foreground hover:text-primary">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="/linkedin" className="text-muted-foreground hover:text-primary">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="/facebook" className="text-muted-foreground hover:text-primary">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="/instagram" className="text-muted-foreground hover:text-primary">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} ZabAdmission. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

