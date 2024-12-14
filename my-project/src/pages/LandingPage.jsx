import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import AOS from 'aos';  // Importando AOS
import 'aos/dist/aos.css';  // Importando o CSS do AOS

function LandingPage() {
    const [cartItems, setCartItems] = useState([]);

    // Carrega os itens do carrinho do localStorage
    useEffect(() => {
        AOS.init({ duration: 1000 });  // Inicializa o AOS com duração de 1000ms
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    // Conta a quantidade de itens no carrinho
    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="min-h-screen w-full text-slate-50">
            {/* Header */}
            <Header cartItemCount={cartItemCount} />

            {/* Main Section */}
            <main className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="text-center">
                    <h1 
                        data-aos="fade-up" 
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 transition-transform transform hover:scale-105"
                    >
                        Gestor de Estoque
                    </h1>
                    <h2 
                        data-aos="fade-up" 
                        data-aos-delay="200" 
                        className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 transition-transform transform hover:scale-105"
                    >
                        Simplifique seu controle de estoque
                    </h2>
                    <p 
                        data-aos="fade-up" 
                        data-aos-delay="400" 
                        className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 opacity-90 hover:opacity-100 transition-all"
                    >
                        Organize, monitore e otimize seus produtos de forma fácil e eficiente.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            to="/dashboard"
                            data-aos="slide-right"
                            data-aos-delay="600"
                            className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-3 rounded hover:bg-blue-700 transition-all transform hover:scale-105"
                        >
                            Entrar no painel
                        </Link>
                        <Link
                            to="/products"
                            data-aos="slide-left"
                            data-aos-delay="800"
                            className="bg-gray-500 text-white px-6 py-3 md:px-8 md:py-3 rounded hover:bg-gray-600 transition-all transform hover:scale-105"
                        >
                            Ver produtos
                        </Link>
                    </div>
                </div>
            </main>

            {/* Benefits Section */}
            <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 bg-gray-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
                    <div 
                        data-aos="fade-up" 
                        data-aos-delay="200" 
                        className="bg-gray-700 p-8 rounded shadow-lg hover:scale-105 transform transition-all hover:shadow-xl"
                    >
                        <h1 className="text-2xl font-semibold text-blue-400">Controle em tempo real</h1>
                        <p className="text-gray-300 mt-4">Visualize todas as mudanças no estoque instantaneamente.</p>
                    </div>
                    <div 
                        data-aos="fade-up" 
                        data-aos-delay="400" 
                        className="bg-gray-700 p-8 rounded shadow-lg hover:scale-105 transform transition-all hover:shadow-xl"
                    >
                        <h1 className="text-2xl font-semibold text-green-400">Gerenciamento eficiente</h1>
                        <p className="text-gray-300 mt-4">Adicione, edite e remova produtos de forma simples.</p>
                    </div>
                    <div 
                        data-aos="fade-up" 
                        data-aos-delay="600" 
                        className="bg-gray-700 p-8 rounded shadow-lg hover:scale-105 transform transition-all hover:shadow-xl"
                    >
                        <h1 className="text-2xl font-semibold text-yellow-400">Resumo de compras</h1>
                        <p className="text-gray-300 mt-4">Monitore o carrinho e finalize compras rapidamente.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-center py-6 transition-all hover:bg-gray-700">
                <p className="text-gray-400 text-sm">&copy; 2024 Loja do Dré. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
