import React from 'react'
import SetPost from './hooks/SetPost'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import NavItem from '../routes/NavItem'
import { Outlet } from 'react-router-dom'
import { fontWeight } from '@mui/system'

function SandBox() {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to='logic' label='Logic' sx={{ color: '#333' }}/>
        </Toolbar>
      </AppBar>

      <Outlet/>
    </div>
  )
}

export default SandBox