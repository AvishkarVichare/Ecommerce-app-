import React, {useContext} from 'react'
import CartContext from '../../context/cartContext/CartContext';

const ProductDisplaySkeleton = () => {
    const cartContext = useContext(CartContext);
  const {cartItems, setCartItems} = cartContext;
//   console.log(cartItems)
    return (
        <div className=' z-1 w-[90%] mx-auto relative mt-[30px] '>
            {/* cards */}
            <div className='flex justify-center flex-wrap gap-[55px] pb-12'>
                {
                    [0, 1, 2, 4, 5, 6].map(e => { 
                        return(
                            <div key={e}  className=' w-[360px] h-[380px] p-4 rounded-[30px] bg-gradient-to-b from-[#fffaf6] to-[#f5ae91] opacity-[.5] relative z-10 '>

                            <button className='absolute right-5 opacity-[.5] top-5 z-12 p-2 bg-text_main_color rounded-xl'>
                            
                            </button>
                    
                            <div >
                            
                            {/* product image  */}
                            <div className='h-[250px] w-[330px] mx-auto rounded-2xl z-10'></div>
                    
                    
                            {/* Title */}
                            <h4 className='w-[200px] bg-[#fce3d7] opacity-[.5] text-product_title_color font-extrabold mt-3 text-[20px] text-center'>
                                
                            </h4>
                            {/* price  */}
                            <h4 className=' w-[200px] bg-[#eac0ac] opacity-[.5] text-product_price_color font-extrabold mt-3 text-[18px] text-center'>
                               
                            </h4>
                            {/* description */}
                            <h5 className='px-2 py-2 w-[300px] bg-[#eac0ac] opacity-[.5]'>
                            
                               {}
                            </h5>
                            
                            
                            </div>
                    
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductDisplaySkeleton