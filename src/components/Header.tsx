import React from 'react';
import { Link } from 'react-router-dom';


import './Header.css'
import { userStore } from '@/store';

function Header() {
    const handleLogout = () => {
        // Lógica de cierre de sesión
        userStore.value = undefined
        console.log('Cerrar sesión');
    };
    const handleLogin = () => {
        // Lógica de inicio de sesión
        console.log('Iniciar sesión');
    };
    const routes = [{
        name: "Buscador",
        className: "buscador",
        href: "/lista"
    },
    {
        name: "Mapa",
        className: "mapa",
        href: "/mapa"
    },
    {
        name: "Quienes somos",
        className: "about",
        href: "/about"
    },
    ]

    return (
        <header className='bg-dark-blue text-primary-blue p-1 m-1'>
            <nav className=' mr-1 text-light-blue p-5 flex flex-row gap-10'>
                <Link to="/">
                    <img src="/logo-app.png" alt="Logo" className='h-[3rem]' />
                </Link>
                <ul className='flex items-end font-bold decoration-none gap-8 w-full'>

                    {routes.map(route => (
                        <li key={route.className + "-ruta"}>
                            <Link className={route.className} to={route.href}>{route.name}</Link>
                        </li>
                    ))}

                    <span className="ml-auto mr-1 self-start">
                        {(!userStore.value?.username) &&
                            <>
                                <Link className='login' to="/login" style={{ marginRight: '1rem' }}>Login</Link>
                                <Link className='registro' to="/registro">Registro</Link>
                            </>
                        }
                        {userStore.value?.username &&
                            <>
                                <span style={{ marginRight: '1rem' }}>Bienvenido, <Link to="/perfil">{userStore.value.username}</Link></span>
                                <button onClick={handleLogout}>Cerrar sesión</button>
                            </>
                        }
                    </span>
                </ul>


            </nav>
        </header>
    );
}

export default Header;