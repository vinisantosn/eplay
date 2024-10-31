import { title } from 'process'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          title="Jgo"
          system="windows"
          category="Ação"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem maxime delectus, aliquid reiciendis cupiditate, repudiandae rem omnis magni voluptate excepturi eligendi, in pariatur ullam soluta adipisci natus rerum? Quo, expedita."
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          title="Jgo"
          system="windows"
          category="Ação"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem maxime delectus, aliquid reiciendis cupiditate, repudiandae rem omnis magni voluptate excepturi eligendi, in pariatur ullam soluta adipisci natus rerum? Quo, expedita."
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          title="Jgo"
          system="windows"
          category="Ação"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem maxime delectus, aliquid reiciendis cupiditate, repudiandae rem omnis magni voluptate excepturi eligendi, in pariatur ullam soluta adipisci natus rerum? Quo, expedita."
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          title="Jgo"
          system="windows"
          category="Ação"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem maxime delectus, aliquid reiciendis cupiditate, repudiandae rem omnis magni voluptate excepturi eligendi, in pariatur ullam soluta adipisci natus rerum? Quo, expedita."
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
        />
      </List>
    </div>
  </Container>
)

export default ProductList
