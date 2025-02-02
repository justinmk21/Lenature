import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from "./components/ui/provider.jsx";
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import store from './cosmeticStoreComponents/Store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ReduxProvider>
  </StrictMode>,
)
