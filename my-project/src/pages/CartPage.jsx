import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Header from './Header';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header cartItemCount={cartItemCount} />

      <div className="p-6">
        <h1 className="text-3xl text-slate-100 mb-8">Carrinho</h1>

        <div className="flex flex-col sm:flex-row lg:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
          <div className="w-full sm:w-2/3 lg:w-2/3">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem key={item.id} item={item} updateCart={updateCart} />
              ))
            ) : (
              <p className="text-white">Seu carrinho está vazio.</p>
            )}
          </div>

          <div className="w-full sm:w-1/3 lg:w-1/3 bg-slate-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold text-slate-100 mb-4">Resumo da Compra</h2>
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <div className="flex justify-between mb-4">
                <p className="text-slate-200 font-bold">Subtotal</p>
                <p className="text-slate-100 text-lg">R${total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-slate-200 font-bold">Frete (estimado)</p>
                <p className="text-slate-100 text-lg">R$ 20,00</p>
              </div>
              <div className="flex justify-between mt-4">
                <h3 className="text-xl font-bold text-slate-100">Total</h3>
                <h3 className="text-xl text-slate-100">R${(total + 20).toFixed(2)}</h3>
              </div>
              <Link
                to="/checkout"
                className="w-full block text-center font-bold mt-6 py-3 px-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
              >
                Finalizar Compra
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
