import Container from "../../components/Container";
import { Styled } from './styles';
import CardProduct from '../../components/CardProduct';
import { useProduct } from '../../hooks/contexts/ProductProvider';
import {useEffect} from 'react';

function Home() {
  const { products, getProducts } =useProduct()
  useEffect(() => {
    getProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Container title="Ultimos cadastros" size="lg">
      <Styled.CardWrapper>
        {products.map(product =>(
          <CardProduct 
            key={product.id}
            product={product}
          />
        ))}
      </Styled.CardWrapper>
  </Container>
  )
}

export default Home;