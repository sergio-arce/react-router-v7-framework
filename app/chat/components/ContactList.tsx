import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Client } from "../interface/chat.interface"
import { NavLink, useParams } from "react-router"

interface Props {
  clients: Client[]
}

export const ContactList = ({ clients }: Props) => {

  const { id } = useParams()
  console.log({id})

  return (
    <ScrollArea className="h-[calc(100vh-134px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            
            {/* {isLoading && (
              <div className="text-gray-500 text-sm">Loading...</div>
            )} */}

            {
              clients?.map((client) => (
                <NavLink
                  key={client.id}
                  to={`/chat/client/${client.id}`}
                  className={({ isActive }) => `w-full justify-start flex items-center px-2 py-1 rounded-md transition-colors
                    ${isActive ? "bg-gray-200 text-gray-900" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  <div
                    className={`h-6 w-6 rounded-full mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs ${client.id == id ? "bg-blue-500" : 'bg-gray-300'}`}
                  >
                    {client?.name.charAt(0)}
                  </div>
                  <span className={`${client.id == id ? "text-blue-500 font-medium" : "text-gray-600 "}`}>
                    {client.name}
                  </span>
                </NavLink>
              ))
            }
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </Button>
        </div>
      </div>
    </ScrollArea>
  )
}