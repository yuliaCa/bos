import styles from './ProductCard.module.css';

function ProductCard(props) {


    return (

        <div>
            <h3>{props.productInfo.category}</h3>
            <img src={props.productInfo.image} />
            <h5>{props.productInfo.name}</h5>
            <p>Product Details</p>
        </div>

    )
}


export default ProductCard;