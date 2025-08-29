import React, { useState } from 'react'

const Demo = () => {
    const[showSidebar, setShowSidebar] = useState(false)
    const[darkMode, setDarkMode] = useState(false)

  return (
    <>
    <div>
        {/* <button onClick={() => {
            setDarkMode(true)
        }}>🌚</button>
        <button onClick={() => {
            setDarkMode(false)
        }}>🌞</button> */}

        <button onClick={() => {
            setDarkMode(!darkMode)
        }}>{darkMode ? "🌞" : "🌚"}</button>
    </div>
    <div className='flex'>
        <div
        onMouseLeave={() => {
            setShowSidebar(false)
            
        }}
         onMouseEnter={() => {
            setShowSidebar(true)
        }} className={'border bg-yellow-200 h-[100vh] '  + (showSidebar ? "w-[20vw]" : "w-[5vw]")}>SideBar</div>
        <div className={'border h-[100vh] w-[95vw] ' + (darkMode ? "bg-black" : "bg-white")}>Main</div>
    </div>
    </>

  )
}

export default Demo