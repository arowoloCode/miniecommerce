import React from 'react'
import classes from "../Component/Topbar.module.css"

function Topbar() {
  return (
    <header>
        <nav className={classes.topbar}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBZsOV_lhvC7eymRovQqQ4bbxGVZ_JfgBWA&usqp=CAU' alt='logo' />
        </nav> 
    </header>
  )
}

export default Topbar