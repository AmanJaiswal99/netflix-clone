import React, { useEffect, useState } from 'react'
import '../css/nav.css'

function Nav() {
   const [show, setshow] = useState(false)
   
   useEffect(() => {
       window.addEventListener("scroll",()=>{
           if(window.scrollY > 100){
               setshow(true);
           } else setshow(false);
       })
       return()=>{
           window.removeEventListener("scroll");
       };
   }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="netflix logo" className="nav_logo"/>
            <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" className="nav_avatar"/>
        </div>
      
    )
}

export default Nav
