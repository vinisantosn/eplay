import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.co/222x250" />
    <Titulo>Novo jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
      voluptate eveniet totam ipsa mollitia maiores, minus ad laborum nam
      suscipit earum itaque temporibus dicta aspernatur ipsam nobis optio
      facilis qui!
    </Descricao>
  </Card>
)

export default Product
