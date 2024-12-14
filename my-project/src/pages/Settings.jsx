import React, { useState } from 'react';
import { FaUserCog, FaBell, FaLock, FaSlidersH, FaChevronLeft, FaChevronRight, FaAddressCard, FaCreditCard, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Settings = () => {
  const [openMenu, setOpenMenu] = useState(true);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className={`w-64 bg-gray-800 text-white p-6 transition-all duration-300 ${openMenu ? 'block' : 'hidden'}`}>
        <h2 className="text-3xl font-bold mb-6">Configurações</h2>
        <nav>
          <ul className="space-y-6 text-xl">
            <li>
              <Link to="/perfil" className="flex items-center space-x-3 hover:text-gray-400">
                <FaUserCog className="text-xl" />
                <span>Perfil</span>
              </Link>
            </li>
            <li>
              <Link to="/notificacoes" className="flex items-center space-x-3 hover:text-gray-400">
                <FaBell className="text-xl" />
                <span>Notificações</span>
              </Link>
            </li>
            <li>
              <Link to="/seguranca" className="flex items-center space-x-3 hover:text-gray-400">
                <FaLock className="text-xl" />
                <span>Segurança</span>
              </Link>
            </li>
            <li>
              <Link to="/preferencias" className="flex items-center space-x-3 hover:text-gray-400">
                <FaSlidersH className="text-xl" />
                <span>Preferências</span>
              </Link>
            </li>
            <li>
              <Link to="/endereco" className="flex items-center space-x-3 hover:text-gray-400">
                <FaAddressCard className="text-xl" />
                <span>Endereços</span>
              </Link>
            </li>
            <li>
              <Link to="/pagamento" className="flex items-center space-x-3 hover:text-gray-400">
                <FaCreditCard className="text-xl" />
                <span>Pagamento</span>
              </Link>
            </li>
            <li>
              <Link to="/sair" className="flex items-center space-x-3 hover:text-gray-400">
                <FaSignOutAlt className="text-xl" />
                <span>Sair</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-12 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-semibold">Configurações</h1>
          <button
            onClick={toggleMenu}
            className="text-2xl text-white bg-gray-800 p-2 rounded-md focus:outline-none hover:bg-gray-700"
          >
            {openMenu ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>

        {/* Seções de Configurações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Seção Perfil */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-gray-900">
            <h3 className="text-2xl font-semibold mb-4">Perfil</h3>
            <p className="mb-4">Aqui você pode alterar suas informações pessoais, como nome, foto e preferências de contato.</p>
            <Link to="/perfil" className="text-blue-500 hover:text-blue-700">Editar Perfil</Link>
          </div>

          {/* Seção Notificações */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-gray-900">
            <h3 className="text-2xl font-semibold mb-4">Notificações</h3>
            <p className="mb-4">Gerencie suas preferências de notificações e alertas para diferentes eventos.</p>
            <Link to="/notificacoes" className="text-blue-500 hover:text-blue-700">Configurar Notificações</Link>
          </div>

          {/* Seção Segurança */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-gray-900">
            <h3 className="text-2xl font-semibold mb-4">Segurança</h3>
            <p className="mb-4">Altere sua senha, habilite a autenticação de dois fatores e gerencie dispositivos conectados.</p>
            <Link to="/seguranca" className="text-blue-500 hover:text-blue-700">Configurar Segurança</Link>
          </div>

          {/* Seção Preferências */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-gray-900">
            <h3 className="text-2xl font-semibold mb-4">Preferências</h3>
            <p className="mb-4">Ajuste as configurações do seu painel, tema e outras preferências personalizadas.</p>
            <Link to="/preferencias" className="text-blue-500 hover:text-blue-700">Alterar Preferências</Link>
          </div>

          {/* Seção Endereço */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-gray-900">
            <h3 className="text-2xl font-semibold mb-4">Endereço</h3>
            <p className="mb-4">Adicione ou edite seus endereços de entrega para compras rápidas.</p>
            <Link to="/endereco" className="text-blue-500 hover:text-blue-700">Gerenciar Endereços</Link>
          </div>

          {/* Seção Pagamento */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-gray-900">
            <h3 className="text-2xl font-semibold mb-4">Pagamento</h3>
            <p className="mb-4">Gerencie seus métodos de pagamento e informações de faturamento.</p>
            <Link to="/pagamento" className="text-blue-500 hover:text-blue-700">Gerenciar Pagamento</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
