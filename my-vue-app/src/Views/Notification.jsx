import React from 'react'
import { useSelector } from 'react-redux'
import Notificaciones from '../Components/Notification/Notificaciones'
import Notificaciones2 from '../Components/Notification/Notificaciones2'

export default function Notification() {
    const user = useSelector(state =>state.userVerified.user)  
  return (
    <div>
        {
            user.roleId === 1? <Notificaciones/>:<Notificaciones2/>
        }
    </div>
  )
}
