import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Header from './Header'; // Importa o Header

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]); // Estado para os itens do carrinho

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
        setLoading(false);
      });

    // Carrega os itens do carrinho do localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Conta a quantidade de itens no carrinho
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(category, searchTerm);
  };

  const filterProducts = (category, search) => {
    let filtered = products;

    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    if (search) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterProducts(selectedCategory, event.target.value);
  };

  if (loading) {
    return (
      <div className='bg-slate-700 text-6xl  md:text-6xl lg:text-7xl h-screen text-gray-50 flex justify-center items-center'>
        Carregando...
      </div>
    );
  }
  

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Passando o cartItemCount para o Header */}
      <Header cartItemCount={cartItemCount} /> 

      <div className='px-6 py-12 bg-gradient-to-r from-indigo-900 via-slate-800 to-indigo-900'>
        <h1 className='text-4xl font-bold text-center mb-12 text-slate-100'>Produtos do Dré</h1>

        {/* Campo de Pesquisa */}
        <div className='flex justify-center mb-10'>
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Pesquise por nome ou descrição"
              className='px-6 py-3 rounded-full w-full text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={searchTerm}
              onChange={handleSearch}
            />
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-slate-500">
              <i className="fa fa-search"></i>
            </span>
          </div>
        </div>

        {/* Filtro por Categoria */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {['all', 'electronics', 'jewelery', 'men clothing', 'women clothing'].map(category => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-lg font-medium mb-2
                ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-200'}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category === 'all' ? 'Todos' : category === 'electronics' ? 'Eletrônicos' : category === 'jewelery' ? 'Joias' : category === 'men clothing' ? 'Roupas Masculinas' : 'Roupas Femininas'}
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
