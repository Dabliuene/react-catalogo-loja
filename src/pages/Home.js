import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

// CSS
import './Home.css'

const Home = () => {
  //3 - Carregamento de dados
  const url = "https://my-json-server.typicode.com/dabliuene/react-catalogo-loja/products"
  const {data: items, loading, error} = useFetch(url)

  return (
    <div className='div_home'>
      <h1>Produtos:</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando produtos...</p>}
      <ul className="products">
        {items && items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            {/* 4 - Rota dinâmica */}
            <Link to={`/products/${item.id}`} className="link">Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home