import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { FaArrowUp, FaArrowDown, FaChartLine } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { Link } from 'react-router-dom';

// Registro dos elementos do gráfico
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);

const Crescimento = () => {
  const [selectedSector, setSelectedSector] = useState('vendas');
  const [loading, setLoading] = useState(true);

  // Dados de Crescimento por Setor
  const setores = {
    vendas: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      data: [50, 75, 100, 120, 150, 180, 200, 210, 250, 275, 300, 350],
      color: '#28A745',
      label: 'Vendas Mensais',
    },
    marketing: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      data: [30, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 250],
      color: '#FF9F40',
      label: 'Campanhas de Marketing',
    },
    operacoes: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      data: [20, 40, 60, 70, 90, 100, 120, 140, 160, 180, 200, 230],
      color: '#007BFF',
      label: 'Operações',
    },
  };

  // Dados para o gráfico de crescimento geral
  const crescimentoGeral = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Crescimento Geral',
        data: [50, 70, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360],
        borderColor: '#6f42c1',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSectorChange = (e) => {
    setSelectedSector(e.target.value);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6">Painel de Crescimento</h2>
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
                <FaChartLine className="text-xl" /> Analytics
              </Link>
            </li>
            <li>
              <Link to="/vendas" className="hover:text-gray-400">
                <FaChartLine className="text-xl" /> Vendas
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-12 overflow-auto">
        <h1 className="text-4xl font-semibold mb-8">Crescimento - Detalhamento</h1>

        {/* Filtro de Setor */}
        <div className="mb-6">
          <label htmlFor="sector" className="text-xl font-semibold mr-4">Selecione o Setor:</label>
          <select
            id="sector"
            className="p-2 bg-gray-800 text-white border border-gray-600 rounded-lg"
            value={selectedSector}
            onChange={handleSectorChange}
          >
            <option value="vendas">Vendas</option>
            <option value="marketing">Marketing</option>
            <option value="operacoes">Operações</option>
          </select>
        </div>

        {/* Indicadores de Crescimento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Crescimento do Setor Selecionado */}
          <div className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold">{setores[selectedSector].label}</h3>
              <p className="text-3xl font-bold text-green-500">{`+${setores[selectedSector].data[11]} Crescimento em Dezembro`}</p>
            </div>
            <div className={`bg-${setores[selectedSector].color}-100 p-4 rounded-full text-${setores[selectedSector].color}-500`}>
              <FaArrowUp className="text-3xl" />
            </div>
          </div>

          {/* Crescimento Geral */}
          <div className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold">Crescimento Geral</h3>
              <p className="text-3xl font-bold text-purple-500">{`+360 Crescimento em Dezembro`}</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-full text-purple-500">
              <FaArrowUp className="text-3xl" />
            </div>
          </div>
        </div>

        {/* Gráficos de Crescimento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Crescimento do Setor Selecionado */}
          <div className="bg-white shadow-xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{setores[selectedSector].label}</h2>
            <Line data={{
              labels: setores[selectedSector].labels,
              datasets: [{
                label: setores[selectedSector].label,
                data: setores[selectedSector].data,
                borderColor: setores[selectedSector].color,
                fill: false,
                tension: 0.4,
              }],
            }} height={200} />
          </div>

          {/* Crescimento Geral */}
          <div className="bg-white shadow-xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Crescimento Geral</h2>
            <Line data={crescimentoGeral} height={200} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crescimento;
