import React from 'react'
import { AdminDashboard } from './AdminDashboard'
import UserDashboard from './UserDashboard'

const DashBoard = () => {
    let rolePrompt=prompt("enyre your role").toLowerCase()
  return (
    <div>
         {rolePrompt === "admin" ?<AdminDashboard />:<UserDashboard />}
    </div>
  )
}

export default DashBoard