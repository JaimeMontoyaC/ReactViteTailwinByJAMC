import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
    const context = useContext(ShoppingCartContext);

    return (
        <>
            <Layout>
                <div className="flex w-80 items-center justify-center relative mb-4">
                    <h1 className='font-medium text-lg mb-4'>
                        Mis Pedidos
                    </h1>
                </div>
                {
                    context.order.map((order, index) => (
                        <Link key={index} to={`/mis-pedidos/${index}`}>
                            <OrdersCard
                                totalPrice={order.totalPrice}
                                totalProducts={order.totalProducts}
                            />
                        </Link>
                    ))
                }
            </Layout>
        </>
    );
}

export default MyOrders;