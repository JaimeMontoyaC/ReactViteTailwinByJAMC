//Hooks
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
//Components
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Navbar from '../../Components/Navbar';
//Styles
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/shoes', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/mi-cuenta', element: <MyAccount /> },
    { path: '/mi-pedido', element: <MyOrder /> },
    { path: '/mis-pedidos', element: <MyOrders /> },
    { path: '/mis-pedidos/last', element: <MyOrder /> },
    { path: '/mis-pedidos/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/iniciar-sesion', element: <SignIn /> },
  ]);

  return routes;
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>

  );
}

export default App;
