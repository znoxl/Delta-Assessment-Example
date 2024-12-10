import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAllProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://project-data-1-ex9g.onrender.com/get')
      .then((response) => {
        console.log(response.data); // Gelen veriyi consolede görmek için 
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Veri alınırken hata oluştu:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div 
      style={{ 
        background: 'linear-gradient(135deg, #2C3E50, #FD746C)', // Arka plan degrade rengi
        minHeight: '100vh', 
        padding: '20px', // Daha az padding, mobil için uygun
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div 
        style={{
          backgroundColor: '#fff', // İçeriğin arka planı beyaz
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Hafif gölge efekti
          width: '100%',
          maxWidth: '1000px',
          boxSizing: 'border-box', // Box sizing ekleyerek padding içeriği sıkıştırmaz
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#2C3E50' }}>Get All Products</h1>
        {loading ? (
          <p style={{ textAlign: 'center' }}>Veriler yükleniyor...</p>
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

export default GetAllProduct;
