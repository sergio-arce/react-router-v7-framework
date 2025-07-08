import { getClient } from "@/fake/fake-data"
import { useParams } from "react-router"

import { ContactInfo } from "./ContactInfo"
import { ContactInfoSkeleton } from "./ContactSkeleton"
import { NoContacSelected } from "./NoContactSelected"
import { useQuery } from '@tanstack/react-query';

export const ContactDetails = () => {
  const { clientId } = useParams()

  const { data: client, isLoading } = useQuery({
    queryKey: ["client", clientId],
    queryFn: async () => getClient(clientId ?? ''),
    enabled: !!clientId, // Only run if clientId is available || clientId !== undefined
    staleTime: 1000 * 60 * 5, // 5 minutes this data is fresh for 5 minutes
  })  

  if (isLoading && !client) {
    return (<ContactInfoSkeleton />)
  }

  if (!client) {
    return (<NoContacSelected />)
  }

  if (client) {
    return (<ContactInfo client={client} />)
  }

  return <div>Client not found</div>
}