import { Form, Outlet, redirect, Link } from 'react-router';
import { X, LogOut } from 'lucide-react';

import type { Route } from './+types/chat-layout';

import { Button } from '~/components/ui/button';
import { ContactList } from '../chat/components/ContactList';
import { ContactInformationCard } from '~/chat/components/contact-information-card/ContactInformationCard';

import { getClient, getClients } from '~/fake/fake-data';
import { getSession } from '~/sessions.server';

export async function loader({ request, params }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get('Cookie'));

  const userName = session.get('name');
  const { id } = params;

  if (!session.has('userId')) {
    return redirect('/auth/login');
  }

  const clients = await getClients();

  if (id) {
    const client = await getClient(id);
    return { client, userName, clients };
  }

  // console.log(clients);
  return { clients, userName };
}

export default function ChatLayout({ loaderData }: Route.ComponentProps) {
  const { clients, userName, client } = loaderData;

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/10">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary" />
            <Link to="/chat" className="font-semibold">
              {userName}
            </Link>
          </div>
        </div>

        <ContactList clients={clients} />

        <Form method="post" action="/auth/logout" className="p-4 border-t">
          <Button variant="default" className="w-full text-center">
            <LogOut className="h-4 w-4 mr-2" />
            Log out
          </Button>
        </Form>
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

          <ContactInformationCard />
        </div>
      </div>
    </div>
  );
}
