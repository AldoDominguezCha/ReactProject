import { useParams } from 'react-router-dom';

const ProductDetail = props => {

    const routeParams = useParams();

    return (
        <section>
            <h1>Product Detail</h1>
            <p>This is the id for the product: {routeParams.productId}</p>
        </section>
    );
};

export default ProductDetail;