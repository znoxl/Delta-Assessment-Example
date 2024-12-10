import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetFirstProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Verileri çeken fonksiyon
  const fetchProducts = () => {
    setLoading(true);
    axios
      .get('https://project-data-1-ex9g.onrender.com/get?_limit=10')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Veriler yüklenirken hata oluştu:', error);
        setLoading(false);
      });
  };

  // Sayfa ilk yüklendiğinde verileri çek
  useEffect(() => {
    fetchProducts();
  }, []);

  // Ortak stiller
  const styles = {
    container: {
      background: 'linear-gradient(135deg, #2C3E50, #FD746C)', // Arka plan degrade rengi
      minHeight: '100vh',
      padding: '50px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      width: '80%',
      maxWidth: '1000px',
    },
    table: {
      width: '100%',
      marginTop: '20px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#2C3E50',
      color: '#fff',
    },
    tableCell: {
      padding: '10px',
      border: '1px solid #ddd',
    },
    loadingText: {
      fontSize: '18px',
      color: '#f0ad4e',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={{ textAlign: 'center', color: '#2C3E50' }}>First 10 Products</h1>
        {loading ? (
          <p style={styles.loadingText}>Veriler yükleniyor...</p>
        ) : (
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableCell}>ID</th>
                <th style={styles.tableCell}>Ürün Adı</th>
                <th style={styles.tableCell}>Marka</th>
                <th style={styles.tableCell}>Fiyat</th>
                <th style={styles.tableCell}>Toplu Satış Fiyatı</th>
                <th style={styles.tableCell}>Adet</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td style={styles.tableCell}>{product.id}</td>
                  <td style={styles.tableCell}>{product.Name}</td>
                  <td style={styles.tableCell}>{product.Brand}</td>
                  <td style={styles.tableCell}>{product.Price}</td>
                  <td style={styles.tableCell}>{product['Wholesale-Price']}</td>
                  <td style={styles.tableCell}>{product.Quantity}</td>
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
