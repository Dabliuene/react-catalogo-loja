import { useParams } from 'react-router-dom'
import './info.css'

const Info = () => {
    const { id } = useParams()

  return (
    <div>
        <h1>Mais informações sobre o produto: {id}</h1>
        <h2>Avaliações: </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam dictum, orci a aliquam tempor, quam velit egestas lorem, et porta urna tortor sodales turpis. 
          In sed rutrum mauris. Sed ut ante at turpis aliquam interdum quis vel libero. 
          Sed eget orci ullamcorper, fringilla ipsum id, malesuada risus. Suspendisse gravida neque nec turpis imperdiet, et congue quam dapibus. 
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque pretium neque turpis, non faucibus tellus volutpat ut.
        </p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam dictum, orci a aliquam tempor, quam velit egestas lorem, et porta urna tortor sodales turpis. 
          In sed rutrum mauris. Sed ut ante at turpis aliquam interdum quis vel libero. 
          Sed eget orci ullamcorper, fringilla ipsum id, malesuada risus. Suspendisse gravida neque nec turpis imperdiet, et congue quam dapibus. 
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque pretium neque turpis, non faucibus tellus volutpat ut.
        </p>
    </div>
  )
}

export default Info