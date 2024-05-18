import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    //Show Product
    const [productToShow, setProductToShow] = useState({})


    //Add products to car
    const [cartProducts, setCartProducts] = useState([])



    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    return (
        <ShoppingCartContext.Provider value={{count,
         setCount,
         openProductDetail,
         closeProductDetail,
         isProductDetailOpen,
         productToShow,
         cartProducts,
         setCartProducts,
         setProductToShow}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}