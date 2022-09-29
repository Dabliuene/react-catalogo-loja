import { useParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
    //4 - Rota dinâmica
    const {id} = useParams()

    // 5 - Carregamento de rota dinâmica
    const url = "https://my-json-server.typicode.com/dabliuene/react-projeto-catalogo-loja/products/" + id
    const {data: product, loading, error} = useFetch(url)

    return (
        <div>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R$: {product.price}</p>
                    {/* 6 - Nested routes */}
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                </div>
            )}
        </div>
    )
}

export default Product