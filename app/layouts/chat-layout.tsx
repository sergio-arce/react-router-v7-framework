import { Outlet, useNavigate } from "react-router"
import { LogOut, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import ContactList from "@/chat/components/ContactList"

export default function ChatLayout() {

  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/auth/login')
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/10">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary" />
            <span className="font-semibold">NexTalk</span>
          </div>
        </div>
        
        <ContactList />
        
        <div className="p-4 border-t">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full cursor-pointer"
            onClick={onLogout}>
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 border-b px-4 flex items-center justify-between">
            <div></div> {/* Empty div to maintain spacing */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                Save conversation
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </header>
          <Outlet />
        </div>

        {/* Right Panel - Contact Details */}
        <div className="w-80 border-l">
          <div className="h-14 border-b px-4 flex items-center">
            <h2 className="font-medium">Contact details</h2>
          </div>
          <div className="p-4">
            <div className="flex flex-col items-center pb-6 border-b">
              <div className="h-20 w-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl mb-3">
                G5
              </div>
              <h3 className="font-semibold text-lg">G5 Customer</h3>
              <p className="text-sm text-muted-foreground">Premium Account</p>
              <div className="flex items-center mt-1">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>

            <div className="py-4 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Contact Information</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Email:</span>
                    <span>customer@g5.com</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Phone:</span>
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Customer ID:</span>
                    <span>G5-12345</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Account Details</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Plan:</span>
                    <span>Premium</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Member since:</span>
                    <span>Jan 2023</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last bill:</span>
                    <span>$150.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <Button variant="outline" size="sm" className="w-full">
                View full profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

