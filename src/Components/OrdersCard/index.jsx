const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    { }
    return (
        <div className="flex justify-between items-center border w-full p-4
        rounded-lg mb-4 bg-gray-200 shadow-lg">
            <p className='flex justify-between'>
                <div className='flex flex-col'>
                    <span className='font-light text-sm'>🗓️ 29.08.2023</span>
                    <span className='font-light text-sm'>🛍️ {totalProducts} productos</span>
                </div>
                <span className='font-medium text-xl'>💰${(totalPrice)
                    .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
            </p>
        </div>
    );
}

export default OrdersCard;