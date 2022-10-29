import React from 'react'

interface MainProps {
    children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <div className='bg-red-500 p-2 h-screen flex flex-col'>
            <div className='flex-1 bg-orange-400'>{children}</div>
            <nav className='bg-pink-600 p-5'>im the nav</nav>
        </div>
    )
}

export default Main
