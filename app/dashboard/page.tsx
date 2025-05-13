import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, CheckCircle, Clock, ListTodo, Plus, Settings, User, Bell, Search } from "lucide-react"
import { PandaLogo } from "@/components/panda-logo"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <PandaLogo width={32} height={32} />
            <span className="text-lg font-bold">TaskManagement</span>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tasks..."
                className="h-9 w-full rounded-md border border-input bg-background pl-8 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="hidden w-64 border-r md:block">
          <div className="flex h-full flex-col">
            <div className="p-4">
              <Button className="w-full justify-start gap-2">
                <Plus className="h-4 w-4" />
                New Task
              </Button>
            </div>
            <nav className="flex-1 space-y-1 p-2">
              <Button variant="secondary" className="w-full justify-start gap-2">
                <ListTodo className="h-4 w-4" />
                All Tasks
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Clock className="h-4 w-4" />
                Today
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <CalendarDays className="h-4 w-4" />
                Upcoming
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <CheckCircle className="h-4 w-4" />
                Completed
              </Button>
            </nav>
            <div className="border-t p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white">
                  <span className="text-sm font-medium">J</span>
                </div>
                <div>
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs text-muted-foreground">johndoe@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Welcome, John!</h1>
              <p className="text-muted-foreground">Here's an overview of your tasks</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="today">
              <TabsList>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="today" className="space-y-4 pt-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">Complete project proposal</h3>
                        <p className="text-sm text-muted-foreground">Due today at 5:00 PM</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Mark Complete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">Team meeting</h3>
                        <p className="text-sm text-muted-foreground">Today at 2:00 PM</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Mark Complete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="upcoming" className="pt-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">Review marketing materials</h3>
                        <p className="text-sm text-muted-foreground">Tomorrow at 10:00 AM</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Mark Complete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mt-4">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">Client presentation</h3>
                        <p className="text-sm text-muted-foreground">May 15, 2025 at 3:00 PM</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Mark Complete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="completed" className="pt-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium line-through">Update website content</h3>
                        <p className="text-sm text-muted-foreground">Completed on May 10, 2025</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Restore
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mt-4">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium line-through">Send invoice to client</h3>
                        <p className="text-sm text-muted-foreground">Completed on May 9, 2025</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Restore
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
