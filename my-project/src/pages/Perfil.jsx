import React, { useState, useEffect } from 'react';  // Importando useState e useEffect
import Header from './Header';

function Perfil() {
    const [cartItems, setCartItems] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        email: 'andre@example.com',
        phone: '(11) 98765-4321',
        address: 'São Paulo, SP',
        birthDate: '01/01/2007',
    });

    // Carrega os itens do carrinho do localStorage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);
    
    // Conta a quantidade de itens no carrinho
    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // Aqui você pode salvar os dados editados, por exemplo, no localStorage ou enviar para um servidor.
        console.log('Informações salvas:', formData);
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDeleteAccount = () => {
        if (window.confirm("Tem certeza de que deseja deletar sua conta?")) {
            console.log("Conta deletada");
            // Adicione lógica para deletar conta aqui (ex: enviar para API)
        }
    };

    return (
        <div className="bg-gray- min-h-screen flex flex-col items-center justify-start">
            <div className=" w-full b">
                <Header cartItemCount={cartItemCount} />
                
                {/* Perfil Container */}
                <div className="bg-gray-800 shadow-xl l p-8 space-y-8">
                    
                    {/* Perfil Header */}
                    <div className="flex items-center gap-8 mb-8">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Foto de Perfil"
                            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
                        />
                        <div>
                            <h2 className="text-4xl font-semibold text-gray-300">André Lcs</h2>
                            <p className="text-lg text-gray-300">Administrador</p>
                        </div>
                    </div>
                    
                    {/* Informações Pessoais e Edição */}
                    <div className="flex gap-12">
                        {/* Informações Pessoais */}
                        <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informações Pessoais</h3>
                            <div className="space-y-4">
                                {isEditing ? (
                                    <>
                                        <div className="flex flex-col">
                                            <label className="text-gray-700" htmlFor="email">Email:</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="mt-2 px-4 py-2 rounded-lg border border-gray-300"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-gray-700" htmlFor="phone">Telefone:</label>
                                            <input
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="mt-2 px-4 py-2 rounded-lg border border-gray-300"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-gray-700" htmlFor="address">Endereço:</label>
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="mt-2 px-4 py-2 rounded-lg border border-gray-300"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-gray-700" htmlFor="birthDate">Data de Nascimento:</label>
                                            <input
                                                type="date"
                                                id="birthDate"
                                                name="birthDate"
                                                value={formData.birthDate}
                                                onChange={handleInputChange}
                                                className="mt-2 px-4 py-2 rounded-lg border border-gray-300"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-gray-700"><span className="font-semibold text-gray-800">Email:</span> {formData.email}</p>
                                        <p className="text-gray-700"><span className="font-semibold text-gray-800">Telefone:</span> {formData.phone}</p>
                                        <p className="text-gray-700"><span className="font-semibold text-gray-800">Endereço:</span> {formData.address}</p>
                                        <p className="text-gray-700"><span className="font-semibold text-gray-800">Data de Nascimento:</span> {formData.birthDate}</p>
                                    </>
                                )}
                            </div>
                            <div className="mt-6">
                                {isEditing ? (
                                    <button
                                        onClick={handleSaveClick}
                                        className="w-full bg-green-600 text-white py-3 rounded-lg transition duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                    >
                                        Salvar
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleEditClick}
                                        className="w-full bg-blue-600 text-white py-3 rounded-lg transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                        Editar Informações
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Configurações */}
                        <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Configurações</h3>
                            <div className="space-y-4">
                                <button
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    Alterar Senha
                                </button>
                                <button
                                    onClick={handleEditClick}
                                    className="w-full bg-gray-600 text-white py-3 rounded-lg transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                                >
                                    Editar Informações Pessoais
                                </button>
                                <button
                                    onClick={handleDeleteAccount}
                                    className="w-full bg-red-600 text-white py-3 rounded-lg transition duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                >
                                    Deletar Conta
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Histórico de Atividades */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Histórico de Atividades</h3>
                        <ul className="space-y-4 text-gray-700">
                            <li>- Pedido #1234 realizado em 12/12/2024</li>
                            <li>- Alteração de senha em 10/12/2024</li>
                            <li>- Login realizado em 09/12/2024</li>
                        </ul>
                    </div>
                    <footer className="-12 text-center text-gray-500">
                    <p className="text-sm">&copy; 2024 Gestor de Produtos. Todos os direitos reservados.</p>
                </footer>
                </div>
                
            </div>
        </div>
    );
}

export default Perfil;