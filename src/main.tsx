import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResults from './page/SearchResults'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <App />}/>
        <Route path = "/seacher" element = { <SearchResults />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
