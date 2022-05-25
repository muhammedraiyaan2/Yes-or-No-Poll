import React from 'react'
import csss from "../styles/Home.module.css"
import Link from 'next/link'
function Navbar() {
  return (
    <>
      <nav className={csss.navbar}>
       <ul className={csss.ul}>
        <li className={csss.brand}><Link href="/">Yes or No Poll</Link></li>
        <li className={csss.li}><Link href="/Question">Create your own question</Link></li>
        <li className={csss.li}>Contact us</li>
       </ul>
      </nav>
    </>
  )
}

export default Navbar