import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { FaHome, FaBox, FaShoppingCart, FaUser, FaChartBar, FaCog, FaHeadset, FaEnvelope, FaBell, FaBars, FaSun, FaMoon } from 'react-icons/fa';

// Registre os elementos necessários para os gráficos
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Inicialmente fechado para telas menores
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark'); // Tema padrão (escuro)
  
  const salesData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Vendas Mensais',
        data: [65, 59, 80, 81, 72, 62, 68, 76, 85, 90, 78, 70],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const productData = {
    labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
    datasets: [
      {
        label: 'Estoque de Produtos',
        data: [50, 20, 35, 30],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const orderData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Pedidos Realizados',
        data: [45, 60, 50, 65, 70, 75, 58, 68, 89, 80, 85, 75, 80],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const userActivityData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Atividade dos Usuários',
        data: [200, 300, 250, 400, 350, 450, 650, 400, 500, 430, 550, 500],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Salva a preferência no localStorage
  };

  return (
    <div className={`flex h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} relative`}>
      {/* Botão de alternância (toggle) */}
      <button
        onClick={toggleSidebar}
        className={`lg:hidden fixed top-4 left-4 z-50 p-4 text-white ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-500'} rounded-full shadow-md`}
      >
        <FaBars className="text-2xl" />
      </button>

      {/* Botão de alternância de tema */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-4 text-white bg-gray-800 rounded-full shadow-md"
      >
        {theme === 'dark' ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
      </button>

      {/* Navegação lateral */}
      <aside
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static top-0 left-0 w-64 h-full ${
          theme === 'dark'
            ? 'bg-gray-900 text-white'  // Fundo escuro e texto claro
            : 'bg-white text-gray-900'  // Fundo claro e texto escuro
        } text-white shadow-lg transition-transform duration-300 ease-in-out p-6`}>        
        <h2 className="text-3xl font-bold mb-6 sm:mt-12 lg:mt-0">Painel de Controle</h2>
        <nav>
          <ul className="space-y-6 text-xl ">
            <li className="flex items-center space-x-4 border-b-blue-50">
              <FaHome className="text-xl" />
              <Link to="/" className="hover:text-gray-400 transition duration-300 border-b-blue-100">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <FaBox className="text-xl" />
              <Link to="/products" className="hover:text-gray-400 transition duration-300">
                Produtos
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <FaShoppingCart className="text-xl" />
              <Link to="/cart" className="hover:text-gray-400 transition duration-300">
                Carrinho
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <FaUser className="text-xl" />
              <Link to="/perfil" className="hover:text-gray-400 transition duration-300">
                Perfil
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <FaChartBar className="text-xl" />
              <Link to="/analytics" className="hover:text-gray-400 transition duration-300">
                Análises
              
             </Link>
            </li>
            <li className="flex items-center space-x-4">
              <FaCog className="text-xl" />
              <Link to="/settings" className="hover:text-gray-400 transition duration-300">
                Configurações
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <FaHeadset className="text-xl" />
              <Link to="/support" className="hover:text-gray-400 transition duration-300">
                Suporte
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <FaEnvelope className="text-xl" />
              <Link to="/messages" className="hover:text-gray-400 transition duration-300">
                Mensagens
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <FaBell className="text-xl" />
              <Link to="/notifications" className="hover:text-gray-400 transition duration-300">
                Notificações
              </Link>
            </li>
          </ul>
        </nav>

      </aside>

      {/* Conteúdo principal */}
      <main className={`flex-1 p-8 overflow-auto ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} text-white`}>
      <h1 className={`text-4xl font-semibold mb-8 sm:ml-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Dashboard</h1>


        {/* Indicadores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl sm:font-bold">Total de Vendas</h3>
              <p className="text-3xl font-bold text-green-500 sm:text-2xl">R$ 132.320</p>
            </div>
            <div className="bg-green-100 p-4 rounded-full text-green-500">
              <span className="text-3xl">💰</span>
            </div>
          </div>

          <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl sm:font-bold">Produtos em Estoque</h3>
              <p className="text-3xl font-bold text-blue-500">345</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-full text-blue-500">
              <span className="text-3xl">📦</span>
            </div>
          </div>

          <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl sm:font-bold">Usuários Ativos</h3>
              <p className="text-3xl font-bold text-purple-500">840</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-full text-purple-500">
              <span className="text-3xl">👥</span>
            </div>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-800 p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Vendas Mensais</h2>
            <Line data={salesData} height={200} />
          </div>

          <div className="bg-gray-800 p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Estoque de Produtos</h2>
            <Bar data={productData} height={200} />
          </div>

          <div className="bg-gray-800 p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Pedidos Realizados</h2>
            <Bar data={orderData} height={200} />
          </div>

          <div className="bg-gray-800 p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Atividade dos Usuários</h2>
            <Bar data={userActivityData} height={200} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
