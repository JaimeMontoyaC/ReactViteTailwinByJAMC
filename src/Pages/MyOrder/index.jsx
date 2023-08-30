import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
    const context = useContext(ShoppingCartContext);
    //Hago lectura de la URL
    const currentPath = window.location.pathname;
    //Elimina de lo capturado en la URL todo lo que esta antes de "/"
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1);
    if (index==='last') {
        index = context.order?.length -1
    }

    return (
        <>
            <Layout>
                <div className="flex w-80 items-center justify-center relative mb-6">
                    <Link className="absolute left-0" to={`/mis-pedidos`}>
                        <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer mb-4'></ChevronLeftIcon>
                    </Link>
                    <h1 className='font-medium text-lg mb-4'>
                        Mi Pedido
                    </h1>
                </div>
                <div className="flex flex-col w-80">
                    {
                        context.order?.[index]?.products.map(product => (
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                image={product.images[0]}
                                price={(product.price * 4000)
                                    .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            />
                        ))
                    }
                </div>
            </Layout>
        </>
    );
}

export default MyOrder;