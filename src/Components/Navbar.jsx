import { Link } from 'react-router-dom'
import carrito from '../assets/shared/desktop/icon-cart.svg'
import logo from '../assets/shared/desktop/logo.svg'
import menu from '../assets/shared/tablet/icon-hamburger.svg'
import Menu from './Menu'
import { useState } from 'react'



const Navbar = () => {

    const [activo, setActivo] = useState(false)

    const activar = () => setActivo(!activo)
  return (
    <div className='w-screen m-auto fixed top-0  bg-black z-[100]'>
        <nav className='bg-transparent p-7 m-auto  w-screen  max-w-[1100px]'>
            <div className='flex justify-between items-center max-w-3xl m-auto lg:hidden  w-full '>
                <img src={menu} alt="menu" className='w-5 cursor-pointer' onClick={activar}/>
                <Link to='/'><img src={logo} alt="logo" className='md:mr-96 w-32' /></Link>
                
                <img src={carrito} alt="carrito" className='w-5'/>
            </div>

            <div className={activo ? 'absolute top-20 left-0 duration-700 transition-all ease-in-out': ' duration-700 hidden'}>
                <Menu  activar={activar}/>
            </div>
          
            <div className='hidden lg:flex justify-between items-center max-w-7xl m-auto'>
                <Link to='/'><img src={logo} alt="logo" /></Link>
                <ul className='text-white flex gap-8 font-font font-bold'>
                    <Link to='/' className='hover:text-orange'>HOME</Link>
                    <Link to='/headphones' className='hover:text-orange'>HEADPHONES</Link>
                    <Link to='/speakers' className='hover:text-orange'>SPEAKERS</Link>
                    <Link to='/earphones' className='hover:text-orange'>EARPHONES</Link>
                </ul>
                <img src={carrito} alt="carrito" />
            </div>
        </nav>
    </div>
  )
}

export default Navbar