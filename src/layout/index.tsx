import React from 'react'
import Dock from '../abcdef/src/components/dock'

interface MainProps {
    children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <div className='flex h-screen flex-col'>
            <div className='relative flex-1 bg-teal-400'>{children}</div>
            <Dock />
        </div>
    )
}

export default Main
