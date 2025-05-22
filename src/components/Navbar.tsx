'use client'

export default function Navbar () {
    return (
        <nav className="fixed top-0 right-0 w-full z-50">
          <div className="px-6 py-5 flex justify-end items-center space-x-6 text-base">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

    )
}