import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


import './Header.css'

function Header({ user }) {
    const handleLogout = () => {
        // Lógica de cierre de sesión
        console.log('Cerrar sesión');
    };
    const handleLogin = () => {
        // Lógica de inicio de sesión
        console.log('Iniciar sesión');
    };

    return (
        <header className='bg-dark-blue text-primary-blue p-1 m-1'>
            <nav className='flex items-end font-bold decoration-none mr-1 text-light-blue p-5 gap-2'>
                <Link to="/" className='mr-1'>
                    <img src={logo} alt="Logo" className='h-[3rem]' />
                </Link>
                
                <Link className='buscador' to="/lista" style={{ marginRight: '1rem' }}>Buscador</Link>
                <Link className='mapa' to="/mapa" style={{ marginRight: '1rem' }}>Mapa</Link>
                <Link className='about' to="/about">Acerca de nosotros</Link>
                
                <span className="ml-auto mr-1 self-start">
                    {(!user) &&
                        <>
                            <Link className='login' to="/login" style={{ marginRight: '1rem' }}>Login</Link>
                            <Link className='registro' to="/registro">Registro</Link>
                        </>
                    }
                    {user &&
                        <>
                            <span style={{ marginRight: '1rem' }}>Bienvenido, <Link to="/perfil">{user}</Link></span>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                        </>
                    }
                </span>


            </nav>
        </header>
    );
}

export default Header;