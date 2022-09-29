import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import './Search.css'

const Search = () => {
    const [ searchParams ] = useSearchParams()
    const url = 'https://my-json-server.typicode.com/dabliuene/react-catalogo-loja/products?' + searchParams
    const {data: items, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Resultados disponiveis: </h1>
        <ul className="products">
            {items && 
            items.map((item) => (
            <li key={item.id}>
                <h2>{item.name}</h2>
                <p>R$: {item.price}</p>
                <Link to={`/products/${item.id}`} className="link_search">Detalhes</Link>
            </li>
            ))}
      </ul>
    </div>
  )
}

export default Search