import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className="logo">Filmes Netflix</span>
            </div>
            <div className='topRight'>
                <div className="topbarIcons"></div>
            </div>
        </div>
    </div>
  )
}
