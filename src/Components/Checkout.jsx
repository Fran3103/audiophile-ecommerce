import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { useState } from "react";
import check from "../assets/checkout/icon-order-confirmation.svg"

const Checkout = ({productos}) => {

    const [activo, setActivo] = useState(false)

    const calculateTotal = () => {
        return productos.reduce((total, producto) => {
        return total + (producto.precio * producto.cantidad);
        }, 0);
    };
   const total = calculateTotal()

   const shipping = 50

   const vat = total*.21
    

   const granTotal = total + shipping + vat

   const totalFinal = granTotal.toFixed(2)

   const compra = ()=> {
    
    if( productos.length > 0){

        setActivo(!activo)}
    }

  return (
    <div className=' pt-24 px-4 bg-greyLight pb-12 '>
        <Link to='/' className="hover:text-orangeHover"><h3>Go Back</h3></Link>
        <div className=" flex flex-col  justify-center items-start gap-4 bg-white rounded-lg p-4 mt-3">
            <h1 className="font-bold text-xl">CHECKOUT</h1>
            <form action="#" className="flex flex-col w-full gap-4 mb-3">
                <h2   className="text-orange  font-bold">BILLING DETAILS</h2>
                <label htmlFor="name" className="text-xs text-black font-bold">Name</label>
                <input type="text" name="name" id="name" placeholder="alexei ward" autoComplete="given-name" className="border-grey border rounded p-3"/>

                <label htmlFor="email" className="text-xs text-black font-bold">Email Address</label>
                <input type="email" name="email" id="email" placeholder="alex@mail.com" autoComplete="email"  className="border-grey border rounded p-3"/>

                <label htmlFor="phone" className="text-xs text-black font-bold">Phone Number</label>
                <input type="number" name="phone" id="phone" placeholder="+1 202-555-0136" autoComplete="number" className="border-grey border rounded p-3"/>

                <h2  className="text-orange  font-bold">SHIPPING INFO</h2>
                <label htmlFor="address" className="text-xs text-black font-bold">Your Address</label>
                <input type="text" name="address" id="address" placeholder="1137 Williams Avenue" autoComplete="given-name" className="border-grey border rounded p-3"/>

                <label htmlFor="code" className="text-xs text-black font-bold">ZIP Code</label>
                <input type="number" name="code" id="code" placeholder="10015"  className="border-grey border rounded p-3"/>

                <label htmlFor="city" className="text-xs text-black font-bold">City</label>
                <input type="text" name="city" id="city" placeholder="New York"  className="border-grey border rounded p-3"/>

                <label htmlFor="country" className="text-xs text-black font-bold">Country</label>
                <input type="text" name="country" id="country" placeholder="United States" autoComplete="given-name"  className="border-grey border rounded p-3" />

                <h2 className="text-orange  font-bold">PAYMENT DETAILS</h2>

                <label htmlFor="payment" className="text-xs text-black font-bold">Payment Method</label>
                <div className="flex  justify-start gap-3 items-center border p-3 rounded text-black font-bold border-grey">
                    <input type="radio" name="payment" id="payment"  className=" border border-grey "/>
                     <p>e-Money</p>
                </div>
                <div className="flex  justify-start gap-3 items-center border p-3 rounded  text-black font-bold border-grey">
                    <input type="radio" name="payment" id="payment1"  className="p-3 border border-grey"/>
                     <p>Cash on Delivery</p>
                </div>
                
                

                <label htmlFor="e-money-number" className="text-xs text-black font-bold">e-Money Number</label>
                <input type="number" name="e-money-number" id="e-money-number" placeholder="235846999"  className="border-grey border rounded p-3"/>

                <label htmlFor="pin"  className="text-xs text-black font-bold">e-Money PIN</label>
                <input type="number" name="pin" id="pin" placeholder="6585" className="border-grey border rounded p-3" />
            </form>

        </div>
        <div className=" flex flex-col  justify-center items-start gap-4 bg-white rounded-lg p-4 mt-3">
            <h2 className="font-bold text-xl">SUMMARY</h2>
            <div className="w-full flex flex-col gap-4">
                {productos.map((producto) => { 
                    return (
                        <div key={producto.titulo} className="flex w-full justify-between items-start ">
                            <div className="flex">
                                <img src={producto.img} alt={producto.titulo}  className="w-12 rounded-lg mr-3" />
                                <div>
                                    <h3 className="font-bold">{producto.titulo}</h3>
                                    <p className="text-grey">${producto.precio}</p>
                                </div>
                            </div>
                            <p className="text-grey">x{producto.cantidad}</p>
                        </div>
                    )
                } )}
            </div>
            <div className="flex  flex-col justify-center items-center gap-3 w-full">
                <div className="flex justify-between items-center w-full">
                    <p>TOTAL</p>
                    <p className="font-bold">$ {total}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                    <p>SHIPPING</p>
                    <p className="font-bold">$ {shipping}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                    <p>{"VAT (INCLUDED)"}</p>
                    <p className="font-bold">$ {vat}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                    <p>GRAND TOTAL</p>
                    <p className="text-orange font-bold mt-5">$ {totalFinal}</p>
                </div>

                <Link to='' className="w-full h-12"><button onClick={compra} className=' w-full h-full bg-orange hover:bg-orangeHover text-white text-[12px] font-font tracking-[2px] duration-500 uppercase '>Continue & pay</button></Link>
            </div>
        </div>


        <div className={activo ? 'w-screen h-screen bg-[rgba(0,0,0,0.7)] top-0 left-0  absolute' : 'hidden'}>
                <div className="w-[90%] bg-white absolute top-40 left-5 rounded-lg p-5 pb-12">
                    <img src={check} alt="orden confirmada" className="w-12 my-4" />
                    <h2 className="uppercase font-bold text-2xl my-2">thank you <br /> for your orden</h2>
                    <p className="text-grey my-3">You will receive an email confirmation shortly.</p>
                    <div className="flex flex-col justify-center items-start p-3 w-full ">
                        <div className="flex flex-col bg-greyLight w-full justify-around rounded-t-lg">
                            <div className="flex bg-greyLight w-full justify-around p-4 rounded-t-lg">
                                <img src={productos[0]?.img} alt="producto" className="w-12" />
                                <div>
                                    <p className="fond-bold text-black">{productos[0]?.titulo}</p>
                                    <p>{productos[0]?.precio}</p>
                                </div>
                                <p>x{productos[0]?.cantidad}</p>
                            </div>
                            <div className="w-full px-4">
                            {productos.length > 1 ? (
                                        <div>
                                            <hr />
                                            <p className="text-center text-xs my-3">and {productos.length - 1} other item</p>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                            </div>
                        </div>
                        <div className="bg-black w-full p-3 rounded-b-lg pl-4">
                            <p className="text-grey uppercase my-2 text-xs">Grand Total</p>
                            <p className="text-white ">$ {totalFinal}</p>
                        </div>
                        <Link to='/' className="w-full h-12"><button  className=' w-full h-full bg-orange hover:bg-orangeHover text-white text-[12px] font-font tracking-[2px] duration-500 uppercase mt-4 '>back to home</button></Link>
                    </div>
                   
                </div>
        </div>
    </div>
  )
}

Checkout.propTypes = {
    
    productos: PropTypes.array.isRequired,
   
  }

export default Checkout