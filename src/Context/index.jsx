import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)


    //Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Checkout Side Menu Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Show Product
    const [productToShow, setProductToShow] = useState({})


    //Add products to car
    const [cartProducts, setCartProducts] = useState([])




    return (
        <ShoppingCartContext.Provider value={{count,
         setCount,
         closeCheckoutSideMenu,
         openCheckoutSideMenu,
         isCheckoutSideMenuOpen,
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