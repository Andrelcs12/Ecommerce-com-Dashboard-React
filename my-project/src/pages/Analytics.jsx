import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { FaArrowUp, FaArrowDown, FaChartLine, FaTachometerAlt, FaHome, FaChartBar, FaUsers } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement } from 'chart.js';
import { Link } from 'react-router-dom';

// Registro de elementos do gráfico
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement);

const Analytics = () => {
  const [loading, setLoading] = useState(true);

  // Dados de Vendas Mensais
  const salesData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Vendas Mensais',
        data: [125, 150, 130, 180, 210, 190, 220, 240, 250, 270, 300, 280], // dados mais realistas
        borderColor: '#4B8F8C',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // Dados de Pedidos Realizados
  const orderData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Pedidos Realizados',
        data: [90, 110, 95, 130, 140, 150, 170, 180, 200, 210, 220, 230], // dados mais realistas
        backgroundColor: '#FF9F40',
        borderColor: '#FF9F40',
        borderWidth: 1,
      },
    ],
  };

  // Dados de Atividade dos Usuários
  const userActivityData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Atividade dos Usuários',
        data: [1500, 2000, 1800, 2200, 2500, 2800, 3000, 3200, 3300, 3400, 3600, 3700], // dados mais realistas
        backgroundColor: '#9966FF',
        borderColor: '#9966FF',
        borderWidth: 1,
      },
    ],
  };

  // Dados de Crescimento da Receita
  const revenueGrowthData = {
    labels: ['2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Crescimento da Receita (%)',
        data: [8, 12, 15, 18], // dados mais realistas
        borderColor: '#28A745',
        backgroundColor: '#28A745',
        fill: true,
      },
    ],
  };

  // Dados de Avanço Semanal
  const weeklyProgressData = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
      {
        label: 'Progresso Semanal (%)',
        data: [15, 30, 50, 70], // dados mais realistas
        borderColor: '#FF4500',
        backgroundColor: '#FF4500',
        fill: true,
      },
    ],
  };

  // Dados de Progresso Mensal
  const monthlyProgressData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Progresso Mensal (%)',
        data: [20, 40, 60, 80, 100, 95, 90, 85, 75, 70, 65, 60], // dados mais realistas
        borderColor: '#1E90FF',
        backgroundColor: '#1E90FF',
        fill: true,
      },
    ],
  };

  // Carregar dados (simulação)
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white shadow-lg p-6 transition-all duration-300">
        <h2 className="text-3xl font-bold mb-6">Análises</h2>
        <nav>
          <ul className="space-y-6 text-xl">
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center gap-2 hover:text-gray-300">
                <FaTachometerAlt /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/crescimento" className="flex items-center gap-2 hover:text-gray-300">
                <FaArrowUp /> Crescimento
              </Link>
            </li>
            <li>
              <Link to="/vendas" className="flex items-center gap-2 hover:text-gray-300">
                <FaChartBar /> Vendas
              </Link>
            </li>
            <li>
              <Link to="/user" className="flex items-center gap-2 hover:text-gray-300">
                <FaUsers /> Atividade dos Usuários
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-12 overflow-auto">
        <h1 className="text-4xl font-semibold mb-8">Análises de Performance</h1>

        {/* Indicadores de Crescimento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Crescimento da Receita */}
          <div className="bg-gray-800 shadow-xl rounded-lg p-6 flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold">Crescimento da Receita</h3>
              <p className="text-3xl font-bold text-green-500">+18% este ano</p>
            </div>
            <div className="bg-green-100 p-4 rounded-full text-green-500">
              <FaArrowUp className="text-3xl" />
            </div>
          </div>

          {/* Pedidos Realizados */}
          <div className="bg-gray-800 shadow-xl rounded-lg p-6 flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold">Pedidos Realizados</h3>
              <p className="text-3xl font-bold text-orange-500">2.500</p>
            </div>
            <div className="bg-orange-100 p-4 rounded-full text-orange-500">
              <FaArrowUp className="text-3xl" />
            </div>
          </div>
        </div>

        {/* Gráficos de Desempenho */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-800 shadow-xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Vendas Mensais</h2>
            <Line data={salesData} height={200} />
          </div>

          <div className="bg-gray-800 shadow-xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Progresso Semanal</h2>
            <Line data={weeklyProgressData} height={200} />
          </div>

          <div className="bg-gray-800 shadow-xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Progresso Mensal</h2>
            <Line data={monthlyProgressData} height={200} />
          </div>

          <div className="bg-gray-800 shadow-xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Crescimento da Receita</h2>
            <Line data={revenueGrowthData} height={200} />
          </div>
        </div>

        {/* Dados de Pedidos Realizados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-800 shadow-xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Pedidos Realizados</h2>
            <Bar data={orderData} height={200} />
          </div>

          <div className="bg-gray-800 shadow-xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Atividade dos Usuários</h2>
            <Bar data={userActivityData} height={200} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
