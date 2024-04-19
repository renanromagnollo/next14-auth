import { getServerSession } from "next-auth"
import ButtonLogout from "./ButtonLogout"
import { redirect } from "next/navigation"
import Image from "next/image"

interface PageProps {

}
export default async function Page(props : PageProps){
  const session = await getServerSession()

  console.log(session)

  if(!session) {
    redirect('/')
  }
    return(
        <div>
          {session.user?.image && 
            <div className="w-[150px]">
              <Image 
                src={session.user?.image} 
                alt="avatar"
                width={150}
                height={150}
              />
            </div>}
          <div>Olá {session?.user?.name}</div>
          <div>Dashboard</div>
          <div>
            <ButtonLogout/>
          </div>
        </div>
    )
}