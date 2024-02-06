import { Link } from 'react-router-dom'
import cart from '../assets/shared/desktop/icon-cart.svg'
import logo from '../assets/shared/desktop/logo.svg'
import menu from '../assets/shared/tablet/icon-hamburger.svg'
import Menu from './Menu'
import { useState } from 'react'



const Navbar = () => {

    const [activo, setActivo] = useState(false)

    const activar = () => setActivo(!activo)
    
    const [carrito, setCarrito ] = useState(false)

    const activarCarrito = () => setCarrito(!carrito)
  return (
    <div className='w-screen m-auto fixed top-0  bg-black z-[100]'>
        <nav className='bg-transparent p-7 m-auto  w-screen  max-w-[1100px]'>
            <div className='flex justify-between items-center max-w-3xl m-auto lg:hidden  w-full '>
                <img src={menu} alt="menu" className='w-5 cursor-pointer' onClick={activar}/>
                <Link to='/'><img src={logo} alt="logo" className='md:mr-96 w-32' /></Link>
                
                <img  src={cart} alt="carrito" className='w-5 cursor-pointer' onClick={activarCarrito}/>
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
                <img className='cursor-pointer'src={cart} alt="carrito" onClick={activarCarrito} />
            </div>

            <div  className={carrito ? 'w-80 bg-white rounded-xl flex flex-col justify-center items-center gap-4 absolute top-24 p-6 right-[5%] shadow-2xl translate ease-in-out duration-1000 ': 'w-80 bg-white rounded-xl flex flex-col justify-center items-center gap-4 absolute top-24 p-6 -right-80 shadow-2xl translate ease-in-out duration-1000'}>
                    <div className='flex items-center justify-between w-full'>
                        <h2 className='uppercase font-extrabold'>Cart (1)</h2>
                        <p className='text-grey underline cursor-pointer hover:opacity-50 '>Remove all</p>
                    </div>
                    <div>

                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <p className='text-grey'>TOTAL</p>
                        <p className='font-bold'>59595</p>
                    </div>
                    <button  className='py-3 w-full bg-orange hover:bg-orangeHover text-white text-[12px] font-font tracking-[2px] '>CHECKOUT</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar