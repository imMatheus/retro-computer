import React from 'react'

interface DockProps {}

const Dock: React.FC<DockProps> = ({}) => {
    return (
        <nav className='bg-gray-300 px-3 py-2 flex gap-2 justify-between'>
            <h2>im a dock</h2>
            <h2 className='text-xl'>im a dock</h2>
        </nav>
    )
}

export default Dock
