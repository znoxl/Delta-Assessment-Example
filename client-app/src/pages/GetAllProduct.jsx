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
        padding: '50px 20px',
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
          width: '80%',
          maxWidth: '1000px',
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#2C3E50' }}>Get All Products</h1>
        {loading ? (
          <p style={{ textAlign: 'center' }}>Veriler yükleniyor...</p>
        ) : (
          <table 
            border="1" 
            style={{ 
              width: '100%', 
              textAlign: 'center', 
              backgroundColor: '#f9f9f9', 
              borderCollapse: 'collapse',
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
              {products.map((product) => (
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
        )}
      </div>
    </div>
  );
};

export default GetAllProduct;
