import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Adicione esta linha
import { Line, Bar } from 'react-chartjs-2';
import { FaArrowUp, FaArrowDown, FaChartLine } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

// Registro dos elementos do gráfico
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);

const Vendas = () => {
  const [loading, setLoading] = useState(true);

  const vendasMensaisData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Vendas Mensais',
        data: [50, 75, 100, 120, 150, 180, 200, 210, 250, 275, 300, 350],
        borderColor: '#4B8F8C',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const vendasComparacaoData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Vendas de 2023',
        data: [60, 80, 90, 110, 140, 170, 190, 210, 240, 270, 300, 320],
        backgroundColor: '#FF9F40',
        borderColor: '#FF9F40',
        borderWidth: 1,
      },
      {
        label: 'Vendas de 2024',
        data: [50, 75, 100, 120, 150, 180, 200, 210, 250, 275, 300, 350],
        backgroundColor: '#28A745',
        borderColor: '#28A745',
        borderWidth: 1,
      },
    ],
  };

  const receitaData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Receita Gerada',
        data: [5000, 8000, 9500, 11500, 13500, 16000, 18000, 19000, 22000, 25000, 27000, 30000],
        borderColor: '#28A745',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6">Painel de Vendas</h2>
        <nav>
          <ul className="space-y-6 text-xl">
            <li>
              <Link to="/dashboard" className="hover:text-gray-400">
                <FaArrowUp className="text-xl" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                <FaArrowDown className="text-xl" /> Home
              </Link>
            </li>
            <li>
              <Link to="/Analytics" className="hover:text-gray-400">
                <FaChartLine className="text-xl" /> Análises
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-12 overflow-auto">
        <h1 className="text-4xl font-semibold mb-8">Vendas - Detalhamento</h1>

        {/* Indicadores de Vendas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Total de Vendas */}
          <div className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold">Vendas Totais</h3>
              <p className="text-3xl font-bold text-green-500">+350 vendas em Dezembro</p>
            </div>
            <div className="bg-green-100 p-4 rounded-full text-green-500">
              <FaArrowUp className="text-3xl" />
            </div>
          </div>

          {/* Receita Total */}
          <div className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold">Receita Total</h3>
              <p className="text-3xl font-bold text-orange-500">$30,000</p>
            </div>
            <div className="bg-orange-100 p-4 rounded-full text-orange-500">
              <FaArrowUp className="text-3xl" />
            </div>
          </div>
        </div>

        {/* Gráficos de Vendas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Vendas Mensais */}
          <div className="bg-white shadow-xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Vendas Mensais</h2>
            <Line data={vendasMensaisData} height={200} />
          </div>

          {/* Comparação de Vendas 2023 vs 2024 */}
          <div className="bg-white shadow-xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Comparação de Vendas (2023 vs 2024)</h2>
            <Bar data={vendasComparacaoData} height={200} />
          </div>

          {/* Receita Gerada */}
          <div className="bg-white shadow-xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Receita Gerada</h2>
            <Line data={receitaData} height={200} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vendas;
