import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetFirstProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Verileri çeken fonksiyon
  const fetchProducts = (page) => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/get?_limit=10&_start=10`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Veriler yüklenirken hata oluştu:', error);
        setLoading(false);
      });
  };

  // Sayfa ilk yüklendiğinde ilk sayfayı çek
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #2C3E50, #FD746C)',
        minHeight: '100vh',
        padding: '50px 20px',
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
          width: '80%',
          maxWidth: '1000px',
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#2C3E50' }}>Middle Product</h1>
        {loading ? (
          <p style={{ textAlign: 'center', fontSize: '18px', color: '#f0ad4e' }}>
            Veriler yükleniyor...
          </p>
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

export default GetFirstProduct;
