import { Link } from 'react-router-dom'
import carrito from '../assets/shared/desktop/icon-cart.svg'
import logo from '../assets/shared/desktop/logo.svg'
import menu from '../assets/shared/tablet/icon-hamburger.svg'

const Navbar = () => {
  return (
    <div className='w-screen m-auto fixed top-0  z-[100]'>
        <nav className='bg-transparent p-7 m-auto  w-screen  max-w-[1100px]'>
            <div className='flex justify-between items-center max-w-3xl m-auto lg:hidden  w-full '>
                <img src={menu} alt="menu" className='w-5' />
                <img src={logo} alt="logo" className='md:mr-96 w-32' />
                <img src={carrito} alt="carrito" className='w-5'/>
            </div>
        
            <div className='hidden lg:flex justify-between items-center max-w-7xl m-auto'>
                <img src={logo} alt="logo" />
                <ul className='text-white flex gap-8 font-font font-bold'>
                    <Link to='/' className='hover:text-orange'>HOME</Link>
                    <Link to='/headphones' className='hover:text-orange'>HEADPHONES</Link>
                    <Link to='speakers' className='hover:text-orange'>SPEAKERS</Link>
                    <Link to='earphones' className='hover:text-orange'>EARPHONES</Link>
                </ul>
                <img src={carrito} alt="carrito" />
            </div>
        </nav>
    </div>
  )
}

export default Navbar