import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [reviews, setReviews] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [cartItems, setCartItems] = useState([]); // Estado para os itens do carrinho

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Erro ao carregar os detalhes do produto:', error);
            }
        };

        const fetchReviews = () => {
            setReviews([
                {
                    name: 'Carlos Silva',
                    rating: 5,
                    comment: 'Excelente qualidade! Super recomendo.',
                },
                {
                    name: 'Fernanda Souza',
                    rating: 4,
                    comment: 'Muito bom, mas poderia ser um pouco mais barato.',
                },
            ]);
        };

        // Carregar os itens do carrinho do localStorage
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);

        fetchProduct();
        fetchReviews();
    }, [id]);

    // Conta a quantidade total de itens no carrinho
    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            alert('Por favor, selecione uma cor e um tamanho antes de adicionar ao carrinho.');
            return;
        }

        const cartItem = {
            ...product,
            selectedColor,
            selectedSize,
            quantity: 1,
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productIndex = cart.findIndex(item => item.id === cartItem.id && item.selectedColor === selectedColor && item.selectedSize === selectedSize);

        if (productIndex !== -1) {
            cart[productIndex].quantity += 1;
        } else {
            cart.push(cartItem);
        }

        // Atualizar o carrinho no localStorage e no estado
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartItems(cart); // Atualiza o estado do carrinho
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { user: 'Usuário', message: newMessage }]);
            setNewMessage('');
        }
    };

    if (!product) {
        return <div className="text-center py-10 text-white text-xl">Carregando...</div>;
    }

    return (
        <>
            <Header cartItemCount={cartItemCount} /> {/* Passando a quantidade do carrinho para o Header */}
            <div className="min-h-screen py-12 px-6 bg-gradient-to-b from-gray-900 to-gray-700 text-white">
                <div className="max-w-6xl mx-auto p-6 bg-gray-800 rounded-lg shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-96 object-cover rounded-lg shadow-md transform transition duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold">{product.title}</h1>
                            <p className="text-lg italic text-gray-300">Categoria: {product.category}</p>
                            <p className="text-md text-gray-400">{product.description}</p>

                            <div>
                                <h3 className="text-xl font-medium">Cor</h3>
                                <select
                                    className="mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-lg w-full"
                                    value={selectedColor}
                                    onChange={(e) => setSelectedColor(e.target.value)}
                                >
                                    <option value="">Selecione uma cor</option>
                                    <option value="Azul">Azul</option>
                                    <option value="Vermelho">Vermelho</option>
                                    <option value="Preto">Preto</option>
                                    <option value="Branco">Branco</option>
                                </select>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium">Tamanho</h3>
                                <select
                                    className="mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-lg w-full"
                                    value={selectedSize}
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                >
                                    <option value="">Selecione um tamanho</option>
                                    <option value="Pequeno">Pequeno</option>
                                    <option value="Médio">Médio</option>
                                    <option value="Grande">Grande</option>
                                </select>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4 sm:gap-8">
                                <span className="text-3xl font-bold text-green-400 sm:text-4xl">
                                      R${product.price.toFixed(2)}  </span>
  
                                <button
                                    onClick={handleAddToCart}
                                    className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-500 w-full sm:w-auto">
                                <Link to="/cart" className="w-full sm:w-auto">Adicionar ao Carrinho</Link>
                            </button>
                        </div>

                        </div>
                    </div>

                    {/* Seção de Comentários dos Clientes */}
                    <div className="mt-10 border-t border-gray-600 pt-6">
                        <h2 className="text-2xl font-semibold mb-6">Comentários dos Clientes</h2>
                        <div className="space-y-6">
                            {reviews.map((review, index) => (
                                <div key={index} className="border-b border-gray-500 pb-4">
                                    <p className="text-lg font-medium">{review.name}</p>
                                    <p className="text-sm text-yellow-400">{'⭐'.repeat(review.rating)}</p>
                                    <p className="text-gray-300 mt-2">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Seção de Chat */}
                    <div className="mt-10 border-t border-gray-600 pt-6">
                        <h2 className="text-2xl font-semibold mb-6">Chat</h2>
                        <div className="space-y-4">
                            {/* Mensagens do chat */}
                            <div className="space-y-4">
                                {messages.map((msg, index) => (
                                    <div key={index} className="bg-gray-700 p-4 rounded-lg">
                                        <strong className="text-yellow-400">{msg.user}:</strong>
                                        <p className="text-white mt-1">{msg.message}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Campo de texto para enviar novas mensagens */}
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg"
                                    placeholder="Digite sua mensagem..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500"
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
