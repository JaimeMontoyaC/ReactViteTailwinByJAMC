import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
    //Llamo el contador,  el cual cambio desde el onClick del icono "+"
    const context = useContext(ShoppingCartContext);

    const showProduct = (ProductDetail) => {
        context.openProductDetail();
        context.setProductToShow(ProductDetail);
        context.closeCheckOutSideMenu();
    }

    const addProductosTocart = (event, productData) => {
        //Evita que se active todo el evento del onClick, activando solo el menu del carrito de compras
        event.stopPropagation();
        //Añade una lista para el carrito de compras, añadiendo cada evento nuevo
        context.setCartProducts([...context.cartProducts, productData]);
        //Aumenta el contador del carrito de compras
        context.setCount(context.count + 1);
        context.openCheckOutSideMenu();
        context.closeProductDetail();
    }

    //Retornamos un icono según la orden
    const renderIcon = (id) => {
        //Busca dentro de la lista de productos el id, para saber que icono retornar
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <div className="absolute top-0 right-0 flex justify-center
                items-center bg-white/0 w-6 h-6 m-2 p-1 text-base"
                >
                    ✅
                </div>
            )
        } else {
            return (
                <div className="absolute top-0 right-0 flex justify-center
                items-center bg-white  w-6 h-6 rounded-full m-2 p-1 text-base"
                    onClick={(event) => addProductosTocart(event, data.data)}
                >
                    ➕
                </div>
            )
        }

    }

    return (
        <div
            className="bg-gray-200 shadow-lg cursor-pointer w-65 h-60 rounded-lg"
            onClick={() => showProduct(data.data)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg 
                    text-black text-xs m-2 px-3 py-0.5">
                    {data.data.category.name}
                </span>
                <img className="w-full h-full object-cover rounded-lg rounded-b-none"
                    src={data.data.images[0]}
                    alt={data.data.description} />
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-xs font-medium px-1">{data.data.title}</span>
                <span className="text-xs font-medium px-1">
                    ${(data.data.price * 4000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
            </p>
        </div>
    );
}

export default Card;