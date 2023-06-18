import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div
                className="menu-toggle"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <h1 className="title">
                <span>MyWeb</span>
                <span className="gradiente"> Currículum</span>
            </h1>
            <nav className={menuOpen ? 'nav open' : 'nav'}>
                <ul className="nav-list">
                    <li><a href="/">Página Principal</a></li>
                    <li><a href="/sobremi">Sobre mí</a></li>
                    <li><a href="/formacion">Formación</a></li>
                    <li><a href="/experiencia">Experiencia profesional</a></li>
                    <li><a href="/idiomas">Idiomas</a></li>
                    <li><a href="/programas">Programas</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                    <li><a href="/reloj">Reloj</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
