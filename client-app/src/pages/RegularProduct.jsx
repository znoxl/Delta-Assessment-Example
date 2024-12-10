import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegularProduct = () => {
  const [products, setProducts] = useState([]); // Ürünler
  const [currentPage, setCurrentPage] = useState(1); // Mevcut Sayfa
  const ITEMS_PER_PAGE = 10; // Sayfa başına gösterilecek ürün sayısı

  useEffect(() => {
    // Ürünleri al
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get('https://project-data-1-ex9g.onrender.com/get');
        setProducts(response.data);
      } catch (error) {
        console.error('Ürünler alınırken hata oluştu:', error);
      }
    };

    fetchAllProducts();
  }, []);

  // Sayfa numarasına göre gösterilecek ürünler
  const displayedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #2C3E50, #FD746C)',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '1000px',
          overflowX: 'auto', // Tablo taşmasını önler
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#2C3E50', marginBottom: '20px' }}>
          Ürün Listesi
        </h1>
        <table
          border="1"
          style={{
            width: '100%',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            borderCollapse: 'collapse',
            fontSize: '14px',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#2C3E50', color: '#fff' }}>
              <th>ID</th>
              <th>Ürün Adı</th>
              <th>Marka</th>
              <th>Fiyat</th>
              <th>Toplu Satış Fiyatı</th>
              <th>Adet</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.Name}</td>
                <td>{product.Brand}</td>
                <td>{product.Price}</td>
                <td>{product['Wholesale-Price']}</td>
                <td>{product.Quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: '10px 20px',
              margin: '0 10px',
              backgroundColor: '#2C3E50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              opacity: currentPage === 1 ? 0.5 : 1,
            }}
          >
            Önceki
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage * ITEMS_PER_PAGE >= products.length}
            style={{
              padding: '10px 20px',
              margin: '0 10px',
              backgroundColor: '#2C3E50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              opacity: currentPage * ITEMS_PER_PAGE >= products.length ? 0.5 : 1,
            }}
          >
            Sonraki
          </button>
        </div>
        <p style={{ textAlign: 'center', marginTop: '10px', color: '#2C3E50' }}>
          Şu anki sayfa: {currentPage}
        </p>
      </div>
    </div>
  );
};

export default RegularProduct;
