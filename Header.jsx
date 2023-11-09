import React from 'react'
import { Link } from 'react-router-dom'
import{HashLink} from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
        <h1>CipherBay</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/Exchanges"}>Exchanges</HashLink>
            <HashLink to={"/coins"}>Coins</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/Login"}>Login</HashLink>
        
            
            
        </main>
    </nav>
  )
}

export default Header
