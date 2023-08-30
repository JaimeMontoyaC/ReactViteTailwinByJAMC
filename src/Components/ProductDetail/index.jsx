import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} 
        product-detail flex-col fixed right-2 bg-white border border-black 
        rounded-lg overflow-y-auto`}>
            <div className='justify-between items-center p-6'>
                <div className="flex">
                    <h2 className='font-medium text-lg mb-4'> Detalle del producto</h2>
                    <XMarkIcon className='h-6 w-6 text-black absolute right-5 cursor-pointer'
                        onClick={() => context.closeProductDetail()}
                    ></XMarkIcon>
                </div>
                <figure>
                    <img className="w-full h-full rounded-lg"
                        src={context.productToShow.images}
                        alt={context.productToShow.title} />
                </figure>
                <p className="flex flex-col p-2">
                    <span className="font-normal text-2xl">${(context.productToShow.price * 4000)
                        .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                    <span className="font-normal text-md">{context.productToShow.title}</span>
                    <span className="font-extralight text-xs">{context.productToShow.description}</span>
                </p>
            </div>
        </aside>
    );
}

export default ProductDetail;
