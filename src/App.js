// CSS
import './App.css';

//1 - Config React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Componentes
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';

// Paginas
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>👾 LOJA NERD 🖖</h1>
      <h2 id='titulo'>Catálogo de produtos:</h2>
      <BrowserRouter>
        {/* 2 - Link com react router */}
        <NavBar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9 - search */}
          <Route path='/search' element={<Search />} />
          {/* 10 - redirect */}
          <Route path='/company' element={<Navigate to='/about'/>} />
          {/* 7 - bo match route */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
