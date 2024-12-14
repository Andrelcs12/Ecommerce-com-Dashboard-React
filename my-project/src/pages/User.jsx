import React, { useState, useEffect } from 'react';
import { FaUser, FaCheckCircle, FaTimesCircle, FaClock, FaHome, FaTachometerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const User = () => {
  const [activities, setActivities] = useState([
    { id: 1, user: 'João Silva', action: 'login', time: '2024-12-14 10:00', status: 'success' },
    { id: 2, user: 'Maria Oliveira', action: 'atualização de perfil', time: '2024-12-13 18:30', status: 'failed' },
    { id: 3, user: 'Pedro Costa', action: 'realizou uma compra', time: '2024-12-12 14:15', status: 'success' },
    { id: 4, user: 'Lucas Almeida', action: 'logout', time: '2024-12-11 09:00', status: 'success' },
    { id: 5, user: 'Ana Souza', action: 'login', time: '2024-12-10 16:30', status: 'failed' },
    { id: 6, user: 'Carlos Pereira', action: 'atualização de perfil', time: '2024-12-09 12:45', status: 'success' },
    { id: 7, user: 'Mariana Martins', action: 'realizou uma compra', time: '2024-12-08 11:10', status: 'failed' },
    { id: 8, user: 'Fernanda Rocha', action: 'logout', time: '2024-12-07 17:00', status: 'success' },
    { id: 9, user: 'Gabriel Oliveira', action: 'login', time: '2024-12-06 09:00', status: 'success' },
    { id: 10, user: 'Eduardo Ferreira', action: 'atualização de perfil', time: '2024-12-05 21:15', status: 'success' },
    { id: 11, user: 'Raquel Silva', action: 'realizou uma compra', time: '2024-12-04 14:00', status: 'success' },
    { id: 12, user: 'Rafael Costa', action: 'logout', time: '2024-12-03 10:30', status: 'failed' },
    { id: 13, user: 'Patrícia Alves', action: 'login', time: '2024-12-02 08:45', status: 'success' },
    { id: 14, user: 'Bruna Lima', action: 'atualização de perfil', time: '2024-12-01 19:00', status: 'success' },
    { id: 15, user: 'André Martins', action: 'realizou uma compra', time: '2024-11-30 17:30', status: 'failed' },
    { id: 16, user: 'Juliana Pereira', action: 'logout', time: '2024-11-29 13:00', status: 'success' },
    { id: 17, user: 'Marcelo Santos', action: 'login', time: '2024-11-28 16:20', status: 'failed' },
    { id: 18, user: 'Tatiane Rocha', action: 'atualização de perfil', time: '2024-11-27 15:40', status: 'success' },
    { id: 19, user: 'Fábio Almeida', action: 'realizou uma compra', time: '2024-11-26 11:30', status: 'success' },
    { id: 20, user: 'Camila Oliveira', action: 'logout', time: '2024-11-25 09:15', status: 'failed' },
    { id: 21, user: 'Lucas Rodrigues', action: 'login', time: '2024-11-24 08:30', status: 'success' },
    { id: 22, user: 'Marcos Souza', action: 'atualização de perfil', time: '2024-11-23 20:00', status: 'success' },
    { id: 23, user: 'Gabriela Costa', action: 'realizou uma compra', time: '2024-11-22 12:45', status: 'failed' },
    { id: 24, user: 'Denise Oliveira', action: 'logout', time: '2024-11-21 10:30', status: 'success' },
    { id: 25, user: 'Juliano Almeida', action: 'login', time: '2024-11-20 18:00', status: 'success' },
    { id: 26, user: 'Roberta Silva', action: 'atualização de perfil', time: '2024-11-19 14:00', status: 'failed' },
    { id: 27, user: 'Daniel Costa', action: 'realizou uma compra', time: '2024-11-18 13:30', status: 'success' },
    { id: 28, user: 'Eliane Pereira', action: 'logout', time: '2024-11-17 09:45', status: 'success' },
    { id: 29, user: 'Thiago Martins', action: 'login', time: '2024-11-16 15:00', status: 'failed' },
    { id: 30, user: 'Simone Lima', action: 'atualização de perfil', time: '2024-11-15 17:30', status: 'success' },
    { id: 31, user: 'Flávio Rocha', action: 'realizou uma compra', time: '2024-11-14 13:00', status: 'failed' },
    { id: 32, user: 'Carla Costa', action: 'logout', time: '2024-11-13 11:00', status: 'success' },
    { id: 33, user: 'Natália Almeida', action: 'login', time: '2024-11-12 10:30', status: 'success' },
    { id: 34, user: 'Júlio Silva', action: 'atualização de perfil', time: '2024-11-11 16:00', status: 'failed' },
    { id: 35, user: 'Paula Oliveira', action: 'realizou uma compra', time: '2024-11-10 18:15', status: 'success' },
    { id: 36, user: 'Ricardo Pereira', action: 'logout', time: '2024-11-09 19:30', status: 'failed' },
    { id: 37, user: 'Lorena Santos', action: 'login', time: '2024-11-08 20:45', status: 'success' },
    { id: 38, user: 'Victor Costa', action: 'atualização de perfil', time: '2024-11-07 22:00', status: 'failed' },
    { id: 39, user: 'Emanuelle Rocha', action: 'realizou uma compra', time: '2024-11-06 13:15', status: 'success' },
    { id: 40, user: 'Ricardo Oliveira', action: 'logout', time: '2024-11-05 15:00', status: 'success' },
    { id: 41, user: 'Felipe Almeida', action: 'login', time: '2024-11-04 18:00', status: 'failed' },
    { id: 42, user: 'Isabel Silva', action: 'atualização de perfil', time: '2024-11-03 19:30', status: 'success' },
    { id: 43, user: 'Marcela Pereira', action: 'realizou uma compra', time: '2024-11-02 12:30', status: 'failed' },
    { id: 44, user: 'Tatiane Costa', action: 'logout', time: '2024-11-01 09:00', status: 'success' },
    { id: 45, user: 'Carolina Rocha', action: 'login', time: '2024-10-31 16:30', status: 'success' },
    { id: 46, user: 'Ricardo Costa', action: 'atualização de perfil', time: '2024-10-30 20:15', status: 'failed' },
    { id: 47, user: 'Gustavo Almeida', action: 'realizou uma compra', time: '2024-10-29 19:00', status: 'success' },
    { id: 48, user: 'Débora Pereira', action: 'logout', time: '2024-10-28 17:45', status: 'failed' },
    { id: 49, user: 'Patrícia Lima', action: 'login', time: '2024-10-27 11:30', status: 'success' },
    { id: 50, user: 'Sérgio Rocha', action: 'atualização de perfil', time: '2024-10-26 14:30', status: 'failed' },
  ]);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Painel de Atividades</h2>
        <nav>
          <ul className="space-y-6 text-xl">
            <li>
              <Link to="/dashboard" className="flex items-center space-x-3 hover:text-gray-400">
                <FaTachometerAlt className="text-xl" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center space-x-3 hover:text-gray-400">
                <FaHome className="text-xl" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center space-x-3 hover:text-gray-400">
                <FaUser className="text-xl" />
                <span>Usuários</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center space-x-3 hover:text-gray-400">
                <FaClock className="text-xl" />
                <span>Atividades</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-12 overflow-auto">
        <h1 className="text-4xl font-semibold mb-8">Atividades Recentes</h1>

        {/* Tabela de Atividades */}
        <div className="bg-gray-800 shadow-xl rounded-lg p-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="text-left py-3 px-6">Usuário</th>
                <th className="text-left py-3 px-6">Ação</th>
                <th className="text-left py-3 px-6">Data/Hora</th>
                <th className="text-left py-3 px-6">Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id} className="border-b border-gray-700">
                  <td className="py-4 px-6">{activity.user}</td>
                  <td className="py-4 px-6">{activity.action}</td>
                  <td className="py-4 px-6">{activity.time}</td>
                  <td className="py-4 px-6">
                    {activity.status === 'success' ? (
                      <span className="text-green-500 flex items-center">
                        <FaCheckCircle className="mr-2" />
                        Sucesso
                      </span>
                    ) : (
                      <span className="text-red-500 flex items-center">
                        <FaTimesCircle className="mr-2" />
                        Falhou
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default User;
