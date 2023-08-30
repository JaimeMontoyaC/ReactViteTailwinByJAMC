import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {

    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4 text-black font-bold'

    const openShopingCart = () => {
        context.openCheckOutSideMenu();
        context.closeProductDetail();
    }

    return (
        <nav className="flex justify-between items-center fixed bg-green-600/60 text-cyan-100
                    z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to='/'
                    >
                        Tienda JAMC
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    >
                        Todos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('Clothes')}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    >
                        Ropa
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('Electronics')}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    >
                        Electrónica
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory('Furniture')}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    >
                        Muebles
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/shoes'
                        onClick={() => context.setSearchByCategory('Shoes')}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    >
                        Zapatos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory('Others')}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    >
                        Otros
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black">
                    jaimeandres20_12@hotmail.com
                </li>
                <li>
                    <NavLink
                        to='/mis-pedidos'
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    >
                        Mis pedidos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/mi-cuenta'
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    >
                        Mi Cuenta
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/iniciar-sesion'
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    >
                        Iniciar Sesión
                    </NavLink>
                </li>
                <li className="cursor-pointer"
                    onClick={() => openShopingCart()}>
                    🛒 {context.count}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;