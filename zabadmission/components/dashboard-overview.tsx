"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Users, FileCheck, Clock, CheckCircle2 } from "lucide-react"

const applicationData = [
  { name: "Jan", count: 45 },
  { name: "Feb", count: 52 },
  { name: "Mar", count: 61 },
  { name: "Apr", count: 58 },
  { name: "May", count: 65 },
  { name: "Jun", count: 78 },
]

const statusData = [
  { name: "Approved", value: 45, color: "#22c55e" },
  { name: "Pending", value: 30, color: "#f59e0b" },
  { name: "Rejected", value: 15, color: "#ef4444" },
  { name: "Incomplete", value: 10, color: "#94a3b8" },
]

const recentApplications = [
  {
    id: "APP-1234",
    name: "Emma Johnson",
    program: "Computer Science",
    date: "2023-06-10",
    status: "approved",
  },
  {
    id: "APP-1235",
    name: "Michael Smith",
    program: "Business Administration",
    date: "2023-06-09",
    status: "pending",
  },
  {
    id: "APP-1236",
    name: "Sophia Williams",
    program: "Mechanical Engineering",
    date: "2023-06-08",
    status: "rejected",
  },
  {
    id: "APP-1237",
    name: "James Brown",
    program: "Psychology",
    date: "2023-06-07",
    status: "incomplete",
  },
  {
    id: "APP-1238",
    name: "Olivia Davis",
    program: "Medicine",
    date: "2023-06-06",
    status: "approved",
  },
]

export default function DashboardOverview() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your admission system.</p>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,853</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 mr-1 text-emerald-500" />
                  <span className="text-emerald-500">+12.5%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Approved</CardTitle>
                <FileCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,257</div>
                <Progress value={45} className="h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-1">45% of total applications</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">842</div>
                <Progress value={30} className="h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-1">30% of total applications</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <Progress value={78} className="h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-1">+5% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Application Trends</CardTitle>
                <CardDescription>Monthly application submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={applicationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Application Status</CardTitle>
                <CardDescription>Distribution by current status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {statusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Latest application submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-medium p-2">ID</th>
                      <th className="text-left font-medium p-2">Applicant</th>
                      <th className="text-left font-medium p-2">Program</th>
                      <th className="text-left font-medium p-2">Date</th>
                      <th className="text-left font-medium p-2">Status</th>
                      <th className="text-left font-medium p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentApplications.map((app) => (
                      <tr key={app.id} className="border-b">
                        <td className="p-2 text-sm">{app.id}</td>
                        <td className="p-2 text-sm">{app.name}</td>
                        <td className="p-2 text-sm">{app.program}</td>
                        <td className="p-2 text-sm">{app.date}</td>
                        <td className="p-2 text-sm">
                          <Badge
                            variant={
                              app.status === "approved"
                                ? "success"
                                : app.status === "pending"
                                  ? "warning"
                                  : app.status === "rejected"
                                    ? "destructive"
                                    : "outline"
                            }
                          >
                            {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                          </Badge>
                        </td>
                        <td className="p-2 text-sm">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm">
                  View All Applications
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Applications Management</CardTitle>
              <CardDescription>Manage and process all student applications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This tab would contain a full application management interface with filtering, sorting, and bulk
                actions.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>Detailed insights and reports on admission data</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This tab would contain comprehensive analytics dashboards with demographic data, conversion rates, and
                predictive insights.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

