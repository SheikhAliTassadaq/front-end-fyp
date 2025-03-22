import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import DashboardOverview from "@/components/dashboard-overview"

export const metadata: Metadata = {
  title: "Dashboard | ZabAdmission",
  description: "Manage your admission process with ZabAdmission",
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  )
}

