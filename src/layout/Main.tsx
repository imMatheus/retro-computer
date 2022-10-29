import React from 'react'
import Dock from 'components/dock'

interface MainProps {
    children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <div className='h-screen flex flex-col'>
            <div className='flex-1 bg-teal-400'>{children}</div>
            <Dock />
        </div>
    )
}

export default Main
