import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetFirstProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Verileri çeken fonksiyon
  const fetchProducts = () => {
    setLoading(true);
    axios
      .get(`https://project-data-1-ex9g.onrender.com/get?_limit=10&_start=10`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Veriler yüklenirken hata oluştu:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#2C3E50', marginBottom: '20px' }}>
          Middle Product
        </h1>
        {loading ? (
          <p style={{ textAlign: 'center', fontSize: '18px', color: '#f0ad4e' }}>
            Veriler yükleniyor...
          </p>
        ) : (
          <div
            style={{
              overflowX: 'auto', // Yatay kaydırma desteği
            }}
          >
            <table
              border="1"
              style={{
                width: '100%',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                borderCollapse: 'collapse',
                fontSize: '14px', // Mobilde daha okunabilir font boyutu
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#2C3E50', color: '#fff' }}>
                  <th style={{ padding: '10px' }}>ID</th>
                  <th style={{ padding: '10px' }}>Ürün Adı</th>
                  <th style={{ padding: '10px' }}>Marka</th>
                  <th style={{ padding: '10px' }}>Fiyat</th>
                  <th style={{ padding: '10px' }}>Toplu Satış Fiyatı</th>
                  <th style={{ padding: '10px' }}>Adet</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td style={{ padding: '10px' }}>{product.id}</td>
                    <td style={{ padding: '10px' }}>{product.Name}</td>
                    <td style={{ padding: '10px' }}>{product.Brand}</td>
                    <td style={{ padding: '10px' }}>{product.Price}</td>
                    <td style={{ padding: '10px' }}>{product['Wholesale-Price']}</td>
                    <td style={{ padding: '10px' }}>{product.Quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetFirstProduct;
