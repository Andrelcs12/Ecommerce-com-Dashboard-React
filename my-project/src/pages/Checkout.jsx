import React, { useState, useEffect } from 'react';
import Header from './Header'; // Importa o Header

function Checkout() {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        paymentMethod: ''
    });

    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    // Carrega os itens do carrinho ao montar o componente
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
        const calculatedTotal = storedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(calculatedTotal);
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'O nome é obrigatório.';
        }

        if (!formData.address) {
            newErrors.address = 'O endereço é obrigatório.';
        }

        if (!formData.paymentMethod) {
            newErrors.paymentMethod = 'Escolha uma forma de pagamento.';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert('Compra finalizada com sucesso!');
            setFormData({
                name: '',
                address: '',
                paymentMethod: ''
            });
            setErrors({});
            setCartItems([]);
            setTotal(0);
            localStorage.removeItem('cart');
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen">
            <Header cartItemCount={cartItems.length} /> {/* Header com o número de itens no carrinho */}

            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-6">Checkout</h1>

                <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg">
                    {/* Nome */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                            Nome Completo
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full px-4 py-2 border ${
                                errors.name ? 'border-red-500' : 'border-gray-600'
                            } rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 bg-gray-700 text-white`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Endereço */}
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-300">
                            Endereço
                        </label>
                        <textarea
                            id="address"
                            rows="3"
                            value={formData.address}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full px-4 py-2 border ${
                                errors.address ? 'border-red-500' : 'border-gray-600'
                            } rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 bg-gray-700 text-white`}
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    {/* Forma de Pagamento */}
                    <div>
                        <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-300">
                            Forma de Pagamento
                        </label>
                        <select
                            id="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full px-4 py-2 border ${
                                errors.paymentMethod ? 'border-red-500' : 'border-gray-600'
                            } rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 bg-gray-700 text-white`}
                        >
                            <option value="">Selecione</option>
                            <option value="credit-card">Cartão de Crédito</option>
                            <option value="pix">PIX</option>
                            <option value="boleto">Boleto Bancário</option>
                        </select>
                        {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>}
                    </div>

                    {/* Resumo do Pedido */}
                    <div className="border-t border-gray-600 pt-4">
                        <h2 className="text-xl font-bold text-white">Resumo do Pedido</h2>
                        <ul className="mt-2 space-y-2">
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex justify-between text-gray-300">
                                    <span>
                                        {item.name} (x{item.quantity})
                                    </span>
                                    <span>R${(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-gray-300">
                            <strong>Total:</strong> R${total.toFixed(2)}
                        </p>
                    </div>

                    {/* Botão Finalizar */}
                    <button
                        type="submit"
                        className="w-full mt-6 py-3 px-4 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700"
                    >
                        Finalizar Compra
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
