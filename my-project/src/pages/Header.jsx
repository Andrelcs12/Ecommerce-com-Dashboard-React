import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center text-white bg-gradient-to-r from-blue-600 to-purple-700 shadow-md h-20 px-6 sm:px-32">
      <h1 className="text-4xl font-bold">LOJA DO DRÉ</h1>

      {/* Ícone do menu hambúrguer (visível apenas em telas pequenas) */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMenu} // Alterna o menu quando clicado
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Menu lateral (visível apenas em telas pequenas) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-50"
          onClick={closeMenu} // Fechar ao clicar na área escura
        >
          <div
            className="absolute right-0 top-0 w-3/4 h-full bg-gradient-to-r from-blue-600 to-purple-700 transition-transform duration-300 ease-in-out transform translate-x-0"
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do menu
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeMenu} // Fechar o menu ao clicar no X
            >
              &times;
            </button>
            <ul className="flex flex-col gap-6 text-lg items-center py-12">
              <li>
                <Link to="/" className="text-white hover:underline" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-white hover:underline" onClick={closeMenu}>Produtos</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-white hover:underline" onClick={closeMenu}>Dashboard</Link>
              </li>
              <li>
                <Link to="/perfil" className="text-white hover:underline" onClick={closeMenu}>Perfil</Link>
              </li>
              <li>
                <Link 
                  to="/cart" 
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={closeMenu}
                >
                  Carrinho ({cartItemCount})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Menu horizontal para telas grandes (desktop) */}
      <nav className="lg:flex lg:gap-8 text-lg items-center hidden">
        <ul className="flex gap-8">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:underline">Produtos</Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          </li>
          <li>
            <Link to="/perfil" className="hover:underline">Perfil</Link>
          </li>
          <li>
            <Link 
              to="/cart" 
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Carrinho ({cartItemCount})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;