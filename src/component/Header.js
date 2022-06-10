import React from 'react';
import '../estilo/Header.css'
function Header({foto}){
    return(
        <>
        <header>
            <img
            src={require(`../img/${foto}.jpg`)}></img>
        </header>
        </>
    )
}
export default Header;