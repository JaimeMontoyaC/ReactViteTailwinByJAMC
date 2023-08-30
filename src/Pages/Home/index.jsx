//Hooks
import { useContext } from "react";
//Components
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card
            data={item}
            key={item.id}
          />
        ))
      )
    } else {
      return (
        <div className='font-medium text-lg absolute right-80 mt-6'>
          🤦‍♂️🤦‍♀️🤦‍♂️🤦‍♀️🤦‍♂️🤦‍♀️🤦‍♂️ ¿No le enseñaron a escribir en el colegio o que? 🤦‍♂️🤦‍♀️🤦‍♂️🤦‍♀️🤦‍♂️🤦‍♀️🤦‍♂️
        </div>
      )
    }
  }

  return (
    <>
      <Layout>
        <h1 className='font-medium text-lg mb-4'>
          Tienda Completa
        </h1>
        <input
          className="rounded-lg bg-gray-200 shadow-lg border w-80 p-4 mb-4 focus:outline-green-400"
          type="text"
          placeholder="Buscar producto"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
}

export default Home;