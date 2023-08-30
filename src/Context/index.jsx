import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Inicializo un contador, el contador se envía en el value mas abajo, con el set incluido
    // para que cualquier componente pueda modificarlo.
    const [count, setCount] = useState(0);

    //Detalle de los productos, con su función de estado y de apertura.
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Detalle del carrito de compras, con su función de estado y de apertura.
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);
    const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true)
    const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false)

    //Detalle del producto
    const [productToShow, setProductToShow] = useState({});

    //Detalle del carrito de compras - Agregar productos al carrito de compras.
    const [cartProducts, setCartProducts] = useState([]);

    //Detalle del carrito de compras - Orden.
    const [order, setOrder] = useState([]);

    //Utilizamos el hook useState, para crear estados para la información. 
    //Para obtener los productos o filtrarlos.
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    //Obtner un producto por titulo.
    const [searchByTitle, setSearchByTitle] = useState(null)

    //Obtner un producto por categoria.
    const [searchByCategory, setSearchByCategory] = useState(null)

    //Utilizamos el hook de useEffect, que facilita el consumo de API
    useEffect(() => {
        //usamos fetch para "ir" a la API
        // fetch('https://fakestoreapi.com/products')
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    //Genero una funcion para la filtración de productos por titulo
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase()
            .includes(searchByTitle.toLowerCase()))
    }

    //Genero una funcion para la filtración de productos por categoría
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase()
            .includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
                .filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    }

    //Utilizamos el hook de useEffect para el filtrado de los productos.
    useEffect(() => {
        if (searchByTitle && searchByCategory) {
            setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        }

        if (searchByTitle && !searchByCategory) {
            setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        }

        if (!searchByTitle && searchByCategory) {
            setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        }

        if (!searchByTitle && !searchByCategory) {
            setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
        }
    }, [items, searchByTitle, searchByCategory])

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckOutSideMenuOpen,
                openCheckOutSideMenu,
                closeCheckOutSideMenu,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                searchByCategory,
                setSearchByCategory
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}