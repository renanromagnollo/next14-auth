'use client'

import { signOut } from "next-auth/react"

interface ButtonLogoutProps {

}
export default function ButtonLogout(props : ButtonLogoutProps){
    return(
      <button className="btn btn-outline" onClick={() => signOut()}>Logout</button>

    )
}