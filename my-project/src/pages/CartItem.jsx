import React, { useEffect, useState } from 'react';

const CartItem = ({ item, updateCart }) => {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCart(cartItems);
  }, [cartItems, updateCart]);

  // Função para alterar a quantidade do item
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) => {
      return prevItems.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity: Math.max(cartItem.quantity + delta, 1) } : cartItem
      );
    });
  };

  // Função para remover o item do carrinho
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center bg-gray-800 p-4 rounded-lg w-full shadow-md mb-4 overflow-hidden">
      {/* Imagem do item */}
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-cover rounded-lg mr-6 sm:mr-8 mb-4 sm:mb-0 sm:w-28 sm:h-28" // Responsividade para imagem
      />

      {/* Informações do item */}
      <div className="flex-grow flex flex-col sm:flex-row sm:items-start items-center justify-between w-full">
        <div className="flex flex-col w-full mb-4 sm:mb-0">
          <h4 className="text-lg font-semibold text-white w-full truncate">{item.title}</h4>
          <p className="text-gray-400 font-bold text-lg">R${item.price.toFixed(2)}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          <p className="text-gray-300  text-lg">
            <span className="font-bold ">Cor:</span> {item.selectedColor || 'Não especificado'}
          </p>
          <p className="text-gray-300 text-lg">
            <span className="font-bold ">Tamanho:</span> {item.selectedSize || 'Não especificado'}
          </p>
        </div>
      </div>

      {/* Controles de quantidade e remoção */}
      <div className="flex items-center sm:ml-4 sm:mt-0 mt-4 space-x-3">
        {/* Botão para reduzir a quantidade */}
        <button
          onClick={() => handleQuantityChange(item.id, -1)}
          className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          -
        </button>

        {/* Exibe a quantidade */}
        <span className="bg-gray-700 text-white py-1 px-4 rounded-lg">{item.quantity}</span>

        {/* Botão para aumentar a quantidade */}
        <button
          onClick={() => handleQuantityChange(item.id, 1)}
          className="bg-green-600 text-white py-1 px-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          +
        </button>

        {/* Botão de remover */}
        <button
          onClick={() => handleRemoveItem(item.id)}
          className="text-gray-400 hover:text-gray-100 focus:outline-none transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;