

function Index() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to My App</h1>
      <p>
        This is a sample index page. You can use this section to introduce
        your application or show important information.
      </p>

      <button
        onClick={() => alert('Button clicked!')}
        style={{
          padding: '10px 16px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Index;
