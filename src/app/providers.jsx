"use client"
import { createContext } from "react"

const SidebarContext = createContext

const SidebarProvider = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default providers