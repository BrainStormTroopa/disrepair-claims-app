import React from 'react'

function App() {
  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        color: '#333',
        fontSize: '32px',
        marginBottom: '20px'
      }}>Disrepair Claims App</h1>
      <p style={{ 
        color: '#666',
        fontSize: '18px'
      }}>Welcome to the app - Testing with inline styles</p>
      <button style={{
        padding: '12px 24px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '20px'
      }}>Test Button</button>
    </div>
  )
}

export default App