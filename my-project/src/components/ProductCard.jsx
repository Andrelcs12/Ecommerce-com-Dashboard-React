import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <Link to={`/product-detail/${product.id}`} className="block">
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-slate-50 truncate">{product.title}</h3>
        </div>
        <div className="mt-4">
          <p className="text-slate-300 text-sm h-16 overflow-hidden">{product.description}</p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-lg font-bold text-slate-100">
              R${product.price.toFixed(2)}
            </span>
            <button
        onClick={() => handleAddToCart(product)}
        className="bg-zinc-50 text-black py-2 px-2 rounded-lg hover:bg-blue-700 hover:shadow-lg transition duration-300"
      >
        Adicionar ao Carrinho
      </button>
          </div>
        </div>
      </Link>
      
    </div>
  );
};

export default ProductCard;
