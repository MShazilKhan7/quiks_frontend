import React from 'react'

export default function Sidebar(props) {
    return (
        <nav id="sidebar" className={`fixed top-0 left-0 h-full transition-all duration-300 ${props.isOpen ? 'open' : 'close'} bg-primary`} >
            <button
                className={props.isOpen ? "absolute bottom-4 left-1/2 transform text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg toggle-btn close bg-accent" : "hidden"}
                onClick={props.onToggle}
                aria-label="Toggle Sidebar"
            >
                <i className="fas fa-arrow-left text-sm"></i>
            </button>
            <button
                className={props.isOpen ? 'hidden' : "absolute bottom-4 left-1/2 transform text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg toggle-btn open bg-accent"}
                onClick={props.onToggle}
                aria-label="Toggle Sidebar"
            >
                <i className="fas fa-arrow-right text-sm"></i>
            </button>
        </nav>
    )
}
