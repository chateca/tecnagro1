"use client"
import * as React from "react"
import Image from 'next/image'
import Link from 'next/link'
import {useEffect} from 'react'
import Logo from '../public/assets/img/logo.png'


   


function NavMenu() {
  useEffect(()=>{
    try {
      
  
    const navMenu = document.getElementById('nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const hamburger = document.getElementById('hamburger')
const closedMenu = document.getElementById('closedMenu')
  if(!hamburger) return
  if(!closedMenu) return    



//menu 
hamburger?.addEventListener("click",()=>{
  navMenu?.classList?.toggle("left-[0%]")
  hamburger.classList?.add("hidden")
  closedMenu.classList?.remove("hidden")
})

closedMenu.addEventListener('click',()=>{
    navMenu?.classList?.toggle("left-[0%]")
    hamburger.classList?.remove("hidden")
    closedMenu.classList?.add("hidden")
})

navLink.forEach(link =>{
    link.addEventListener('click', ()=>{
        navMenu?.classList?.toggle("left-[0%]")
        hamburger.classList?.remove("hidden")
        closedMenu.classList?.add("hidden")
    })
})
} catch (error) {
    console.log('erro na execução da nav', error)  
}

  },[])
 



  return (
    <header id="navBar" className={`fixed top-0 left-0 w-full items-center justify-center  bg-green-950  z-50 `}>
           <nav className='flex items-center justify-between  w-[100%]   h-16 sm:h-20 lg:px-12 px-3'>
            <div className='relative  cursor-pointer  items-center justify-center left-4 z-50'>
                <Image
                priority
                src={Logo}
                alt='Tecnagro'
                width={120}
                height={120}
                />
            </div>

            <div id="nav-menu" className="absolute top-0 left-[-100%] min-h-[100vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-full">
            <ul className='flex flex-col items-center gap-8  lg:flex-row'>
                  <li><Link className='nav-link activeLink' href={"/"}>Home</Link></li>
                  <li><Link className='nav-link' href={"/#sobre-nos"}>Sobre nós</Link></li>
                  <li><Link className='nav-link' href={"/produtos-servicos/todos"}>Produtos e serviços</Link></li>
                  <li><Link className='nav-link' href={`/galeriaNoTerreno/todos?page=${1}`}>No Terreno</Link></li>
                  <li><Link className='nav-link' href={"/#contactos"}>Contactos</Link></li>
                  </ul>
                  
                  </div>
             
             

                    <div  className='relative z-50 lg:hidden lg:ring-0 ring-1 ring-white right-3 '>
                    <svg id="hamburger" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>

                  <svg id="closedMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2 cursor-pointer hidden">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                    </div>
           </nav>
    </header>
       
  )
}



export default NavMenu


