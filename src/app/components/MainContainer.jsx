import React from 'react'
import Header from './header/Header'

export default function MainContainer(props) {
  return (
    <div id="main-container" className={`${props.isSidebarOpen ? 'open' : 'close'} bg-back`}>
      <Header />
    </div>
  )
}
