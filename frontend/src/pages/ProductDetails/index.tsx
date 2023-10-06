import { ReactComponent as Seta } from 'assets/images/Seta.svg';
import ProductPrice from 'components/ProductPrice';
import { Link } from 'react-router-dom';
import './styles.css';

function ProductDetails() {
  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <Link to={'/products'}>
          <div className="goback-container">
            <Seta />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt="imagem teste"
              />
            </div>
            <div className="name-price-container">
              <h1>Nome do produto</h1>
              <ProductPrice price={2345.67} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                dolor!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
