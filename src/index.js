import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering
import App from './App'; // Importing the main App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS for styling
import './index.css'; // Importing custom CSS styles
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing

// Rendering the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrapping the App component with BrowserRouter for routing */}
    <BrowserRouter>
      <App /> {/* Rendering the main App component */}
    </BrowserRouter>
  </React.StrictMode>
);
