import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../Utils";
import './styles.css'

const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    //Eliminar elemento del carrito de compras
    const deleteProductsCart = (id) => {
        //Me retorna la misma lista del carrito, sin el correspondiente al id que se busca
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts)
        context.setCount(context.count - 1);
    }
    //Generar orden nueva
    const handleCheckout = () =>{
        const orderToAdd = {
            date: '16.02.1991',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(context.count = 0);
    }

    return (
        <aside className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} 
        checkout-side-menu flex-col fixed right-2 bg-white border border-black 
        rounded-lg overflow-y-auto`}>
            <div className='justify-between items-center p-6 flex-1'>
                <div className="flex">
                    <h2 className='font-medium text-lg mb-4'>Mi carrito de Compras</h2>
                    <XMarkIcon className='h-6 w-6 text-black absolute right-5 cursor-pointer'
                        onClick={() => context.closeCheckOutSideMenu()}
                    ></XMarkIcon>
                </div>
            </div>
            <div className="px-6">
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.images[0]}
                            price={(product.price * 4000)
                                .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            deleteProductsCart={deleteProductsCart}
                        />
                    ))
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light">Total Orden: </span>
                    <span className="font-medium text-2xl">${totalPrice(context.cartProducts)
                        .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                </p>
                <Link to='/mis-pedidos/last'>
                <button className="w-full bg-green-600 py-3 text-white rounded-lg"
                onClick={() => handleCheckout()}
                >
                    Generar Orden
                </button>
                </Link>
            </div>
        </aside>
    );
}

export default CheckOutSideMenu;