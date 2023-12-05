import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import './App.css'; // Asegúrate de importar el archivo CSS

async function auth() {
  const response = await fetch('http://127.0.0.1:3000/request', { method: 'post' });
  const data = await response.json();
  console.log(data);
  window.location.href = data.url;
}

function App() {
  return (
    <div className="container">
      <h1>Welcome to Google Authentication</h1>
      <h3>Google OAuth</h3>
      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        onClick={auth}
        style={{ backgroundColor: '#4285F4', color: 'white' }}
      >
        Sign in with Google
      </Button>
    </div>
  );
}

export default App;